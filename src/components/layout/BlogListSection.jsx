
import Link from "next/link";
import Image from "next/image";
import { format } from 'date-fns';

const BlogListSection = (props) => {

	const formatDate = (dateString) => {
		const date = new Date(dateString);
		const day = date.getDate();
		const month = date.getMonth() + 1; // Month is zero-based
		const year = date.getFullYear();

		// Pad single digits with leading zeros
		const formattedDay = day < 10 ? `0${day}` : day;
		const formattedMonth = month < 10 ? `0${month}` : month;

		return `${formattedDay}.${formattedMonth}.${year}`;
	};

	return (
		<>
			{
				(props?.post?.length > 0) &&
				props?.post?.map((postData, index) => {
					return (
						<div className="listing_secting" key={index}>
							<Link href={`blog/${postData?.slug}`} className="list_wrap">
								<div className="blog_img">
									<Image src={postData?.featuredImage?.node?.sourceUrl} height={234} width={234} alt="blog" />
								</div>
								<div className="blog_content">
									<div className="text">
										<span className="category">{postData?.catName}</span>
										<div className="first_dot"></div>
										<p className="date">{formatDate(postData?.date)}</p>
									</div>
									<span className="blog_title">{postData?.title}</span>
									<div className="read_btn">
										<p>Read now</p>
									</div>
								</div>
							</Link>
						</div>
					)
				})
			}
		</>
	)
}
export default BlogListSection;