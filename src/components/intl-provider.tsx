"use client";

import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";

export function IntlProvider({
  children,
  locale,
  messages,
}: {
  children: ReactNode;
  locale: string;
  messages: Record<string, string>;
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="Asia/Hong_Kong">
      {children}
    </NextIntlClientProvider>
  );
}
