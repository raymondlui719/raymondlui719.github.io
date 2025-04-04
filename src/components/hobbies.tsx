"use client";

import Autoplay from "embla-carousel-autoplay";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ReactNode, useCallback, useEffect, useRef } from "react";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
  type CarouselApi,
} from "./ui/carousel";

interface Hobby {
  title: string;
  imageUrl: string;
  description: ReactNode;
}

export function HobbiesSection() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  const t = useTranslations("Hobbies");
  const hobbies = ["badminton", "snooker", "bowling", "supercar", "meditation"] as const;

  return (
    <section
      id="hobbies"
      className="flex scroll-mt-20 flex-col items-center justify-center lg:py-8"
      style={{
        minHeight: "calc(100vh - 5rem)",
      }}
    >
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{t("title")}</h3>
      <p>{t("description")}</p>
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[plugin.current]}
        className="mt-3 w-full max-w-xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {hobbies.map((hobby, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="relative flex aspect-video items-center justify-center rounded-lg p-0">
                    <Image
                      className="h-full w-full rounded-lg object-cover"
                      src={`/img/${hobby}.jpg`}
                      alt={t(`${hobby}.title`)}
                      fill
                    />
                    <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center p-4">
                      <h4 className="text-center text-lg font-semibold shadow-black/30 text-shadow">
                        {t(`${hobby}.title`)}
                      </h4>
                      <p className="line-clamp-2 text-center text-sm shadow-black/30 text-shadow">
                        {t(`${hobby}.description`)}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 lg:-left-12" />
        <CarouselNext className="right-4 lg:-right-12" />
        <CarouselFadeEffect />
        <p className="text-end text-xs text-muted-foreground">
          Images from{" "}
          <a
            href="https://www.freepik.com"
            className="text-primary underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Freepik
          </a>
        </p>
      </Carousel>
    </section>
  );
}

const TWEEN_FACTOR_BASE = 0.84;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

function CarouselFadeEffect() {
  const tweenFactor = useRef(0);

  const setTweenFactor = useCallback((emblaApi: NonNullable<CarouselApi>) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenOpacity = useCallback((emblaApi: NonNullable<CarouselApi>, eventName?: string) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const opacity = numberWithinRange(tweenValue, 0, 1).toString();
        emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
      });
    });
  }, []);

  const { api: emblaApi } = useCarousel();

  useEffect(() => {
    if (!emblaApi) return;

    setTweenFactor(emblaApi);
    tweenOpacity(emblaApi);
    emblaApi
      .on("reInit", setTweenFactor)
      .on("reInit", tweenOpacity)
      .on("scroll", tweenOpacity)
      .on("slideFocus", tweenOpacity);
  }, [emblaApi, tweenOpacity]);
  return null;
}
