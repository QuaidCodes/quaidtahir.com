import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Hero() {
  return (
    <BackgroundBeamsWithCollision className="flex flex-col">
      <div className="w-full flex justify-center items-center flex-col">
        <h1 className="text-8xl">This is QUAID TAHIR</h1>
        <span className="text-[#990000] text-8xl mb-10">قائد طاہر </span>
      </div>
      <p className="text-2xl mb-10">Software Engineer</p>

      <div>
        <button className="hero-btns">Portfolio</button>
        <button className="hero-btns">Contact</button>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
