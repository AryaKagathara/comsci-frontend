import Link from "next/link";
import Image from "next/image";
import BlogListSection from "@/components/layout/BlogListSection";



const BlogpageSection = () => {
	return (
		<>
			<div className="blog">
				<div className="container">
					<div className="blog_section">
						<div className="blogpage_wrapper">
							<h4>Current news & exciting Insights from COMSCI.</h4>
						</div>
						<div className="bloglist_section">
							<BlogListSection />
							<BlogListSection />
							<BlogListSection />
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

export default BlogpageSection;