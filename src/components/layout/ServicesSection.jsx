import Link from "next/link";
import Image from "next/image";
import cross from "@/assets/images/orange-cross.svg";
import world from "@/assets/images/world-img.webp";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const main = useRef();

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector(".service_heading");
      gsap.to(boxes, {
        opacity: 0,
        color: "red",
        scrollTrigger: {
          trigger: boxes,
          start: "bottom bottom",
          end: "top 50%",
          scrub: true,
        },
      });
    }, main);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="services">
        <div className="container">
          <div className="service_heading" data-scroll data-scroll-speed=".2">
            <strong>
              We engineer business solutions that drive measurable results for
              renowned industry leaders around the
              <div className="globe">
                gl
                <div className="world_img">
                  <Image src={world} alt="world" />
                </div>
                be
              </div>
            </strong>
          </div>
          <div className="service_tabsection">
            <Tab.Container id="tabs_wrapper" defaultActiveKey="logo_design_tab">
              <div className="row">
                <div className="heading">
                  <span>Services</span>
                </div>
                <div className="col-lg-6">
                  <div className="tab_section">
                    <Nav variant="pills">
                      <Nav.Item>
                        <div className="service_wrap">
                          <Nav.Link eventKey="logo_design_tab">
                            Logo Design & Branding
                            <span>
                              <Image src={cross} alt="cross-arrow" />
                            </span>
                          </Nav.Link>
                        </div>
                      </Nav.Item>
                      <Nav.Item>
                        <div className="service_wrap">
                          <Nav.Link eventKey="ui_ux_design_tab">
                            UX/UI Design
                            <span>
                              <Image src={cross} alt="cross-arrow" />
                            </span>
                          </Nav.Link>
                        </div>
                      </Nav.Item>
                      <Nav.Item>
                        <div className="service_wrap">
                          <Nav.Link eventKey="mobile_application_tab">
                            Mobile Application
                            <span>
                              <Image src={cross} alt="cross-arrow" />
                            </span>
                          </Nav.Link>
                        </div>
                      </Nav.Item>
                      <Nav.Item>
                        <div className="service_wrap">
                          <Nav.Link eventKey="seo_tab">
                            SEO
                            <span>
                              <Image src={cross} alt="cross-arrow" />
                            </span>
                          </Nav.Link>
                        </div>
                      </Nav.Item>
                      <Nav.Item>
                        <div className="service_wrap">
                          <Nav.Link eventKey="custom_web_tab">
                            Custom Web Development
                            <span>
                              <Image src={cross} alt="cross-arrow" />
                            </span>
                          </Nav.Link>
                        </div>
                      </Nav.Item>
                      <Nav.Item>
                        <div className="service_wrap">
                          <Nav.Link eventKey="video_art_tab">
                            Video & Art Direction
                            <span>
                              <Image src={cross} alt="cross-arrow" />
                            </span>
                          </Nav.Link>
                        </div>
                      </Nav.Item>
                    </Nav>
                  </div>
                </div>
                <div className="col-lg-6">
                  <Tab.Content>
                    <Tab.Pane eventKey="logo_design_tab">
                      <div className="content_box">
                        <span>
                          Our innovative UI/UX team will create the optimal
                          user-centred UI design with smart UX for your project.
                          Having both startup and enterprise experience, our
                          designers consider differing functionality and
                          audience demographics when designing a pixel-perfect
                          screen for each unique client challenge. Following an
                          existing brand guideline or a custom component
                          library, our team will deliver a sleek, clean UI for
                          any complex interface use case.
                        </span>
                        <div className="chips">
                          <div className="chip">
                            <Link href="javascript:;">SaaS Product</Link>
                          </div>
                          <div className="chip">
                            <Link href="javascript:;">Dashboard</Link>
                          </div>
                          <div className="chip">
                            <Link href="javascript:;">Booking</Link>
                          </div>
                          <div className="chip">
                            <Link href="javascript:;">Marketplace</Link>
                          </div>
                          <div className="chip">
                            <Link href="javascript:;">Software</Link>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="ui_ux_design_tab">
                      <div className="content_box">
                        <span>
                          Our innovative UI/UX team will create the optimal
                          user-centred UI design with smart UX for your project.
                          Having both startup and enterprise experience, our
                          designers consider differing functionality and
                          audience demographics when designing a pixel-perfect
                          screen for each unique client challenge.
                        </span>
                        <div className="chips">
                          <div className="chip">
                            <Link href="javascript:;">SaaS Product</Link>
                          </div>
                          <div className="chip">
                            <Link href="javascript:;">Dashboard</Link>
                          </div>
                          <div className="chip">
                            <Link href="javascript:;">Booking</Link>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="mobile_application_tab">
                      <div className="content_box">
                        <span>
                          Our innovative UI/UX team will create the optimal
                          user-centred UI design with smart UX for your project.
                          Having both startup and enterprise experience, our
                          designers consider differing functionality and
                          audience demographics when designing a pixel-perfect
                          screen for each unique client challenge. Following an
                          existing brand guideline or a custom component
                          library, our team will deliver a sleek, clean UI for
                          any complex interface use case.
                        </span>
                        <div className="chips">
                          <div className="chip">
                            <Link href="javascript:;">SaaS Product</Link>
                          </div>
                          <div className="chip">
                            <Link href="javascript:;">Booking</Link>
                          </div>
                          <div className="chip">
                            <Link href="javascript:;">Marketplace</Link>
                          </div>
                          <div className="chip">
                            <Link href="javascript:;">Software</Link>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="seo_tab">
                      <div className="content_box">
                        <span>
                          Our innovative UI/UX team will create the optimal
                          user-centred UI design with smart UX for your project.
                          Having both startup and enterprise experience, our
                          designers consider differing functionality and
                          audience demographics when designing a pixel-perfect
                          screen for each unique client challenge. Following an
                          existing brand guideline or a custom component
                          library, our team will deliver a sleek, clean UI for
                          any complex interface use case.
                        </span>
                        <div className="chips">
                          <div className="chip">
                            <Link href="javascript:;">SaaS Product</Link>
                          </div>
                          <div className="chip">
                            <Link href="javascript:;">Dashboard</Link>
                          </div>
                          <div className="chip">
                            <Link href="javascript:;">Booking</Link>
                          </div>
                          <div className="chip">
                            <Link href="javascript:;">Marketplace</Link>
                          </div>
                          <div className="chip">
                            <Link href="javascript:;">Software</Link>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="custom_web_tab">
                      <div className="content_box">
                        <span>
                          Our innovative UI/UX team will create the optimal
                          user-centred UI design with smart UX for your project.
                          Having both startup and enterprise experience, our
                          designers consider differing functionality and
                          audience demographics when designing a pixel-perfect
                          screen for each unique client challenge. Following an
                          existing brand guideline or a custom component
                          library, our team will deliver a sleek, clean UI for
                          any complex interface use case.
                        </span>
                        <div className="chips">
                          <div className="chip">
                            <Link href="javascript:;">Dashboard</Link>
                          </div>
                          <div className="chip">
                            <Link href="javascript:;">Booking</Link>
                          </div>
                          <div className="chip">
                            <Link href="javascript:;">Marketplace</Link>
                          </div>
                          <div className="chip">
                            <Link href="javascript:;">Software</Link>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="video_art_tab">
                      <div className="content_box">
                        <span>
                          Our innovative UI/UX team will create the optimal
                          user-centred UI design with smart UX for your project.
                          Having both startup and enterprise experience, our
                          designers consider differing functionality and
                          audience demographics when designing a pixel-perfect
                          screen for each unique client challenge. Following an
                          existing brand guideline or a custom component
                          library, our team will deliver a sleek, clean UI for
                          any complex interface use case.
                        </span>
                        <div className="chips">
                          <div className="chip">
                            <Link href="javascript:;">Marketplace</Link>
                          </div>
                          <div className="chip">
                            <Link href="javascript:;">Software</Link>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </div>
            </Tab.Container>
          </div>
        </div>
        <div className="service_detail">
          <div className="marquee">
            <ul className="marquee-content scroll">
              <li className="back_wrapper">
                <p className="text_box">Award Winning</p>
              </li>
              <div className="dot"></div>
              <li className="back_wrapper">
                <p className="text_box">Official WordPress Partner</p>
              </li>
              <div className="dot"></div>
              <li className="back_wrapper">
                <p className="text_box">21th Century Best Design</p>
              </li>
              <div className="dot"></div>
              <li className="back_wrapper">
                <p className="text_box">5 Star Rated Agency</p>
              </li>
              <div className="dot"></div>
              <li className="back_wrapper">
                <p className="text_box">Agile Process</p>
              </li>
              <div className="dot"></div>
            </ul>
            <ul className="marquee-content scroll">
              <li className="back_wrapper">
                <p className="text_box">Award Winning</p>
              </li>
              <div className="dot"></div>
              <li className="back_wrapper">
                <p className="text_box">Official WordPress Partner</p>
              </li>
              <div className="dot"></div>
              <li className="back_wrapper">
                <p className="text_box">21th Century Best Design</p>
              </li>
              <div className="dot"></div>
              <li className="back_wrapper">
                <p className="text_box">5 Star Rated Agency</p>
              </li>
              <div className="dot"></div>
              <li className="back_wrapper">
                <p className="text_box">Agile Process</p>
              </li>
              <div className="dot"></div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;