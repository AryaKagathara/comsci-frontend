import Link from "next/link";
import Image from "next/image";
import quote from "@/../public/images/quote-img.svg";


const TestimonialsSection = () => {
	return (
		<>
			<div className="testimonials">
				<div className="container">
					<div className="testimonial_wrap">
						<div className="test_sec" data-scroll data-scroll-speed=".2">
							<div className="testi_wrap">
								<div className="image">
									<Image src={quote} alt="quote" />
								</div>
								<div className="contentbox">
									<h5>I can’t believe that something is so well done.</h5>
									<div className="profile_box">
										<div className="caption">
											<p>Samhita B</p>
											<span>Founder & CEO</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="test_sec" data-scroll data-scroll-speed=".4">
							<div className="testi_wrap">
							<div className="image">
									<Image src={quote} alt="quote" />
								</div>
								<div className="contentbox">
									<h5>It was great pleasure working on the project. Happy to work on future projects. Highly recommending.</h5>
									<div className="profile_box">
										<div className="caption">
											<p>Martin B</p>
											<span>Founder & CEO</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="test_sec" data-scroll data-scroll-speed=".4">
							<div className="testi_wrap">
							<div className="image">
									<Image src={quote} alt="quote" />
								</div>
								<div className="contentbox">
									<h5>The quality of the work has been great.</h5>
									<div className="profile_box">
										<div className="caption">
											<p>Joaquin M</p>
											<span>Technical Director</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="test_sec" data-scroll data-scroll-speed=".2">
							<div className="testi_wrap">
							<div className="image">
									<Image src={quote} alt="quote" />
								</div>
								<div className="contentbox">
									<h5>Yes am happy. It worth to paid up to date for the hard work.</h5>
									<div className="profile_box">
										<div className="caption">
											<p>Josh B</p>
											<span>CEO</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="test_sec" data-scroll data-scroll-speed=".4">
							<div className="testi_wrap">
							<div className="image">
									<Image src={quote} alt="quote" />
								</div>
								<div className="contentbox">
									<h5>You guys are truly understanding the pain points which I care about alot.</h5>
									<div className="profile_box">
										<div className="caption">
											<p>Quentin D</p>
											<span>Owner</span>
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

export default TestimonialsSection;