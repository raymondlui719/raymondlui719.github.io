"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { AppConstants } from "@/lib/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { z } from "zod";
import { Textarea } from "./ui/textarea";

interface FormSchema {
  fullName: string;
  email: string;
  message: string;
}

export function ContactMeSection() {
  const t = useTranslations();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSchema = useMemo(() => {
    return z.object({
      fullName: z.string().min(1, {
        message: t("ContactForm.formErrorName"),
      }),
      email: z.string().email({
        message: t("ContactForm.formErrorEmail"),
      }),
      message: z.string().min(1, {
        message: t("ContactForm.formErrorMessage"),
      }),
    });
  }, [t]);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormSchema) => {
    setIsSubmitting(true);

    try {
      const endpoint = "https://formcarry.com/s/iVGlGTky-6P";
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      };

      const response = await fetch(endpoint, options);
      const data = await response.json();

      if (response.status === 200) {
        toast({
          title: t("ContactForm.successTitle"),
          description: t("ContactForm.successMessage"),
        });
      } else {
        toast({
          title: t("ContactForm.errorTitle"),
          description: t("ContactForm.errorMessage"),
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: t("ContactForm.errorTitle"),
        description: t("ContactForm.errorMessage"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="grid scroll-mt-20 gap-4 py-24 md:grid-cols-2">
      <div className="z-[1]">
        <h5 className="my-2 text-xl font-bold text-foreground">{t("ContactForm.title")}</h5>
        <p className="mb-4 max-w-md text-muted-foreground">{t("ContactForm.description")}</p>
        <div className="flex flex-row gap-2">
          <Link href={AppConstants.githubUrl} prefetch={false} target="_blank">
            <FaGithub className="h-8 w-8" />
          </Link>
          <Link href={AppConstants.linkedinUrl} prefetch={false} target="_blank">
            <FaLinkedin className="h-8 w-8" />
          </Link>
          <Link href={AppConstants.whatsappUrl} prefetch={false} target="_blank">
            <FaWhatsapp className="h-8 w-8" />
          </Link>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("ContactForm.fullName")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("ContactForm.fullNamePlaceholder")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("ContactForm.email")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("ContactForm.emailPlaceholder")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("ContactForm.message")}</FormLabel>
                <FormControl>
                  <Textarea placeholder={t("ContactForm.messagePlaceholder")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" loading={isSubmitting}>
            {t("ContactForm.submit")}
          </Button>
        </form>
      </Form>
    </section>
  );
}
