import Link from "next/link";
import Image from "next/image";
import PrimaryBtn from '@/components/layout/PrimaryBtn';
import FtrLogo from '@/../public/images/footer-logo.svg';

const Footer = () => {
	return (
		<>
			<footer className="footer">
				<div className="container">
					<div className="footer_section">
						<div className="title_box">
							<div className="mail_box">
								<h4>Start a new project or Schedule a Consultation today</h4>
								<Link href="mailto:hello@comsci.com">hello@comsci.com</Link>
							</div>
							<PrimaryBtn name="Lets talk" arrow="no" link="/"/>
						</div>
						<div className="links_section">
							<div className="use_link">
								<ul>
									<li><Link href="/about">About us</Link></li>
									<li><Link href="/projects">Our Project</Link></li>
									<li><Link href="/jobposition">Job Position</Link></li>
									<li><Link href="/approach">Approach</Link></li>
									<li><Link href="/blogs">Blog</Link></li>
									<li><Link href="/errorpages">Contact Us</Link></li>
								</ul>
							</div>
							<div className="social_media">
								<ul>
									<li><Link href="#">Instagram</Link></li>
									<li><Link href="#">Facebook</Link></li>
									<li><Link href="#">Behance</Link></li>
									<li><Link href="#">Linkedin</Link></li>
									<li><Link href="#">Youtube</Link></li>
									<li><Link href="#">twitter</Link></li>
								</ul>
							</div>
							<div className="contactbox">
								<ul>
									<li><p>401 Broadway Suite 2116 New York, NY 10013</p></li>
									<li><Link href="tel:+91 12345 67890"><span>+91 12345 67890</span></Link></li>
									<li><Link href="mailto:hello@comsci.com"><span>hello@comsci.com</span></Link></li>
								</ul>
							</div>
						</div>
						<div className="copyright">
							<p>© 2023 COMSCI TECHNOLOGIES All rights reserved<Link href="/privacy">Terms & Conditions</Link><Link href="/privacy">Privacy Policy</Link></p>
						</div>
						<div className="footer_logo">
							<Image src={FtrLogo} alt="ftrlogo" />
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer;