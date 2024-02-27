import ContentBox from "@/components/layout/ContentBox";
import Link from 'next/link';

const HomeBlogBox = (props) => {
	return (
		<>
			<div className="blog_text fadeInUp">
				<ContentBox title={props?.title} />
				<div className='fadeInUp learn_btn_3'>
					<Link href={props?.buttonName?.url}>{props?.buttonName?.title}</Link>
				</div>
			</div>
		</>
	)
}

export default HomeBlogBox;