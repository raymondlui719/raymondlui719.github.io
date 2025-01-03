import { ContactMeSection } from "@/components/contact-form";
import { ExperienceAndEducationSection } from "@/components/experience-and-education";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { getTranslations } from "@/i18n";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const MainPage = async (props: PageProps) => {
  const params = await props.params;

  const { locale } = params;

  const t = await getTranslations({ locale });

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <div className="container mx-auto">
          <div className="mx-auto w-11/12">
            <HeroSection />
            <ExperienceAndEducationSection />
            <ContactMeSection />
          </div>
        </div>
      </main>
      <Footer t={t} />
    </>
  );
};

export default MainPage;
