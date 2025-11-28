import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollRevealApple = ({
  children,
  scrollContainerRef,
  className = "",
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current
      ? scrollContainerRef.current
      : window;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 40,
        filter: "blur(8px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top 85%",
          end: "top 30%",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [scrollContainerRef]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollRevealApple;
