"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const LottieView = dynamic(() => import("./ui/lottie"), { ssr: false });

export function HeroSection() {
  const t = useTranslations();
  return (
    <section
      className="flex flex-row items-center lg:py-16"
      style={{
        minHeight: "calc(100vh - 5rem)",
      }}
    >
      <div className="my-auto grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="order-2 col-span-8 place-self-center justify-self-start text-center sm:order-1 sm:text-left"
        >
          <h1 className="mb-4 text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl lg:leading-normal">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t("HeroSection.Hello")}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Raymond Lui",
                2000,
                t("HeroSection.softwareEngineer"),
                1000,
                t("HeroSection.mobileDeveloper"),
                1000,
                t("HeroSection.webDeveloper"),
                1000,
                t("HeroSection.backendDeveloper"),
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="mb-6 pe-2 text-base text-foreground/80 sm:text-lg lg:text-xl">
            {t("HeroSection.summary")}
          </p>
          <div className="flex flex-row flex-wrap gap-3">
            <Link
              href="#contact"
              className="inline-block flex-grow rounded-full bg-gradient-to-br from-primary to-secondary px-6 py-3 text-white hover:bg-slate-200 sm:flex-grow-0"
            >
              {t("HeroSection.hireMe")}
            </Link>
            <a
              href="/pdf/CV_Raymond_Lui.pdf"
              download="CV_Raymond_Lui.pdf"
              className="inline-block flex-grow rounded-full bg-gradient-to-br from-primary to-secondary px-1 py-1 text-foreground hover:bg-slate-800 sm:flex-grow-0"
            >
              <span className="block rounded-full bg-accent px-5 py-2 hover:bg-accent/80">
                {t("HeroSection.downloadCV")}
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="order-1 col-span-4 mb-8 mt-4 max-w-80 place-self-center sm:order-2 lg:mb-0 lg:mt-0"
        >
          <div className="relative h-full w-full rounded-full bg-accent">
            <LottieView />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
