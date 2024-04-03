import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quote from "@/../public/images/quote-img.svg";
const TestiMonialsSlider = (props) => {
	const ArrowLeft = (props) => (
		<button {...props} className="left" aria-label="left">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g id="arrow-left">
					<path id="Shape" d="M10 19L3 12M3 12L10 5M3 12L21 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				</g>
			</svg>
		</button>
	);
	const ArrowRight = (props) => (
		<button {...props} className="right" aria-label="right">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g id="arrow-right">
					<path id="Shape" d="M14 5L21 12M21 12L14 19M21 12L3 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
		nextArrow: <ArrowRight />,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 4000
	};
	return (
		<>
			<div className="testimonials_slider">
				<div className="container">
					<Slider {...settings}>

						{
							(props?.testimonialsMeta.length > 0) &&
							props.testimonialsMeta.map((data, index) => (
								<div className="testimg-text" key={index}>

									<div className="image">
										<Image src={quote} alt="quote" />
									</div>									
									<div className="contentbox">
										<h4>{data?.testtimonialsTitle}</h4>
										<div className="profile_box">
										<div className="textimgbox">
										<Image src={data?.testimonialImage?.sourceUrl} alt={data?.testimonialImage?.altText} height={data?.testimonialImage?.mediaDetails?.height} width={data?.testimonialImage?.mediaDetails?.width} />
									</div>
											<div className="caption">
												<p>{data?.testtimonialsName}</p>
												<span>{data?.testtimonialsPosition}</span>
											</div>
										</div>
									</div>
								</div>
							))

						}

					</Slider>
				</div>
			</div>
		</>
	)
}

export default TestiMonialsSlider;