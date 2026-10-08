import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <main className="relative mx-auto flex w-full flex-col overflow-hidden bg-ink text-fg">
      <div className="hud-grid pointer-events-none fixed inset-0" aria-hidden />

      <div className="relative">
        <Navbar/>
        <Hero/>
        <About/>
        <RecentProjects/>
        <Contact/>
        <Footer/>
      </div>
    </main>
  );
}
