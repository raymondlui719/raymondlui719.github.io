import { createTranslator } from "next-intl";

interface TranslatorOptions {
  locale: string;
  namespace?: string;
}

export const supportedLocales = ["en", "zh"];

export const defaultLocale = "en";

export const getMessages = async (locale: TranslatorOptions["locale"]) => {
  const messages = await import(`@/i18n/messages/${locale}.json`);
  return messages.default;
};

export const getTranslations = async (config: TranslatorOptions) => {
  const { locale } = config;

  const translator = createTranslator({
    locale,
    messages: await getMessages(locale),
  });

  return translator;
};

export type Translator = Awaited<ReturnType<typeof getTranslations>>;
