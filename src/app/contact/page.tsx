"use client";

import { useState } from "react";
import { z } from "zod";

export default function Contact() {
  const contactSchema = z.object({
    firstName: z
      .string()
      .min(1, "First name is required!")
      .max(20, "The name is too long!"),
    lastName: z
      .string()
      .min(1, "Last name is required!")
      .max(20, "The name is too long!"),
    email: z.string().email(),
    subject: z.string().min(1, "Subject is required!"),
    message: z.string().min(1, "Message is required!"),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        fieldErrors[field] = err.message;
      });

      setErrors(fieldErrors);
      setStatus("error");
      return;
    }

    try {
      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(result.data),
        headers: { "Content-Type": "application/json" },
      });

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch (err) {
      console.log(err);
      setStatus("error");
    }
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-[500px] space-y-5 flex flex-col justify-center  "
          autoComplete="off"
        >
          {["firstName", "lastName", "email", "subject", "message"].map(
            (field) => {
              const isTextarea = field === "message";
              return (
                <div key={field}>
                  {isTextarea ? (
                    <textarea
                      id={field}
                      name={field}
                      rows={4}
                      value={formData[field as keyof ContactFormData]}
                      onChange={handleChange}
                      className="contact-input border-2 rounded placeholder:pl-1 pl-2"
                      placeholder="Message"
                    />
                  ) : (
                    <input
                      id={field}
                      name={field}
                      type="text"
                      value={formData[field as keyof ContactFormData]}
                      onChange={handleChange}
                      className="contact-input"
                      placeholder={field.replace(/([A-Z])/g, " $1")}
                    />
                  )}

                  {errors[field as keyof ContactFormData] && (
                    <p className="text-red-500 text-sm">
                      {errors[field as keyof ContactFormData]}
                    </p>
                  )}
                </div>
              );
            }
          )}

          <button
            type="submit"
            className="hero-btns"
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-600 mt-2">Message sent successfully!</p>
          )}
          {status === "error" && Object.keys(errors).length === 0 && (
            <p className="text-red-600 mt-2">
              Something went wrong. Try again later.
            </p>
          )}
        </form>
      </div>
    </>
  );
}
