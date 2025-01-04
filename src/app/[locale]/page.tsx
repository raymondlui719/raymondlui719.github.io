import { AboutMeSection } from "@/components/about-me";
import { ContactMeSection } from "@/components/contact-form";
import { ExperienceAndEducationSection } from "@/components/experience-and-education";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { HobbiesSection } from "@/components/hobbies";
import { Navbar } from "@/components/navbar";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";
import { SkillsSection } from "@/components/skills";
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
            <AboutMeSection />
            <ExperienceAndEducationSection />
            <SkillsSection />
            <HobbiesSection />
            <ContactMeSection />
          </div>
        </div>
      </main>
      <Footer t={t} />
      <ScrollToTopButton />
    </>
  );
};

export default MainPage;
