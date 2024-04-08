import Link from "next/link";
import BlogListSection from "@/components/layout/BlogListSection";
import ContentBox from "@/components/layout/ContentBox";
import PrimaryBtn from '@/components/layout/PrimaryBtn';
import { useState } from "react";

const BlogpageSection = (props) => {
	const defaultPostDisplay = 3;
	const [postList, setPostList] = useState(props?.postList);
	const [filterResult, setFilterResult] = useState(props?.postList);
	const [filterResultCount, setFilterResultCount] = useState(props?.postList?.length);
	const [activeCategory, setActiveCategory] = useState(null);
	const [current,setCurrent] = useState(defaultPostDisplay);
	const [showLoadMore,setShowLoadMore] = useState(true);

	const catClickHandler = (e, catName) => {
		e.preventDefault();
		let filterData = postList.filter(post => post.catName == catName)
		let data = filterData.length > defaultPostDisplay ? filterData.slice(0,defaultPostDisplay) : filterData;
		setFilterResult(data);
		setFilterResultCount(filterData.length)
		setActiveCategory(catName); // Update active category
		setCurrent(defaultPostDisplay);
		setShowLoadMore(true);
	}
	const allCatHandler = (e) => {
		e.preventDefault();
		let data = postList.length > defaultPostDisplay ? postList.slice(0,defaultPostDisplay) : postList;
		setFilterResult(data);
		setFilterResultCount(postList.length)
		setActiveCategory(null); // Reset active category
		setCurrent(defaultPostDisplay);
		setShowLoadMore(true);
	}
	const loadMoreHandler = (e) => {
		e.preventDefault();
		// console.log("activeCategory : ",activeCategory)
		let filterData = activeCategory == null ? postList : postList.filter(post => post.catName == activeCategory)
		let data = filterData.slice(0,current + defaultPostDisplay);
		setCurrent(current + defaultPostDisplay)
		setFilterResult(data)
		setFilterResultCount(data.length)
		setShowLoadMore(filterData.length == data.length ? false : true)
		// console.log("lenght : ",data.length)
	}

	return (
		<>
			<div className="blog">
				<div className="container">
					<div className="blog_section">
						<div className="blogpage_wrapper">
							<ContentBox title="Existing insights and articles" />
						</div>
						<div className="filter_btn">
							<ul>
								<li>
									<Link href="#" className={!activeCategory ? "active" : ""} onClick={(e) => allCatHandler(e)}>All</Link>
								</li>
								{props?.categortList?.nodes?.map((cat, index) => (
									<li key={index}>
										<Link href="#" className={activeCategory === cat.name ? "active" : ""} onClick={(e) => catClickHandler(e, cat.name)}>{cat.name}</Link>
									</li>
								))}
							</ul>

							{/* <ul>
								<li><Link href="#" className="active" onClick={(e) => allCatHandler(e)}>All</Link></li>
								{
									(props?.categortList?.nodes?.length > 0) &&
									props?.categortList?.nodes?.map((cat, index) => {
										return (
											<li key={index}><Link href="#" onClick={(e) => catClickHandler(e, cat.name)}>{cat.name}</Link></li>)
									})
								}
							</ul> */}

						</div>
						<div className="bloglist_section">
							<BlogListSection post={filterResult} />
						</div>
						{
							(filterResultCount > defaultPostDisplay && showLoadMore) &&
							<div className="blog_loadbtn">
								<div className="loadmorewrapper" onClick={(e) => loadMoreHandler(e)}>
									<PrimaryBtn name="Load more" arrow="no" link="#" />
								</div>
							</div>
						}
					</div>
				</div>
			</div>
		</>
	)
}

export default BlogpageSection;




































// import Link from "next/link";
// import BlogListSection from "@/components/layout/BlogListSection";
// import ContentBox from "@/components/layout/ContentBox";
// import PrimaryBtn from '@/components/layout/PrimaryBtn';
// import { useState } from "react";

// const BlogpageSection = (props) => {
//     const defaultPostDisplay = 3;
//     const [postList, setPostList] = useState(props?.postList);
//     const [filterResult, setFilterResult] = useState(props?.postList);
//     const [displayedPosts, setDisplayedPosts] = useState(defaultPostDisplay);

//     const catClickHandler = (e, catName) => {
//         e.preventDefault();
//         let filterResult = postList.filter(post => post.catName === catName);
//         setFilterResult(filterResult);
//         setDisplayedPosts(defaultPostDisplay); // Reset displayed posts count
//     };

//     const allCatHandler = (e) => {
//         e.preventDefault();
//         setFilterResult(postList);
//         setDisplayedPosts(defaultPostDisplay); // Reset displayed posts count
//     };

//     const loadMoreHandler = () => {
//         setDisplayedPosts(prevCount => prevCount + defaultPostDisplay);
//     };

//     return (
//         <>
//             <div className="blog">
//                 <div className="container">
//                     <div className="blog_section">
//                         <div className="blogpage_wrapper">
//                             <ContentBox title="Existing insights and articles" />
//                         </div>
//                         <div className="filter_btn">
//                             <ul>
//                                 <li><Link href="#" className="active" onClick={(e) => allCatHandler(e)}>All</Link></li>
//                                 {(props?.categortList?.nodes?.length > 0) &&
//                                     props?.categortList?.nodes?.map((cat, index) => {
//                                         return (
//                                             <li key={index}><Link href="#" onClick={(e) => catClickHandler(e, cat.name)}>{cat.name}</Link></li>
//                                         );
//                                     })}
//                             </ul>
//                         </div>
//                         <div className="bloglist_section">
//                             <BlogListSection post={filterResult.slice(0, displayedPosts)} />
//                         </div>
//                         {defaultPostDisplay < filterResult.length && (
//                             <div className="blog_loadbtn">
//                                 <PrimaryBtn name="Load more" arrow="no" onClick={loadMoreHandler} />
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default BlogpageSection;
