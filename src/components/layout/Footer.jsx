import Link from "next/link";
import Image from "next/image";
// import PrimaryBtn from '@/components/layout/PrimaryBtn';
const Footer = ({ pageProps }) => {
	// console.log('Footer', pageProps);
	const themeSettings = pageProps?.result?.themeGeneralSettings?.themeOptions;
	return (
		<>
			<footer className="footer">
				<div className="container">
					<div className="footer_section">
						<div className="title_box">
							<div className="mail_box">
								<h4>{themeSettings?.mailBoxTitle}</h4>
								<Link href={`mailto:${themeSettings?.footerEmail}`}>{themeSettings?.footerEmail}</Link>
							</div>
							{/* <PrimaryBtn name={themeSettings?.footerContactButton?.title} arrow="no" link={themeSettings?.footerContactButton?.url} /> */}
						</div>
						<div className="links_section">
							<div className="use_link">
								<ul>
									{(pageProps?.result?.footer1?.nodes.length > 0) &&
										pageProps.result.footer1.nodes.map((item, index) => {
											return (
												<li key={index}>
													<Link href="#">{item.label}</Link>
												</li >
											)
										})
									}
								</ul>
							</div>
							<div className="social_media">
								<ul>
									{(pageProps?.result?.footer2?.nodes.length > 0) &&
										pageProps.result.footer2.nodes.map((item, index) => {
											return (
												<li key={index}>
													<Link href="#">{item.label}</Link>
												</li >
											)
										})
									}
								</ul>
							</div>
							<div className="contactbox">
								<ul>
									<li><p>{themeSettings?.footerAddress}</p></li>
									<li><Link href={`tel:+${themeSettings?.footerPhoneNumber}`}><span>+{themeSettings?.footerPhoneNumber}</span></Link></li>
									<li><Link href={`mailto:${themeSettings?.footerEmail}`}><span>{themeSettings?.footerEmail}</span></Link></li>
								</ul>
							</div>
						</div>
						<div className="copyright">
							<p>{themeSettings?.footerCopyrightText}
								{(themeSettings?.selectPages?.length > 0) &&
									themeSettings?.selectPages.map((selectedpages, index) => {
										return (
											<Link key={index} href={selectedpages?.slug}>{selectedpages?.title}</Link>
										)
									})
								}
							</p>
						</div>
						<div className="footer_logo">
							<Image src={themeSettings?.footerLogo?.sourceUrl} alt={themeSettings?.footerLogo?.altText} width={1268} height={226} />
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer;