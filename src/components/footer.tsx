import { Translator } from "@/i18n";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import Link from "next/link";

export function Footer({ t }: { t: Translator }) {
  const year = new Date().getFullYear();
  // copy, year, all rights reserved
  return (
    <footer className="flex flex-col items-center justify-between border-t">
      <div className="flex w-full max-w-screen-xl flex-col items-center justify-between gap-4 px-4 py-2 text-center md:flex-row md:text-start">
        <p className="text-center text-sm leading-loose">
          {t("Footer.copyright", { year, name: t("Index.title") })}
        </p>
        <div className="flex gap-4">
          <Link href="https://github.com/raymondlui719" prefetch={false} target="_blank">
            <FaGithub className="h-6 w-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/raymondlui719" prefetch={false} target="_blank">
            <FaLinkedin className="h-6 w-6" />
          </Link>
          <Link href="mailto:raymond.lui24@gmail.com" prefetch={false} target="_blank">
            <LuMail className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
