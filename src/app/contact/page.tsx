"use client";

import { useState, useEffect } from "react";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required!").max(20),
  lastName: z.string().min(1, "Last name is required!").max(20),
  email: z.string().email("Invalid email address!"),
  subject: z.string().min(1, "Subject is required!"),
  message: z.string().min(1, "Message is required!"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    if (status === "error") {
      const timeout = setTimeout(() => setErrors({}), 2000);
      return () => clearTimeout(timeout);
    }
  }, [status]);

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
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
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white px-6 py-12 flex flex-col md:flex-row max-w-7xl mx-auto gap-12">
      
      {/* About Me Section */}
      <section className="md:w-1/3 flex flex-col justify-center space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight">Hi, I’m Quaid Tahir</h1>
        <p className="text-lg leading-relaxed">
          I’m a passionate full-stack developer specializing in building performant, scalable, and user-friendly web applications using Next.js, React, TypeScript, and Node.js.  
        </p>
        <p className="text-lg leading-relaxed">
          Over the years, I’ve honed my skills in designing thoughtful digital experiences and solving real-world problems. I focus on clean code, modern best practices, and continuous learning.
        </p>
        <p className="text-lg leading-relaxed">
          Whether you have a project idea, want to collaborate, or just want to say hello — I’m always eager to connect.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="md:w-2/3 bg-black dark:bg-white dark:text-black rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold mb-6">Let’s Talk</h2>
        <form onSubmit={handleSubmit} noValidate autoComplete="off" className="space-y-6">
          {["firstName", "lastName", "email", "subject"].map((field) => {
            const label = field
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (str) => str.toUpperCase());
            const error = errors[field as keyof ContactFormData];
            return (
              <div key={field} className="relative">
                <input
                  id={field}
                  name={field}
                  type={field === "email" ? "email" : "text"}
                  value={formData[field as keyof ContactFormData]}
                  onChange={handleChange}
                  placeholder=" "
                  className={`peer block w-full rounded-md border-2 bg-transparent px-3 pt-5 pb-2 text-white dark:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    ${
                      error
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "border-gray-700 dark:border-gray-300"
                    }`}
                  aria-invalid={error ? "true" : "false"}
                  aria-describedby={error ? `${field}-error` : undefined}
                />
                <label
                  htmlFor={field}
                  className={`absolute left-3 top-2 text-gray-400 dark:text-gray-600 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-blue-400 peer-focus:text-sm
                    ${
                      error ? "text-red-500 peer-focus:text-red-500" : ""
                    }`}
                >
                  {label}
                </label>
                {error && (
                  <p
                    id={`${field}-error`}
                    className="mt-1 text-xs text-red-500"
                    role="alert"
                  >
                    {error}
                  </p>
                )}
              </div>
            );
          })}

          <div className="relative">
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder=" "
              className={`peer block w-full rounded-md border-2 bg-transparent px-3 pt-5 pb-2 text-white dark:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                ${
                  errors.message
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-700 dark:border-gray-300"
                }`}
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? `message-error` : undefined}
            />
            <label
              htmlFor="message"
              className={`absolute left-3 top-2 text-gray-400 dark:text-gray-600 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-blue-400 peer-focus:text-sm
                ${
                  errors.message ? "text-red-500 peer-focus:text-red-500" : ""
                }`}
            >
              Message
            </label>
            {errors.message && (
              <p
                id="message-error"
                className="mt-1 text-xs text-red-500"
                role="alert"
              >
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full flex items-center justify-center gap-3 rounded bg-white dark:bg-black dark:text-white text-black font-semibold px-6 py-3 hover:bg-gray-200 dark:hover:bg-gray-900 transition disabled:opacity-50"
          >
            {status === "submitting" ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-black dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>

          {status === "success" && (
            <p className="text-green-600 text-center font-medium">
              Thank you! Your message has been sent.
            </p>
          )}
          {status === "error" && Object.keys(errors).length === 0 && (
            <p className="text-red-600 text-center font-medium">
              Oops! Something went wrong. Please try again later.
            </p>
          )}
        </form>
      </section>
    </div>
  );
}
