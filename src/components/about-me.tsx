import Link from "next/link";
import { FaEarthAsia, FaGithub, FaLinkedin } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function AboutMeSection() {
  return (
    <section
      id="about"
      className="grid scroll-mt-20 items-center gap-8 py-8 md:grid-cols-3"
      style={{
        minHeight: "calc(100vh - 5rem)",
      }}
    >
      <div className="flex flex-col items-center gap-4 md:col-span-1">
        <img
          src="/img/profilePic.jpg"
          className="aspect-square w-full max-w-52 place-self-center rounded-full border border-border object-cover"
          alt="Raymond Lui"
        />
        <div className="flex flex-row items-center gap-2">
          <FaEarthAsia className="h-5 w-5 text-muted-foreground" />
          <p>Asia/Hong Kong</p>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-2">
          <Badge variant="outline">English</Badge>
          <Badge variant="outline">Cantonese</Badge>
          <Badge variant="outline">Putonghua</Badge>
        </div>
      </div>
      <div className="flex flex-col items-center md:col-span-2 md:items-start">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Raymond Lui
        </h1>
        <h3 className="mt-1 scroll-m-20 text-2xl tracking-tight text-muted-foreground">
          Software Engineer
        </h3>
        <div className="mt-3 flex flex-row gap-3">
          <Link href="https://github.com/raymondlui719" prefetch={false} target="_blank">
            <Button variant="outline">
              <FaGithub className="h-4 w-4" />
              GitHub
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/raymondlui/" prefetch={false} target="_blank">
            <Button variant="outline">
              <FaLinkedin className="h-4 w-4" />
              LinkedIn
            </Button>
          </Link>
          <Link href="mailto:raymond.lui24@gmail.com" prefetch={false} target="_blank">
            <Button variant="outline">
              <LuMail className="h-4 w-4" />
              Email
            </Button>
          </Link>
        </div>
        <div className="mt-4 flex w-full flex-col gap-4">
          <p>
            I am a Senior Software Engineer with 6 years of experience specializing in designing,
            developing, testing, and maintaining sophisticated mobile applications, websites, and
            backend servers. My expertise spans a wide range of domains, with a particular focus on
            navigation, traffic, and B2C e-commerce platforms.
          </p>
          <p>
            I excel at leading teams throughout the software development lifecycle, ensuring
            effective coordination and collaboration to deliver end products that meet client
            expectations.
          </p>
          <p>
            I am skilled in establishing clear project goals, managing resources, and providing
            guidance to team members to optimize productivity and achieve successful outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
