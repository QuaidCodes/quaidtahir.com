import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Hero() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="w-full flex justify-center items-center flex-col">
        <p>I am</p>
        <h1 className="text-8xl">Quaid Tahir</h1>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
