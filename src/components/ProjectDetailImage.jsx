import Image from "next/image";

const ProjectDetailImage = (props) => {
	return (
		<>
			<div className="project_imagewrap">
				{
					(props?.projectImages.length > 0) &&
					props?.projectImages.map((image, index) => (
						<div key={index} className="images_wrapper_block">
							<Image src={image?.pdImage?.sourceUrl} alt={image?.pdImage?.altText} width={image?.pdImage?.mediaDetails?.width} height={image?.pdImage?.mediaDetails?.height} />
						</div>
					))
				}
			</div>
		</>
	)
}

export default ProjectDetailImage;