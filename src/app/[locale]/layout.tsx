import { IntlProvider } from "@/components/intl-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { getMessages, getTranslations, supportedLocales } from "@/i18n";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return supportedLocales.map((locale) => ({
    locale,
  }));
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout(props: RootLayoutProps) {
  const params = await props.params;
  const { children } = props;
  const messages = await getMessages(params.locale);

  return (
    <html lang={params.locale} suppressHydrationWarning className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <IntlProvider locale={params.locale} messages={messages}>
            {children}
          </IntlProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}

export async function generateMetadata(props: RootLayoutProps): Promise<Metadata> {
  const params = await props.params;

  const { locale } = params;

  const t = await getTranslations({ locale });
  return {
    title: "Raymond Lui",
    description: t("Index.description"),
  };
}
