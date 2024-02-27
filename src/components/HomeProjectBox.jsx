import PrimaryBtn from '@/components/layout/PrimaryBtn';
import ContentBox from "@/components/layout/ContentBox";

const HomeProjectBox = (props) => {
	return (
		<>
			<div className="project_text fadeInUp">
				<ContentBox title={props?.title} />
				<PrimaryBtn name={props?.buttonName?.title} arrow="no" link={props?.buttonName?.url} // Provide a default value ("/" in this case) if props?.pButtonName?.url is undefined
				/>

			</div>
		</>
	)
}

export default HomeProjectBox;