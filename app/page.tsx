import About from "@/components/About";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <main className="w-full bg-black text-text-primary relative flex flex-col overflow-hidden mx-auto">
      <div>
        <div className="fixed inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(cyan 1px, transparent 1px),
                linear-gradient(90deg, cyan 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
          }}></div>
        </div>
      

        <Navbar/>
        <Hero/>
        <About/>
        <RecentProjects/>
        <Footer/>
      </div>
    </main>
  );
}
