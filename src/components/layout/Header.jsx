import Link from "next/link";
import Image from "next/image";
import PrimaryBtn from '@/components/layout/PrimaryBtn';
import { useState, useEffect } from "react";
const Header = ({ pageProps }) => {
	const themeSettings = pageProps?.result?.themeGeneralSettings?.themeOptions;
	const menuItem = pageProps?.result?.primary;
	// console.log('menuItem...................', menuItem);
	const [menuBtn, setMenuBtn] = useState(false);
	const menuHandler = () => {
		setMenuBtn(!menuBtn);
	}
	const [languageDropdown, setLanguageDropdown] = useState(false);
	const languageHandler = () => {
		setLanguageDropdown(!languageDropdown);
	}

	const [scrolling, setScrolling] = useState(false);

	useEffect(() => {
		let lastScroll = 0;

		const handleScroll = () => {
			const currentScroll = window.scrollY;

			if (currentScroll > lastScroll) {
				// Scrolling down
				setScrolling(true);
			} else {
				// Scrolling up
				setScrolling(false);
			}

			lastScroll = currentScroll;
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<header className={`header ${scrolling ? "scrolling" : ""}`}>
				<div className="header_wrap">
					<div className="container">
						<div className="main_header">
							<div className="header_logo">
								<Link href="/"><Image src={themeSettings?.headerLogo?.sourceUrl} alt={themeSettings?.headerLogo?.altText} width={127} height={30} /></Link>
							</div>
							<div className={`menu-toggler ${menuBtn ? 'active' : ' '}`} onClick={menuHandler}>
								<div className="menu-toggler-icon"></div>
							</div>
							<div className={`navigation_bar ${menuBtn ? 'slide' : ' '}`}>
								<div className="mobile_header_logo">
									<Link href="/"><Image src={themeSettings?.headerLogo?.sourceUrl} alt={themeSettings?.headerLogo?.altText} width={127} height={30} /></Link>
								</div>
								{/* {JSON.stringify(menuItem)} */}
								<div className="navigation_wrap">
									{menuItem &&
										<div className="nav-bar">
											<ul>
												{menuItem.nodes.map((item, index) => {
													const createSlug = (label) => {
														return label.toLowerCase().replace(/\s&\s/g, '-').replace(/\s/g, '-').replace(/&/g, '-');
													};

													return (
														<li key={index}>
															<Link href={`${createSlug(item.label)}`}>{item.label}</Link>
															{(item?.childItems?.nodes?.length > 0) &&

																<ul className="dropdown_menu">
																	{
																		item.childItems.nodes.map((subitem, index) => {
																			return (
																				<li key={index}><Link href="#">{subitem.label}</Link></li>
																			)
																		})
																	}
																</ul>
															}
														</li >
													)
												})}
											</ul>
										</div>
									}
									<div className="header_btn">
										{/* <PrimaryBtn name="Contact Us" arrow="no" link="/" /> */}
										<PrimaryBtn name={themeSettings?.headerButtonName?.title} arrow="no" link={themeSettings?.headerButtonName?.url} />
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
				</div>
			</header>
			<div className="new_projectbtn">
				<Link href="#">New Project?</Link>
			</div>
		</>
	)
}

export default Header;