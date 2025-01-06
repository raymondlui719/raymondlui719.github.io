import { Translator } from "@/i18n";
import { AppConstants } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { FaEarthAsia, FaGithub, FaLinkedin } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function AboutMeSection({ t }: { t: Translator }) {
  const aboutKeys = ["lineOne", "lineTwo", "lineThree"] as const;
  return (
    <section
      id="about"
      className="grid scroll-mt-20 items-center gap-8 py-8 md:grid-cols-3"
      style={{
        minHeight: "calc(100vh - 5rem)",
      }}
    >
      <div className="flex flex-col items-center gap-4 md:col-span-1">
        <div className="relative aspect-square w-full max-w-52 place-self-center">
          <Image
            src="/img/profilePic.jpg"
            className="rounded-full border border-border object-cover"
            alt={AppConstants.author}
            fill
          />
        </div>
        <div className="flex flex-row items-center gap-2">
          <FaEarthAsia className="h-5 w-5 text-muted-foreground" />
          <p>{t("About.timezone")}</p>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-2">
          <Badge variant="outline">{t("About.english")}</Badge>
          <Badge variant="outline">{t("About.cantonese")}</Badge>
          <Badge variant="outline">{t("About.putonghua")}</Badge>
        </div>
      </div>
      <div className="flex flex-col items-center md:col-span-2 md:items-start">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {AppConstants.author}
        </h1>
        <h2 className="mt-1 scroll-m-20 text-2xl tracking-tight text-muted-foreground">
          {t("HeroSection.softwareEngineer")}
        </h2>
        <div className="mt-3 flex flex-row gap-3">
          <Link href={AppConstants.githubUrl} prefetch={false} target="_blank">
            <Button variant="outline">
              <FaGithub className="h-4 w-4" />
              GitHub
            </Button>
          </Link>
          <Link href={AppConstants.linkedinUrl} prefetch={false} target="_blank">
            <Button variant="outline">
              <FaLinkedin className="h-4 w-4" />
              LinkedIn
            </Button>
          </Link>
          <Link href={AppConstants.emailUrl} prefetch={false} target="_blank">
            <Button variant="outline">
              <LuMail className="h-4 w-4" />
              {t("About.email")}
            </Button>
          </Link>
        </div>
        <div className="mt-4 flex w-full flex-col gap-4">
          {aboutKeys.map((key) => (
            <p key={key}>{t(`About.${key}`)}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
