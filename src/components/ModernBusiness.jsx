import Link from "next/link";
import Image from "next/image";
import PrimaryBtn from '@/components/layout/PrimaryBtn';





const ModernBusiness = () => {
	return (
		<>
			<div className="business">
				<div className="container">
					<div className="business_section">
						<div className="row">
							<div className="col-lg-7">
								<div className="content_box">
									<h6>A real modern take on Business US.</h6>
									<span>When CAMSCI came to us, they were well-established from sea to shining sea. But like a lot of brands, they struggled to balance their long history with engaging new, younger clients.</span>
									<PrimaryBtn name="Visit project" arrow="no" link="#" />
								</div>
							</div>
							<div className="col-lg-4 offset-lg-1">
								<div className="text_box">
									<i>Services</i>
									<ul>
										<li>Logo Design & Branding</li>
										<li>UX/UI Design</li>
										<li>Mobile Application</li>
										<li>SEO</li>
										<li>Custom Web Development</li>
										<li>Video & Art Direction</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ModernBusiness;