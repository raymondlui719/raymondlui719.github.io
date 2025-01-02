import { createTranslator } from "next-intl";

interface TranslatorOptions {
  locale: string;
  namespace?: string;
}

export const supportedLocales = ["en", "zh"];

export const defaultLocale = "en";

export const getTranslations = async (config: TranslatorOptions) => {
  const { locale } = config;
  const messagesModule = await import(`@/i18n/messages/${locale}.json`);

  const translator = createTranslator({
    locale,
    messages: messagesModule.default,
  });

  return translator;
};
