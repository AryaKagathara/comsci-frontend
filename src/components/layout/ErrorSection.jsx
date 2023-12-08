import Link from "next/link";
import Image from "next/image";
import Maze from "@/../public/images/maze-img.png";
import PrimaryBtn from '@/components/layout/PrimaryBtn';



const ErrorSection = () => {
	return (
		<>
			<div className="error">
				<div className="error_section">
					<div className="maze_wrap">
						<div className="maze_img">
							<Image src={Maze} alt="maze" />
						</div>
						<div className="help_btn">
							<Link href="#" className="fadeInUp">Please help me, I can’t find where am I.</Link>
						</div>
					</div>
					<div className="maze_content fadeInUp">
						<h6>Looks like you are in a maze.</h6>
						<p>The page you’re looking for is not available</p>
						<div className="maze_btn">
							<PrimaryBtn name="Go back Home" arrow="no" link="/"/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}


export default ErrorSection;