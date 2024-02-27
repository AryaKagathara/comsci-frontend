import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Awards = (props) => {
  const awardElBig = useRef(null);
  const awardEl1 = useRef(null);
  const awardEl2 = useRef(null);
  const awardEl3 = useRef(null);
  const awardEl4 = useRef(null);

  useEffect(() => {

    async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const scroll = new LocomotiveScroll();
    };

    const animateElement = (element, animation) => {
      if (!element) {
        console.error("Element is undefined");
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      tl.fromTo(element, animation.from, animation.to);
    };

    animateElement(awardElBig.current, {
      from: {
        y: 400
      },
      to: {
        y: -1500
      }
    });
    animateElement(awardEl1.current, {
      from: {
        y: 400
      },
      to: {
        y: -1500,
        rotation: 360
      }
    });
    animateElement(awardEl2.current, {
      from: {
        y: 400
      },
      to: {
        y: -1500,
        rotation: -360
      }
    });
    animateElement(awardEl3.current, {
      from: {
        y: 400
      },
      to: {
        y: -1500,
        rotation: 360
      }
    });
    animateElement(awardEl4.current, {
      from: {
        y: 400
      },
      to: {
        y: -1500,
        rotation: -360
      }
    });
  }, []);

  return (
    <>
      <div className="award">
        <div className="container">
          <div className="award_section">
            <div className="image">
              <Image src={props?.awardsImage?.sourceUrl} alt={props?.awardsImage?.altText} width={364} height={687} ref={awardElBig} />
            </div>
            <div className="first_img">
              <Image src={props?.awardsImage?.sourceUrl} alt={props?.awardsImage?.altText} width={149} height={239} ref={awardEl1} />
            </div>
            <div className="second_img">
              <Image src={props?.awardsImage?.sourceUrl} alt={props?.awardsImage?.altText} width={149} height={239} ref={awardEl2} />
            </div>
            <div className="third_img">
              <Image src={props?.awardsImage?.sourceUrl} alt={props?.awardsImage?.altText} width={112} height={179} ref={awardEl3} />
            </div>
            <div className="fourth_img">
              <Image src={props?.awardsImage?.sourceUrl} alt={props?.awardsImage?.altText} width={112} height={179} ref={awardEl4} />
            </div>
            <div className="award_text">
              <h2>{props?.Heading}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Awards;
