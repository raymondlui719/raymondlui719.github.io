"use client";

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

export function JobExperience() {
  const items: ExperienceItem[] = [
    {
      date: "2018 - Present",
      name: "Pokeguide Limited",
      title: "Mobile App Developer",
      location: "Hong Kong SAR",
      description: (
        <ul className="mt-1 list-inside list-disc text-sm">
          <li>
            Lead software development team of 4 front-end and back-end developers and interns in
            creating navigation apps, B2C e-commerce platform, and optimizing backend systems to
            ensure high quality and maintainable code.
          </li>
          <li>
            Coordinate with design and product teams to translate business concepts into
            comprehensive technical documents, enhancing cross-functional communication and
            accelerating project delivery.
          </li>
          <li>
            Stay up-to-date with industry trends and emerging technologies to drive the adoption of
            best practices and deliver cutting-edge solutions.
          </li>
        </ul>
      ),
      icon: <LuBriefcaseBusiness />,
    },
    {
      date: "2017",
      name: "Pokeguide Limited",
      title: "Mobile App Developer Intern",
      location: "Hong Kong SAR",
      description: (
        <ul className="mt-1 list-inside list-disc text-sm">
          <li>
            Develop the Android version of the Pokeguide App, especially the navigation function for
            visually impaired users
          </li>
          <li>Collaborate with other developers to implement user authentication backend in PHP</li>
        </ul>
      ),
      icon: <LuBriefcaseBusiness />,
    },
    {
      date: "2016",
      name: "PricewaterhouseCoopers",
      title: "Internal Firm Service Intern",
      location: "Hong Kong SAR",
      description: (
        <ul className="mt-1 list-inside list-disc text-sm">
          <li>Assist technical specialists to solve technical issues from the internal users</li>
          <li>
            Participate in the PC replacement scheme FY17:
            <ul className="ms-5 mt-1 list-inside list-disc text-sm">
              <li>
                Setup a new PC for internal users by configuring Windows, data backup & installing
                requested application.
              </li>
            </ul>
          </li>
        </ul>
      ),
      icon: <LuBriefcaseBusiness />,
    },
    {
      date: "2014 - 2018",
      name: "Hong Kong University of Science and Technology",
      description: (
        <ul className="mt-1 list-inside list-disc text-sm">
          <li>Bachelor of Engineering in Computer Science</li>
          <li>Minoring in Business</li>
          <li>Second Class Honors, Division I</li>
          <li>
            Final Year Project: Developing VR Horror Game with Unity and Google Cardboard SDK |
            Grade: A | Nominee of Best FYP Award 2018
          </li>
          <li>Member of University Choir, HKUSTSU. Vocal Part: Bass</li>
        </ul>
      ),
      icon: <LuSchool />,
    },
    {
      date: "2008 - 2014",
      name: "Clementi Secondary School",
      description: (
        <ul className="mt-1 list-inside list-disc text-sm">
          <li>{"DSE Best 5 score: 25 (With level 5* for Mathematics and ICT)"}</li>
          <li>Vice Chairperson of Technology Society</li>
        </ul>
      ),
      icon: <LuSchool />,
    },
  ];
  return (
    <div
      id="experience"
      className="mt-8 flex scroll-mt-28 flex-col items-center sm:mt-0 sm:scroll-mt-20"
    >
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Work Experience & Education
      </h3>
      <p>My previous jobs and my qualifications.</p>
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
    </div>
  );
}
