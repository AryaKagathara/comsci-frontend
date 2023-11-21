import Link from "next/link";
import Image from "next/image";
import HomeBlogBox from "@/components/HomeBlogBox";
import BlogListSection from "@/components/BlogListSection";



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
					</div>
				</div>
			</div>
		</>
	)
}

export default BlogSection;