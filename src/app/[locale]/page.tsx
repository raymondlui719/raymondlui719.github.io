import { ContactForm } from "@/components/contact-form";
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
      <main>
        <div className="container mx-auto">
          <div className="w-11/12 mx-auto">
            <ContactForm />
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPage;
