import HomeBlogBox from "@/components/HomeBlogBox";
import BlogListSection from "@/components/layout/BlogListSection";
import PrimaryBtn from '@/components/layout/PrimaryBtn';


const BlogSection = () => {
	return (
		<>
			<div className="blog">
				<div className="container">
					<div className="blog_section">
						<HomeBlogBox />
						<div className="bloglist_section">
							<BlogListSection />
							<BlogListSection />
							<BlogListSection />
						</div>
						<div className="blogbtn_wrap">
							<PrimaryBtn name="All News & exciting" arrow="no" link="/bloglist" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default BlogSection;