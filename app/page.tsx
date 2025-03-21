import About from "@/components/About";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="w-full relative flex flex-col overflow-hidden mx-auto">
      <div>
        <Hero/>
        <About/>
      </div>
    </main>
  );
}
