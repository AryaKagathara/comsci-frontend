import Link from "next/link";
import Image from "next/image";
import cross from "@/../public/images/orange-cross.svg";
import world from "@/../public/images/world-img.webp";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Accordion from 'react-bootstrap/Accordion';

const ServicesSection = (props) => {
  return (
    <>
      <div className="services">
        <div className="container">
          <div className="service_heading" data-scroll data-scroll-speed=".2">
            <strong>
              {props?.serviceTitle}&nbsp;
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
            <Tab.Container id="tabs_wrapper" defaultActiveKey="0">
              <div className="row">
                <div className="heading">
                  <span>{props?.shortTitle}</span>
                </div>
                {/* className={index === 1 ? 'active' : ''} */}
                <div className="col-lg-6">
                  <div className="tab_section">
                    <Nav variant="pills">
                      {props?.services &&
                        props.services.map((services, index) => {
                          return (
                            <Nav.Item key={index} >
                              <div className="service_wrap" >
                                <Nav.Link eventKey={index}  >
                                  {services?.title}
                                  <span>
                                    <Image src={cross} alt="cross-arrow" />
                                  </span>
                                </Nav.Link>
                              </div>
                            </Nav.Item>
                          )
                        })
                      }
                    </Nav>
                  </div>
                </div>
                <div className="col-lg-6">
                  <Tab.Content>
                    {props?.services &&
                      props.services.map((services, index) => {
                        return (
                          <Tab.Pane eventKey={index} key={index} >
                            <div className="content_box">
                              <div className="img_wrap">
                                <Image src={services?.featuredImage?.node?.sourceUrl} alt="image" width={600} height={200} />
                              </div>
                              <span dangerouslySetInnerHTML={{ __html: services?.excerpt }}>
                              </span>
                           
                              <div className="chips">
                                {
                                  (services?.tags?.nodes?.length > 0) &&
                                  services.tags.nodes.map((tags, index) => {
                                    return (
                                      <div className="chip" key={index}>
                                        <Link href="javascript:;">{tags?.name}</Link>
                                      </div>
                                    )
                                  })
                                }

                              </div>
                              <div className="learn_btn">
                              <Link href={`service/${services?.slug}`}>{props?.serviceDetailButtonTitle} {services?.title}</Link>
                              </div>
                            </div>
                          </Tab.Pane>
                        )
                      })
                    }
                  </Tab.Content>
                </div>
              </div>
            </Tab.Container>
          </div>
          <div className="mobile_service_tabsection">
            <div className="heading">
              <span>{props?.shortTitle}</span>
            </div>
            <Accordion defaultActiveKey="key_0">
              {props?.services &&
                props.services.map((services, index) => {
                  // index = index + 1;
                  return (
                    <Accordion.Item eventKey={`key_${index}`} key={`ok_${index}`} className={index}>
                      <Accordion.Header> {services?.title}</Accordion.Header>
                      <Accordion.Body>
                        <div className="content_box">
                          <div className="image_wrap">
                            <Image src={services?.featuredImage?.node?.sourceUrl} alt={services?.featuredImage?.node?.altText} width={526} height={200} />
                          </div>
                          <div className="chips">
                            {
                              (services?.tags?.nodes?.length > 0) &&
                              services.tags.nodes.map((tags, index) => {
                                return (
                                  <div className="chip" key={index}>
                                    <Link href="javascript:;">{tags?.name}</Link>
                                  </div>
                                )
                              })
                            }
                          </div>

                          <span dangerouslySetInnerHTML={{ __html: services?.content }}></span>
                          <div className="learn_btn">
                            <Link href={services?.slug}>{props?.serviceDetailButtonTitle}</Link>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  )

                })
              }
            </Accordion>
          </div>
        </div>
        <div className="service_detail">
          <div className="marquee">
            <ul className="marquee-content scroll">
              {(props?.marqueeContent.length > 0) &&
                props.marqueeContent.map((marquee, index) => (
                  <>
                    <li className="back_wrapper" key={index}>
                      <p className="text_box">{marquee?.marqueeText} </p>
                    </li>
                    <li className="dot"></li>
                  </>)
                )
              }
            </ul>
            <ul className="marquee-content scroll">
              {(props?.marqueeContent.length > 0) &&
                props.marqueeContent.map((marquee, index) => (
                  <>
                    <li className="back_wrapper" key={index}>
                      <p className="text_box">{marquee?.marqueeText}</p>
                    </li>
                    <li className="dot"></li>
                  </>)
                )
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;