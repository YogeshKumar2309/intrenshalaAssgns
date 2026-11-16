gsap.registerPlugin(ScrollTrigger);

/* ---------- Build the letter-spaced headline ---------- */
const headline = document.getElementById("headline");
"WELCOME ITZFIZZ".split("").forEach((ch) => {
  const mask = document.createElement("span");
  mask.className = "hl-mask";
  mask.setAttribute("aria-hidden", "true");

  const letter = document.createElement("span");
  letter.className = "hl-letter will-move" + (ch === " " ? " hl-letter--space" : "");
  letter.textContent = ch === " " ? "\u00A0" : ch;

  mask.appendChild(letter);
  headline.appendChild(mask);
});

const mm = gsap.matchMedia();

/* ---------- Full motion ---------- */
mm.add("(prefers-reduced-motion: no-preference)", () => {
  /* 1) Intro: one orchestrated sequence on load */
  gsap
    .timeline({ defaults: { ease: "power3.out" } })
    .from(".car-intro", { yPercent: -40, opacity: 0, duration: 1.4, ease: "power4.out" })
    .from(".hl-letter", { yPercent: 60, opacity: 0, duration: 0.9, stagger: 0.045 }, "-=0.9")
    .from(".stat", { y: 36, opacity: 0, duration: 0.9, stagger: 0.18 }, "-=0.4");

  /* 2) Scroll: progress-based. scrub: 1.2 = smooth 1.2s catch-up (easing/interpolation) */
  gsap
    .timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "+=220%",
        pin: true,
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
    })
    // car drives down the road and grows slightly (camera pulling in)
    .to(".car-scroll", { y: () => window.innerHeight * 0.42, scale: 1.45, duration: 1 }, 0)
    // gentle sway: left, then right, then straighten
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

/* ---------- Reduced motion: everything stays static and visible ---------- */
mm.add("(prefers-reduced-motion: reduce)", () => {
  gsap.set(".hl-letter, .stat, .car-intro", { clearProps: "all" });
});