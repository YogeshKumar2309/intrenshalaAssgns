"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CarSvg from "./CarSvg";

gsap.registerPlugin(ScrollTrigger);

const HEADLINE = "WELCOME ITZFIZZ";

const STATS = [
  { value: "58%", label: "Increase in pick up point use", side: "left", pos: "md:left-[7%] md:top-[30%]" },
  { value: "23%", label: "Decreased in customer phone calls", side: "left", pos: "md:left-[12%] md:top-[60%]" },
  { value: "27%", label: "Increase in pick up point use", side: "right", pos: "md:right-[12%] md:top-[34%]" },
  { value: "40%", label: "Decreased in customer phone calls", side: "right", pos: "md:right-[7%] md:top-[64%]" },
];

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    // gsap.context collects every tween/ScrollTrigger so cleanup is one call
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      /* ---------- Full motion ---------- */
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        /* 1) Intro: one orchestrated sequence on load */
        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
        intro
          .from(".car-intro", { yPercent: -40, opacity: 0, duration: 1.4, ease: "power4.out" })
          .from(".hl-letter", { yPercent: 60, opacity: 0, duration: 0.9, stagger: 0.045 }, "-=0.9")
          .from(".stat", { y: 36, opacity: 0, duration: 0.9, stagger: 0.18 }, "-=0.4");

        /* 2) Scroll: progress-based, scrubbed with a 1.2s catch-up for smooth easing */
        const scroll = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "+=220%",
            pin: true,
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });

        scroll
          // car drives down the road, sways, and grows slightly (camera pulling in)
          .to(".car-scroll", { y: () => window.innerHeight * 0.42, scale: 1.45, duration: 1 }, 0)
          .to(".car-scroll", { x: () => window.innerWidth * -0.06, rotation: -6, duration: 0.35, ease: "sine.inOut" }, 0.1)
          .to(".car-scroll", { x: () => window.innerWidth * 0.07, rotation: 7, duration: 0.4, ease: "sine.inOut" }, 0.45)
          .to(".car-scroll", { x: 0, rotation: 0, duration: 0.25, ease: "sine.inOut" }, 0.85)
          // road markings stream past the car
          .to(".road-dashes", { yPercent: -50, duration: 1 }, 0)
          // shadow stretches with the car
          .to(".car-shadow", { scaleX: 1.3, opacity: 0.45, duration: 1 }, 0)
          // headline drifts up and dissolves
          .to(".headline", { yPercent: -60, opacity: 0, duration: 0.6 }, 0)
          // stats slide off to their own sides
          .to(".stat[data-side='left']", { x: -160, opacity: 0, duration: 0.55, stagger: 0.08 }, 0.2)
          .to(".stat[data-side='right']", { x: 160, opacity: 0, duration: 0.55, stagger: 0.08 }, 0.2);
      });

      /* ---------- Reduced motion: static, fully visible ---------- */
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".hl-letter, .stat, .car-intro", { clearProps: "all" });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="hero relative h-screen w-full overflow-hidden bg-asphalt">
      {/* Road */}
      <div className="absolute inset-y-0 left-1/2 w-[min(56vw,420px)] -translate-x-1/2 bg-road">
        <div className="absolute inset-y-0 left-3 w-[3px] bg-chalk/40" />
        <div className="absolute inset-y-0 right-3 w-[3px] bg-chalk/40" />
        <div className="absolute inset-x-0 top-0 h-[200%] will-move road-dashes" style={{ maskImage: "linear-gradient(to right, transparent 47%, #000 47%, #000 53%, transparent 53%)", WebkitMaskImage: "linear-gradient(to right, transparent 47%, #000 47%, #000 53%, transparent 53%)" }} />
      </div>

      {/* Headline */}
      <h1
        className="headline will-move absolute inset-x-0 top-[9vh] z-20 flex justify-center px-4 font-display text-[clamp(1.25rem,4.6vw,3.6rem)] font-light"
        aria-label="Welcome ItzFizz"
      >
        {HEADLINE.split("").map((ch, i) => (
          <span key={i} className="inline-block overflow-hidden" aria-hidden="true">
            <span className={`hl-letter will-move inline-block ${ch === " " ? "w-[0.9em]" : "mx-[0.22em]"}`}>
              {ch === " " ? "\u00A0" : ch}
            </span>
          </span>
        ))}
      </h1>

      {/* Car (outer = intro tween, inner = scroll tween, so they never fight) */}
      <div className="car-intro will-move absolute left-1/2 top-[24vh] z-10 -translate-x-1/2">
        <div className="car-scroll will-move relative w-[clamp(110px,15vw,190px)] origin-center">
          <div className="car-shadow absolute inset-x-[-10%] inset-y-[6%] -z-10 rounded-[40%] bg-black/60 opacity-30 blur-xl" />
          <CarSvg className="block h-auto w-full drop-shadow-[0_18px_28px_rgba(0,0,0,0.55)]" />
        </div>
      </div>

      {/* Stats: 2x2 grid on mobile, scattered around the car on desktop */}
      <div className="absolute inset-x-0 bottom-8 z-20 grid grid-cols-2 gap-x-5 gap-y-6 px-6 md:contents">
        {STATS.map((s) => (
          <div key={s.value + s.label} data-side={s.side} className={`stat will-move md:absolute md:w-[240px] ${s.pos}`}>
            <p className="font-display text-4xl font-medium text-papaya md:text-6xl">{s.value}</p>
            <p className="mt-2 max-w-[18ch] text-sm leading-snug text-chalk/75 md:text-base">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
