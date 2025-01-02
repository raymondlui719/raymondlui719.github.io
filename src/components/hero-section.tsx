"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useLottie, LottieOptions } from "lottie-react";
import { motion } from "framer-motion";
import Link from "next/link";
import heroAnimation from "@/animations/swe-animation.json";

const animationOptions: LottieOptions<"svg"> = {
  animationData: heroAnimation,
  loop: true,
  autoplay: true,
};

export function HeroSection() {
  const { View: LottieView } = useLottie(animationOptions);
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center justify-self-start text-center sm:text-left"
        >
          <h1 className="mb-4 text-3xl font-extrabold text-foreground sm:text-4xl lg:text-6xl lg:leading-normal">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Raymond Lui",
                1000,
                "Software Engineer",
                1000,
                "Mobile Developer",
                1000,
                "Web Developer",
                1000,
                "Backend Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="mb-6 text-base text-foreground/80 sm:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptuous.
          </p>
          <div>
            <Link
              href="/#contact"
              className="mr-4 inline-block w-full rounded-full bg-gradient-to-br from-primary to-secondary px-6 py-3 text-white hover:bg-slate-200 sm:w-fit"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="mt-3 inline-block w-full rounded-full bg-gradient-to-br from-primary to-secondary px-1 py-1 text-foreground hover:bg-slate-800 sm:w-fit"
            >
              <span className="block rounded-full bg-accent px-5 py-2 hover:bg-accent/80">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 mt-4 place-self-center lg:mt-0"
        >
          <div className="relative h-[250px] w-[250px] rounded-full bg-accent lg:h-[400px] lg:w-[400px]">
            {LottieView}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
