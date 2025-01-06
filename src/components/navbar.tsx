"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AppConstants } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { ThemeToggleButton } from "./theme-toggle-button";

type NavbarLink = {
  href: string;
  title: string;
};

export function Navbar() {
  const t = useTranslations();
  const [open, setOpen] = useState(false);

  const links: NavbarLink[] = [
    { href: "#about", title: t("Navbar.about") },
    { href: "#experience", title: t("Navbar.experience") },
    { href: "#skills", title: t("Navbar.skills") },
    { href: "#hobbies", title: t("Navbar.hobbies") },
    { href: "#contact", title: t("Navbar.contact") },
  ];
  return (
    <header
      id="navbar"
      className="sticky top-0 z-10 flex h-20 w-full shrink-0 items-center border-b border-border bg-background/30 px-4 backdrop-blur-lg backdrop-filter md:px-6"
    >
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <LuMenu className="h-6 w-6" />
            <span className="sr-only">{t("Navbar.toggleMenu")}</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" onCloseAutoFocus={(event) => event.preventDefault()}>
          <SheetHeader>
            <Link href="#navbar" className="mr-6" prefetch={false} onClick={() => setOpen(false)}>
              <SheetTitle className="text-start">{AppConstants.author}</SheetTitle>
            </Link>
            <VisuallyHidden>
              <SheetDescription>{t("Navbar.toggleMenu")}</SheetDescription>
            </VisuallyHidden>
          </SheetHeader>
          <div className="grid gap-2 py-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex w-full items-center py-2 text-lg font-semibold"
                prefetch={false}
                onClick={() => setOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <NavLink href="#navbar" className="text-lg font-semibold">
        {AppConstants.author}
      </NavLink>
      <nav className="ml-auto flex gap-6">
        {links.map((link) => (
          <NavLink key={link.href} href={link.href} className="hidden md:block">
            {link.title}
          </NavLink>
        ))}
        <ThemeToggleButton />
      </nav>
    </header>
  );
}

function NavLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50",
        className,
      )}
      prefetch={false}
    >
      {children}
    </Link>
  );
}
