"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { useTranslations } from "next-intl";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export function ContactForm() {
  const t = useTranslations();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
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
    <div id="contact" className="scroll-mt-20">
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
    </div>
  );
}
