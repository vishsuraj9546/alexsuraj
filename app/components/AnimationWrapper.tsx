"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ✅ Register GSAP plugin (only on client-side)
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function AnimationWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      /** 🌟 Fade-in animation for all sections with class "fade-section" */
      gsap.utils.toArray<HTMLElement>(".fade-section").forEach((section) => {
        gsap.from(section, {
          opacity: 1, // ✅ Start invisible
          y: 50,      // ✅ Move up from 50px
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",              // When section enters viewport
            toggleActions: "play none none none",
            markers: true                // ✅ Debugging ke liye true kar sakte ho
          }
        });
      });

      /** 🌈 Gradient reveal effect */
      gsap.utils.toArray<HTMLElement>(".gradient-reveal").forEach((element) => {
        ScrollTrigger.create({
          trigger: element,
          start: "top 80%",
          onEnter: () => element.classList.add("in-view"),
          onLeaveBack: () => element.classList.remove("in-view")
        });
      });

      /** 🎈 Floating animation for elements with class "float-element" */
      gsap.utils.toArray<HTMLElement>(".float-element").forEach((element) => {
        gsap.to(element, {
          y: -20,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });

      /** 🔗 Smooth scrolling for anchor links (like #about, #skills) */
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
          e.preventDefault();
          const link = e.currentTarget as HTMLAnchorElement;
          const target = document.querySelector(link.getAttribute("href") || "");
          if (target) {
            window.scrollTo({
              top: (target as HTMLElement).offsetTop - 100,
              behavior: "smooth"
            });
          }
        });
      });

    } catch (error) {
      console.error("⚠️ AnimationWrapper error:", error);
    }

    /** ✅ Cleanup GSAP & ScrollTrigger on unmount */
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf(".float-element");
    };
  }, []);

  return <>{children}</>;
}
