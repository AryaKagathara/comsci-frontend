import Link from "next/link";
import Image from "next/image";
import PrimaryBtn from '@/components/layout/PrimaryBtn';
import ContentBox from "@/components/layout/ContentBox";



const HomeBlogBox = () => {
	return (
		<>
			<div className="blog_text fadeInUp">
				<ContentBox title="Current news & exciting Insights from COMSCI." />
				<PrimaryBtn name="All News & exciting" arrow="no" link="/bloglist"/>
			</div>
		</>
	)
}

export default HomeBlogBox;