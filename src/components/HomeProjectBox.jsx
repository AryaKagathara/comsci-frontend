import Link from "next/link";
import Image from "next/image";
import PrimaryBtn from '@/components/layout/PrimaryBtn';




const HomeProjectBox = () => {
	return (
		<>
			<div className="project_text">
				<h4>You can also view our past projects.</h4>
				<PrimaryBtn name="View more" arrow="yes"/>
			</div>
		</>
	)
}

export default HomeProjectBox;