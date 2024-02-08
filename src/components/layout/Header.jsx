import Link from "next/link";
import Image from "next/image";
import Logo from "@/../public/images/comsci-logo.webp";
import PrimaryBtn from '@/components/layout/PrimaryBtn';
import downArrow from "@/../public/images/dropdown-arrow.svg";
import { useState } from "react";

const Header = () => {
	const [menuBtn, setMenuBtn] = useState(false);
	const menuHandler = () => {
		setMenuBtn(!menuBtn);
	}
	const [languageDropdown, setLanguageDropdown] = useState(false);
	const languageHandler = () => {
		setLanguageDropdown(!languageDropdown);
	}
	return (
		<>
			<header className="header">
				<div className="header_wrap">
					<div className="container">
						<div className="main_header">
							<div className="header_logo">
								<Link href="/"><Image src={Logo} alt="Logo"/></Link>
							</div>
							<div className={`menu-toggler ${menuBtn ? 'active' : ' '}`} onClick={menuHandler}>
								<div className="menu-toggler-icon"></div>
							</div>
							<div className={`navigation_bar ${menuBtn ? 'slide' : ' '}`}>
								<div className="mobile_header_logo">
									<Link href="/"><Image src={Logo} alt="Logo"/></Link>
								</div>
								<div className="navigation_wrap">
									<div className="nav-bar">
										<ul>
											<li>
												<Link href="/services">Services <i><Image src={downArrow} alt="arrow" /></i></Link>
												<ul className="dropdown_menu">
													<li><Link href="#">Logo & Branding</Link></li>
													<li><Link href="#">UX/UI Design</Link></li>
													<li><Link href="#">Custom Web Development</Link></li>
													<li><Link href="#">SEO</Link></li>
													<li><Link href="#">Mobile Application</Link></li>
													<li><Link href="#">Video Editing</Link></li>
													<li><Link href="#">Artificial Intelligence</Link></li>
													<li><Link href="/services" className="drop_learn_btn">Explore Our Services</Link></li>
												</ul>
											</li>
											<li><Link href="/projects">Projects</Link></li>
											<li><Link href="/blogs">Blogs</Link></li>
											<li><Link href="/approach">Approach</Link></li>
											<li><Link href="/about" className="active">About us</Link></li>
										</ul>
									</div>
									<div className="header_btn">
										<PrimaryBtn name="Contact Us" arrow="no" link="/" />
										{/* <div className={`ent_lang dropdown ${languageDropdown ? 'show' : ' '}`}>
											<Link className="lang-link" href="javascript:;" onClick={languageHandler}>
												EN
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<g clip-path="url(#clip0_877_266)">
														<path d="M7 9L12 14L17 9" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
													</g>
													<defs>
														<clipPath id="clip0_877_266">
															<rect width="24" height="24" fill="white"/>
														</clipPath>
													</defs>
												</svg>
											</Link>
											<ul className={`dropdown-menu ${languageDropdown ? 'show' : ' '}`}>
												<li><Link href="#">ES</Link></li>
												<li><Link href="#">EN</Link></li>
											</ul>
										</div> */}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="new_projectbtn">
						<Link href="#">New Project?</Link>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header;