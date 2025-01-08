import { IntlProvider } from "@/components/intl-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { getMessages, getTranslations, supportedLocales } from "@/i18n";
import { AppConstants } from "@/lib/constants";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Person, WithContext } from "schema-dts";
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

  const jsonLd: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Raymond Lui",
    givenName: "Raymond",
    familyName: "Lui",
    gender: "https://schema.org/Male",
    url: AppConstants.websiteUrl,
    image: `${AppConstants.websiteUrl}/img/profilePic.jpg`,
    description: messages.Index.description,
    sameAs: [AppConstants.linkedinUrl, AppConstants.twitterUrl, AppConstants.githubUrl],
    jobTitle: "Senior Software Engineer",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": AppConstants.websiteUrl,
    },
    knowsLanguage: ["yue-Hant-HK", "en"],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Hong Kong University of Science and Technology",
        sameAs: "https://hkust.edu.hk/",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Clementi Secondary School",
        sameAs: "https://www.clementi.edu.hk/",
      },
    ],
  };

  return (
    <html lang={params.locale} suppressHydrationWarning className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

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
    title: t("Index.title"),
    description: t("Index.description"),
    applicationName: t("Index.title"),
    authors: {
      name: AppConstants.author,
      url: AppConstants.githubUrl,
    },
    creator: AppConstants.author,
    generator: "Next.js",
    keywords: [
      "software",
      "developer",
      "raymond",
      "engineer",
      "web",
      "programming",
      "mobile",
      "backend",
    ],
    alternates: {
      canonical: "/",
      languages: Object.fromEntries(supportedLocales.map((l) => [l, `/${l}`])),
    },
    manifest: `${AppConstants.websiteUrl}/manifest.json`,
    openGraph: {
      type: "website",
      url: AppConstants.websiteUrl,
      title: t("Index.title"),
      description: t("Index.description"),
      siteName: t("Index.title"),
    },
    twitter: {
      site: AppConstants.websiteUrl,
      creator: "@RaymondLui719",
      description: t("Index.description"),
      title: t("Index.title"),
    },
    verification: {
      google: "NV2S5Bwgb9p5rXtdjgaeC_s-BujspeKuzL4wfejESwk",
    },
    formatDetection: {
      telephone: false,
      date: false,
      address: false,
      email: false,
      url: false,
    },
  };
}
