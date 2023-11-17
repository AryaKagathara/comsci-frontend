import Link from "next/link";
import Image from "next/image";
import cross from "@/assets/images/cross-arrow.webp";


const Services = () => {
	return (
		<>
			<div className="services">
				<div className="container">
					<div className="service_heading">
						We engineer business solutions that drive measurable results for renowned industry leaders around the 
						<div className="globe">
							gl
							<div className="world_img">
								<video preload="none" poster="images/world-animation.mp4" autoplay muted loop>
									<source src="images/world-animation.mp4" type="video/mp4" />
								</video>
							</div>
							be
						</div>
					</div>
					<div className="service_tabsection">
						<div className="row">
							<div className="col-lg-7 offset-lg-1">
								<div className="heading">
									<span>Services</span>
								</div>
							</div>
							<div className="col-lg-5 offset-lg-1">
								<div className="tab_section">
									<div className="nav nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
										<button className="nav-link active" id="logo_design_tab" data-bs-toggle="pill" data-bs-target="#logo_tab" type="button" role="tab" aria-controls="logo_tab" aria-selected="true">
											Logo Design & Branding
											<span><Image src={cross} alt="cross-arrow" /></span>
										</button>
										<button className="nav-link" id="ui_ux_design_tab" data-bs-toggle="pill" data-bs-target="#design_tab_wrap" type="button" role="tab" aria-controls="design_tab_wrap" aria-selected="false">
											UX/UI Design
											<span><Image src={cross} alt="cross-arrow" /></span>
										</button>
										<button className="nav-link" id="mobile_application_tab" data-bs-toggle="pill" data-bs-target="#mobiapp_tab" type="button" role="tab" aria-controls="mobiapp_tab" aria-selected="false">
											Mobile Application
											<span><Image src={cross} alt="cross-arrow" /></span>
										</button>
										<button className="nav-link" id="seo_tab" data-bs-toggle="pill" data-bs-target="#seo_wrap" type="button" role="tab" aria-controls="seo_wrap" aria-selected="false">
											SEO
											<span><Image src={cross} alt="cross-arrow" /></span>
										</button>
										<button className="nav-link" id="custom_web_tab" data-bs-toggle="pill" data-bs-target="#custom_tab" type="button" role="tab" aria-controls="custom_tab" aria-selected="false">
											Custom Web Development
											<span><Image src={cross} alt="cross-arrow" /></span>
										</button>
										<button className="nav-link" id="video_art_tab" data-bs-toggle="pill" data-bs-target="#video_tab" type="button" role="tab" aria-controls="video_tab" aria-selected="false">
											Video & Art Direction
											<span><Image src={cross} alt="cross-arrow" /></span>
										</button>
									</div>
								</div>
							</div>
							<div className="col-lg-5">
								<div className="tab-content" id="v-pills-tabContent">
									<div className="tab-pane fade show active" id="logo_tab" role="tabpanel" aria-labelledby="logo_design_tab" tabindex="0">
										<div className="content_box">
											<span>Our innovative UI/UX team will create the optimal user-centred UI design with smart UX for your project. Having both startup and enterprise experience, our designers consider differing functionality and audience demographics when designing a pixel-perfect screen for each unique client challenge. Following an existing brand guideline or a custom component library, our team will deliver a sleek, clean UI for any complex interface use case.</span>
											<div className="chips">
												<div className="chip"><Link href="javascript:;">SaaS Product</Link></div>
												<div className="chip"><Link href="javascript:;">Dashboard</Link></div>
												<div className="chip"><Link href="javascript:;">Booking</Link></div>
												<div className="chip"><Link href="javascript:;">Marketplace</Link></div>
												<div className="chip"><Link href="javascript:;">Software</Link></div>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="design_tab_wrap" role="tabpanel" aria-labelledby="ui_ux_design_tab" tabindex="0">
										<div className="content_box">
											<span>Our innovative UI/UX team will create the optimal user-centred UI design with smart UX for your project. Having both startup and enterprise experience, our designers consider differing functionality and audience demographics when designing a pixel-perfect screen for each unique client challenge.</span>
											<div className="chips">
												<div className="chip"><Link href="javascript:;">SaaS Product</Link></div>
												<div className="chip"><Link href="javascript:;">Dashboard</Link></div>
												<div className="chip"><Link href="javascript:;">Booking</Link></div>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="mobiapp_tab" role="tabpanel" aria-labelledby="mobile_application_tab" tabindex="0">
										<div className="content_box">
											<span>Our innovative UI/UX team will create the optimal user-centred UI design with smart UX for your project. Having both startup and enterprise experience, our designers consider differing functionality and audience demographics when designing a pixel-perfect screen for each unique client challenge. Following an existing brand guideline or a custom component library, our team will deliver a sleek, clean UI for any complex interface use case.</span>
											<div className="chips">
												<div className="chip"><Link href="javascript:;">SaaS Product</Link></div>
												<div className="chip"><Link href="javascript:;">Booking</Link></div>
												<div className="chip"><Link href="javascript:;">Marketplace</Link></div>
												<div className="chip"><Link href="javascript:;">Software</Link></div>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="seo_wrap" role="tabpanel" aria-labelledby="seo_tab" tabindex="0">
										<div className="content_box">
											<span>Our innovative UI/UX team will create the optimal user-centred UI design with smart UX for your project. Having both startup and enterprise experience, our designers consider differing functionality and audience demographics when designing a pixel-perfect screen for each unique client challenge. Following an existing brand guideline or a custom component library, our team will deliver a sleek, clean UI for any complex interface use case.</span>
											<div className="chips">
												<div className="chip"><Link href="javascript:;">SaaS Product</Link></div>
												<div className="chip"><Link href="javascript:;">Dashboard</Link></div>
												<div className="chip"><Link href="javascript:;">Booking</Link></div>
												<div className="chip"><Link href="javascript:;">Marketplace</Link></div>
												<div className="chip"><Link href="javascript:;">Software</Link></div>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="custom_tab" role="tabpanel" aria-labelledby="custom_web_tab" tabindex="0">
										<div className="content_box">
											<span>Our innovative UI/UX team will create the optimal user-centred UI design with smart UX for your project. Having both startup and enterprise experience, our designers consider differing functionality and audience demographics when designing a pixel-perfect screen for each unique client challenge. Following an existing brand guideline or a custom component library, our team will deliver a sleek, clean UI for any complex interface use case.</span>
											<div className="chips">
												<div className="chip"><Link href="javascript:;">Dashboard</Link></div>
												<div className="chip"><Link href="javascript:;">Booking</Link></div>
												<div className="chip"><Link href="javascript:;">Marketplace</Link></div>
												<div className="chip"><Link href="javascript:;">Software</Link></div>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="video_tab" role="tabpanel" aria-labelledby="video_art_tab" tabindex="0">
										<div className="content_box">
											<span>Our innovative UI/UX team will create the optimal user-centred UI design with smart UX for your project. Having both startup and enterprise experience, our designers consider differing functionality and audience demographics when designing a pixel-perfect screen for each unique client challenge. Following an existing brand guideline or a custom component library, our team will deliver a sleek, clean UI for any complex interface use case.</span>
											<div className="chips">
												<div className="chip"><Link href="javascript:;">Marketplace</Link></div>
												<div className="chip"><Link href="javascript:;">Software</Link></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Services;