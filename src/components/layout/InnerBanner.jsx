import Image from "next/image";

const InnerBanner = (props) => {
	return (
		<>
			<div className="innerbanner">
				<div className="banner_img">
					<Image src={props?.bannerImage?.node?.sourceUrl} height={props?.bannerImage?.node?.mediaDetails?.height} width={props?.bannerImage?.node?.mediaDetails?.width} alt={props?.bannerImage?.node?.altText} />
				</div>
			</div>
		</>
	)
}

export default InnerBanner;