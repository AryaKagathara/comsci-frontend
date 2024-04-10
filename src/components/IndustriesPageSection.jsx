import Link from "next/link";
import Image from "next/image";
import PrimaryBtn from '@/components/layout/PrimaryBtn';
import industrie1 from '@/../public/images/industriessection-img.webp';

const IndustriesSection = () => {

	return (
		<>
			<div className="industries industrie_wrapper">
				<div className="indus_wrap">
					<div className="title">Industries</div>
					<div className="indus_section">
						<Link href="/industriesdetail" className="industries_imgtext">
							<div className="img_box">
								<Image src={industrie1} alt="industrie1" />
							</div>
							<div className="textbox">
								<div className="img_text">
									<h5>Healthcare</h5>
									<p><span>Ever wonder why tapping that cute little box icon on your mobile app.</span></p>
									<div className="btn_box">
										<strong>Learn more about Heathcare</strong>
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
						</Link>
						<Link href="/industriesdetail" className="industries_imgtext">
							<div className="img_box">
								<Image src={industrie1} alt="industrie1" />
							</div>
							<div className="textbox">
								<div className="img_text">
									<h5>Educational</h5>
									<p><span>Ever wonder why tapping that cute little box icon on your mobile app.</span></p>
									<div className="btn_box">
										<strong>Learn more about Educational</strong>
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
									<h5>Hospitality & Luxery</h5>
									<p><span>Ever wonder why tapping that cute little box icon on your mobile app.</span></p>
									<div className="btn_box">
										<strong>Learn more about Real Estate</strong>
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
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default IndustriesSection;