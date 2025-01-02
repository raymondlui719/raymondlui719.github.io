import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { ThemeToggleButton } from "@/components/theme-toggle-button";
import { getTranslations } from "@/i18n";
import Image from "next/image";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const MainPage = async (props: PageProps) => {
  const params = await props.params;

  const { locale } = params;

  const t = await getTranslations({ locale });

  return (
    <>
      <Navbar t={t} />
      <main className="flex min-h-screen flex-col">
        <div className="container mx-auto">
          <div className="mx-auto w-11/12">
            <HeroSection />
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer t={t} />
    </>
  );
};

export default MainPage;
