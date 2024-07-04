import Link from "next/link";
import Image from "next/image";
import PrimaryBtn from '@/components/layout/PrimaryBtn';
import industrie1 from '@/../public/images/industriessection-img.webp';

const IndustriesSection = (props) => {
	console.log('----------------------', props);
	return (
		<>
			<div className="industries">
				<div className="indus_wrap">
					{
						(props?.title != null) &&
						<div className="title">{props?.title}</div>
					}
					<div className="indus_section">

						{
							(props?.selectIndustrie.length > 0) &&
							props?.selectIndustrie.map((Industrie, index) => (

								<Link href="/industriesdetail" className="industries_imgtext" key={index}>
									<div className="img_box">
										<Image src={Industrie?.featuredImage?.node?.sourceUrl} height={Industrie?.featuredImage?.node?.mediaDetails?.height} width={Industrie?.featuredImage?.node?.mediaDetails?.width} alt={Industrie?.featuredImage?.node?.altText} />
									</div>
									<div className="textbox">
										<div className="img_text">
											<h5>{Industrie?.title}</h5>
											<p><span  dangerouslySetInnerHTML={{ __html: Industrie?.content }}></span></p>
											<div className="btn_box">
												<strong>Learn more about {Industrie?.title}</strong>
											</div>
										</div>
									</div>
								</Link>

							))
						}


						{/* <Link href="/industriesdetail" className="industries_imgtext">
							<div className="img_box">
								<Image src={industrie1} alt="industrie1" />
							</div>
							<div className="textbox">
								<div className="img_text">
									<h5>Web3</h5>
									<p><span>Ever wonder why tapping that cute little box icon on your mobile app.</span></p>
									<div className="btn_box">
										<strong>Learn more about Web3</strong>
									</div>
								</div>
							</div>
						</Link>
						<Link href="/industriesdetail" className="industries_imgtext">
							<div className="img_box">
								<Image src={industrie1} alt="industrie1" />
							</div>
							<div className="textbox">
								<div className="img_text">
									<h5>Real Estate</h5>
									<p><span>Ever wonder why tapping that cute little box icon on your mobile app.</span></p>
									<div className="btn_box">
										<strong>Learn more about Real Estate</strong>
									</div>
								</div>
							</div>
						</Link> */}

						<div className="btn_wrap_block">
							<PrimaryBtn name="See all" arrow="no" link="/industries" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default IndustriesSection;