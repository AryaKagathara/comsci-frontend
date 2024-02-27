import HomeBlogBox from "@/components/HomeBlogBox";
import BlogListSection from "@/components/layout/BlogListSection";

const BlogSection = (props) => {
	return (
		<>
			<div className="blog">
				<div className="container">
					<div className="blog_section">
						<HomeBlogBox title={props?.title} buttonName={props?.blogButtonName} />
						<div className="bloglist_section">
							{
								(props?.selectedBlogs.length > 0) &&
								props.selectedBlogs.map((blogs, index) => (
									<BlogListSection key={index} blog={blogs} />
								))
							}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default BlogSection;