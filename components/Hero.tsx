'use client';

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spotlight } from "./ui/Spotlight";
import Image from "next/image";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["writes code", "designs systems", "thinks a lot", "sleeps"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div id="home" className="w-full h-full">
      <Image 
        src="/bg.png" 
        alt="bg" 
        height={100}
        width={100}
        className="absolute top-0 left-0 w-full h-screen z-0"
      />
      {/* <div className="absolute inset-0 h-screen bg-black/50 z-0"></div> */}
      <Spotlight/>
      <div className="relative container mx-auto z-10">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col text-text-primary">
            <h1 className="text-5xl md:text-7xl mt-20 max-w-5xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">A software engineer that</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center text-teal-700 md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl mt-20 leading-relaxed tracking-tight text-muted-foreground max-w-5xl text-center">
              This is Ayobami Paul. <br />Currently building projects for fun.
              It's all about passion, grit, commitment and determination. <br />
              Nah, that's just to bamboozle. It's actually all about having {" "}
              <span className="text-teal-700">fun.</span>
            </p>
          </div>
          <div className="flex flex-row gap-3 mt-10">
            <Button size="lg"  className="gap-4">
                Get In Touch <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="secondary" className="gap-4">
                Download CV <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
