import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonialimg from "@/assets/images/testimonials_sliderimg.svg";
import profile1 from "@/assets/images/profile-pic1.png";
import profile2 from "@/assets/images/profile-pic2.png";
import profile3 from "@/assets/images/profile-pic3.png";
import profile4 from "@/assets/images/profile-pic4.png";
import profile5 from "@/assets/images/profile-pic5.png";



const TestiMonialsSlider = () => {
	const ArrowLeft = (props) => (
		<button {...props} className="left">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g id="arrow-left">
					<path id="Shape" d="M10 19L3 12M3 12L10 5M3 12L21 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</g>
			</svg>
		</button>
	);
	const ArrowRight = (props) => (
		<button {...props} className="right">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g id="arrow-right">
					<path id="Shape" d="M14 5L21 12M21 12L14 19M21 12L3 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</g>
			</svg>
		</button>
	);
	var settings = {
		dots: false,
		arrow: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: <ArrowLeft />,
		nextArrow: <ArrowRight />
	};
	return (
		<>
			<div className="testimonials_slider">
				<div className="container">
					<Slider {...settings}>
						<div className="testimg-text">
							<div className="textimgbox">
								<Image src={Testimonialimg} alt="Test" />
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
						<div className="testimg-text">
							<div className="textimgbox">
								<Image src={Testimonialimg} alt="Test" />
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
						<div className="testimg-text">
							<div className="textimgbox">
								<Image src={Testimonialimg} alt="Test" />
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
						<div className="testimg-text">
							<div className="textimgbox">
								<Image src={Testimonialimg} alt="Test" />
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
						<div className="testimg-text">
							<div className="textimgbox">
								<Image src={Testimonialimg} alt="Test" />
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
					</Slider>
				</div>
			</div>
		</>
	)
}

export default TestiMonialsSlider;