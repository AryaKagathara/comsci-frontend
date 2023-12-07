import Link from "next/link";
import Image from "next/image";
import Award from "@/../public/images/award-img.webp";
import Award1 from "@/../public/images/award-img1.webp";
import Award2 from "@/../public/images/award-img2.webp";
import Award3 from "@/../public/images/award-img3.webp";
import Award4 from "@/../public/images/award-img3.webp";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Awards = () => {
  const awardElBig = useRef(null);
  const awardEl1 = useRef(null);
  const awardEl2 = useRef(null);
  const awardEl3 = useRef(null);
  const awardEl4 = useRef(null);

  useEffect(() => {
    // Initialize Locomotive Scroll

    async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const scroll = new LocomotiveScroll();
    };

    // GSAP pinning animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.fromTo([awardElBig.current, awardEl1.current, awardEl2.current, awardEl3.current, awardEl4.current],
      {
        y: 400,
      },
      {
        y: -1500,
      }
    );
  }, []);

  return (
    <>
      <div className="award">
        <div className="container">
          <div className="award_section">
            <div className="image">
              <Image src={Award} alt="award" ref={awardElBig} />
            </div>
            <div className="first_img">
              <Image src={Award1} alt="award" ref={awardEl1} />
            </div>
            <div className="second_img">
              <Image src={Award2} alt="award" ref={awardEl2} />
            </div>
            <div className="third_img">
              <Image src={Award3} alt="award" ref={awardEl3} />
            </div>
            <div className="fourth_img">
              <Image src={Award4} alt="award" ref={awardEl4} />
            </div>
            <div className="award_text">
              <h2>Award Winning Company</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Awards;
