import About from "@/components/About";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <main className="w-full bg-bg-primary text-text-primary relative flex flex-col overflow-hidden mx-auto">
      <div>
        <Navbar/>
        <Hero/>
        <About/>
        <RecentProjects/>
        <Footer/>
      </div>
    </main>
  );
}
