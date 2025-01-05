"use client";

import { useTranslations } from "next-intl";
import React from "react";
import { LuBriefcaseBusiness, LuSchool, LuStar } from "react-icons/lu";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface ExperienceItem {
  date: string;
  name: string;
  title?: string;
  location?: string;
  description: React.ReactNode;
  icon?: React.ReactNode;
}

export function ExperienceAndEducationSection() {
  const t = useTranslations("Experiences");
  const experiences = ["pgFullTime", "pgIntern", "pwc"] as const;
  const educations = ["hkust", "css"] as const;
  const items: ExperienceItem[] = [
    ...experiences.map((experience) => ({
      date: t(`${experience}.date`),
      name: t(`${experience}.name`),
      title: t(`${experience}.title`),
      location: t(`${experience}.location`),
      description: t.rich(`${experience}.description`, {
        ul: (chunks) => <ul className="mt-1 list-inside list-disc text-sm">{chunks}</ul>,
        li: (chunks) => <li>{chunks}</li>,
      }),
      icon: <LuBriefcaseBusiness />,
    })),
    ...educations.map((education) => ({
      date: t(`${education}.date`),
      name: t(`${education}.name`),
      title: t(`${education}.title`),
      location: t(`${education}.location`),
      description: t.rich(`${education}.description`, {
        ul: (chunks) => <ul className="mt-1 list-inside list-disc text-sm">{chunks}</ul>,
        li: (chunks) => <li>{chunks}</li>,
      }),
      icon: <LuSchool />,
    })),
  ];
  return (
    <section id="experience" className="mt-12 flex scroll-mt-32 flex-col items-center">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{t("title")}</h3>
      <p>{t("description")}</p>
      <VerticalTimeline
        animate={true}
        layout="2-columns"
        lineColor="hsl(var(--border))"
        className="!mt-3 !pb-0"
      >
        {items.map((item, index) => {
          const isEven = index % 2 === 0;
          const backgroundColor = isEven ? "hsl(var(--primary))" : "hsl(var(--secondary))";
          return (
            <VerticalTimelineElement
              key={`vertical-timeline-element-${index}`}
              contentStyle={{ background: backgroundColor, color: "#fff", boxShadow: "none" }}
              contentArrowStyle={{ borderRight: `7px solid ${backgroundColor}` }}
              date={item.date}
              dateClassName="text-white vtc:text-foreground"
              iconStyle={{ background: backgroundColor, color: "#fff" }}
              icon={item.icon}
            >
              <h3 className="vertical-timeline-element-title scroll-m-20 text-2xl font-semibold tracking-tight">
                {item.title ? `${item.name} - ${item.title}` : item.name}
              </h3>
              {item.location && (
                <p className="vertical-timeline-element-subtitle !mt-1">{item.location}</p>
              )}
              {item.description}
            </VerticalTimelineElement>
          );
        })}
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<LuStar />}
        />
      </VerticalTimeline>
    </section>
  );
}
