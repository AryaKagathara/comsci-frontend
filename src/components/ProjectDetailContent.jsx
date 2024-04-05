import Link from "next/link";
import Image from "next/image";
import Share from "@/../public/images/share.svg";
import Export from "@/../public/images/export.svg";

const ProjectDetailContent = () => {

	return (
		<>
			<div className="project_detail_section">
				<div className="container">
					<div className="detail_wrap">
						<h5>Medical Escape</h5>
						<p>Ever wonder why tapping that cute little box icon on your mobile app feels like opening a treasure chest of possibilities? Well, there&apos;s a whole world of magic happening behind the scenes to bring you those seamless mobile applications.</p>
						<p>When it comes to mobile apps, it&apos;s an iOS vs. Android showdown. Developing an app means diving into the vast ocean of potential customers on the Play Store and App Store. But hold on, why bother with an app when you can just visit a website? Good question! Turns out, users love the instant gratification of apps – no extra clicks, no browser searches, just pure instant access.</p>
						<ul className="share_btn">
							<li><Link href="#"><Image src={Share} alt="share" /></Link></li>
							<li><Link href="#"><Image src={Export} alt="export" /></Link></li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProjectDetailContent;