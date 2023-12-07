import Link from "next/link";
import Image from "next/image";
import PrimaryBtn from '@/components/layout/PrimaryBtn';
import ContentBox from "@/components/layout/ContentBox";


const HomeProjectBox = () => {
	
	return (
		<>
			<div className="project_text fadeInUp">
				<ContentBox title="Browse our portfolio for a glimpse into our past work." />
				<PrimaryBtn name="View more" arrow="no" link="/project" />
			</div>
		</>
	)
}

export default HomeProjectBox;