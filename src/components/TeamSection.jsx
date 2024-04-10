import Link from "next/link";
import Image from "next/image";
import ContentBox from "@/components/layout/ContentBox";

const TeamSection = (props) => {
	return (
		<>
			<div className="team">
				<div className="container">
					<div className="team_section">
						<div className="title">
							{
								(props?.title != null) &&
								<ContentBox title={props?.title} />
							}
						</div>
						<div className="team_list">
							<div className="row">

								{
									(props?.teamMember.length > 0) &&
									props?.teamMember.map((member, index) => (

										<div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6" key={index}>
											<Link href="#" className="teambox">
												<div className="image">
													{
														(member?.featuredImage?.node != null) &&
														<Image src={member?.featuredImage?.node?.sourceUrl} alt={member?.featuredImage?.node?.altText} width={member?.featuredImage?.node?.mediaDetails?.width} height={member?.featuredImage?.node?.mediaDetails?.height} />
													}
												</div>
												<div className="text">
													{
														(member.title != null) &&
														<p>{member.title}</p>
													}
													{
														(member?.excerpt != null) &&
														<span dangerouslySetInnerHTML={{ __html: member?.excerpt }}></span>
													}
												</div>
											</Link>
										</div>
									))
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default TeamSection;