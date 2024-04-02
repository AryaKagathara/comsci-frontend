import Image from "next/image";
import quote from "@/../public/images/quote-img.svg";

const TestimonialsSection = (props) => {
	return (
		<>
			<div className="testimonials">
				<div className="container">
					<div className="testimonial_wrap">

						{
							(props?.testimonialsMeta?.length > 0) &&
							props.testimonialsMeta.map((data, index) => (
								<div className="test_sec" data-scroll data-scroll-speed={(index == 0 ? '.2' : '.4')} key={index}>
									<div className="testi_wrap">
										<div className="image">
											<Image src={data?.tmImage?.sourceUrl} alt={data?.tmImage?.altText} height={data?.tmImage?.mediaDetails?.height} width={data?.tmImage?.mediaDetails?.width} />
										</div>
										<div className="contentbox">
											<h4>{data?.testtimonialsTitle}</h4>
											<div className="profile_box">
												<div className="caption">
													<p>{data?.testtimonialsName}</p>
													<span>{data?.testtimonialsPosition}</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							)
							)
						}
					</div>
				</div>
			</div>
		</>
	)
}

export default TestimonialsSection;