import Link from "next/link";
import Image from "next/image";
import quote from "@/assets/images/quote-img.svg";
import profile1 from "@/assets/images/profile-pic1.png";
import profile2 from "@/assets/images/profile-pic2.png";
import profile3 from "@/assets/images/profile-pic3.png";
import profile4 from "@/assets/images/profile-pic4.png";
import profile5 from "@/assets/images/profile-pic5.png";


const TestimonialsSection = () => {
	return (
		<>
			<div className="testimonials">
				<div className="container">
					<div className="testimonial_wrap">
						<div className="test_sec">
							<div className="testi_wrap">
								<div className="image">
									<Image src={quote} alt="quote" />
								</div>
								<div className="contentbox">
									<h5>The quality of coding, along with their communication and timeliness, were unlike anything we've seen from previous devs.</h5>
									<div className="profile_box">
										<div className="picture">
											<Image src={profile1} alt="profile"/>
										</div>
										<div className="caption">
											<p>Geoff Raicer</p>
											<span>Founder & CEO</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="test_sec">
							<div className="testi_wrap">
							<div className="image">
									<Image src={quote} alt="quote" />
								</div>
								<div className="contentbox">
									<h5>From start to finish, everything was perfect.</h5>
									<div className="profile_box">
										<div className="picture">
											<Image src={profile2} alt="profile"/>
										</div>
										<div className="caption">
											<p>Vitali Dudin</p>
											<span>CEO</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="test_sec">
							<div className="testi_wrap">
							<div className="image">
									<Image src={quote} alt="quote" />
								</div>
								<div className="contentbox">
									<h5>The quality of the work has been great.</h5>
									<div className="profile_box">
										<div className="picture">
											<Image src={profile3} alt="profile"/>
										</div>
										<div className="caption">
											<p>Hemal Parekh</p>
											<span>Managing Director</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="test_sec">
							<div className="testi_wrap">
							<div className="image">
									<Image src={quote} alt="quote" />
								</div>
								<div className="contentbox">
									<h5>Our sales went up by almost 20% due to the new design of the website.</h5>
									<div className="profile_box">
										<div className="picture">
											<Image src={profile4} alt="profile"/>
										</div>
										<div className="caption">
											<p>Eric Bernstein</p>
											<span>President</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="test_sec">
							<div className="testi_wrap">
							<div className="image">
									<Image src={quote} alt="quote" />
								</div>
								<div className="contentbox">
									<h5>I was excited to take advantage of their expertise again.</h5>
									<div className="profile_box">
										<div className="picture">
											<Image src={profile5} alt="profile"/>
										</div>
										<div className="caption">
											<p>Todd Lininger</p>
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