
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col over-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
