import { Translator } from "@/i18n";
import { AppConstants } from "@/lib/constants";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";

export function Footer({ t }: { t: Translator }) {
  const year = new Date().getFullYear();
  // copy, year, all rights reserved
  return (
    <footer className="flex flex-col items-center justify-between border-t">
      <div className="flex w-full max-w-screen-xl flex-col items-center justify-between gap-4 px-4 py-2 text-center md:flex-row md:text-start">
        <p className="text-center text-sm leading-loose">
          {t("Footer.copyright", { year, name: AppConstants.author })}
        </p>
        <div className="flex gap-4">
          <Link href={AppConstants.githubUrl} prefetch={false} target="_blank">
            <FaGithub className="h-6 w-6" />
          </Link>
          <Link href={AppConstants.linkedinUrl} prefetch={false} target="_blank">
            <FaLinkedin className="h-6 w-6" />
          </Link>
          <Link href={AppConstants.emailUrl} prefetch={false} target="_blank">
            <LuMail className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
