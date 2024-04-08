import Link from "next/link";
import Image from "next/image";
import Share from "@/../public/images/share.svg";
import Export from "@/../public/images/export.svg";

const ProjectDetailContent = (props) => {
	return (
		<>
			<div className="project_detail_section">
				<div className="container">
					<div className="detail_wrap">
						{
							(props?.projectTitle != null) &&
							<h5>{props?.projectTitle}</h5>
						}
						{
							(props?.bannerContent != null) &&
							<div dangerouslySetInnerHTML={{ __html: props?.bannerContent }}></div>
						}

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