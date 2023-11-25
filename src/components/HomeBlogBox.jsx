import Link from "next/link";
import Image from "next/image";
import PrimaryBtn from '@/components/layout/PrimaryBtn';




const HomeBlogBox = () => {
	return (
		<>
			<div className="blog_text">
				<h4>Current news & exciting Insights from COMSCI.</h4>
				<PrimaryBtn name="All News & exciting" arrow="no" link="/bloglist"/>
			</div>
		</>
	)
}

export default HomeBlogBox;