// import Link from "next/link";
// import Image from "next/image";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);






// const LogoAnimation = () => {

// 	const rows = 10;
// 	const columns = 10;
// 	const frame_count = rows * columns;
// 	const imageWidth = 3600;
// 	const imageHeight = 3600;
// 	const horizDiff = imageWidth / columns;
// 	const vertDiff = imageHeight / rows;
// 	const obj = { num: 0 };

// 	useEffect(() => {
// 		const setPos = gsap.quickSetter(".viewer-one", "background-position");

// 		gsap.to(obj, {
// 		num: frame_count,
// 		ease: "steps(" + frame_count + ")",
// 		scrollTrigger: {
// 			trigger: ".section-one",
// 			start: "top top",
// 			end: "+=" + imageHeight,
// 			pin: false,
// 			anticipatePin: 1,
// 			scrub: 1,
// 		},
// 		onUpdate: () =>
// 			setPos(`
// 			${-Math.round((obj.num % columns) * horizDiff)}px
// 			${-Math.round(Math.floor(obj.num / columns) * vertDiff)}px
// 			`),
// 		});
// 	}, []);

// 	return (
// 		<>
// 			<div className="anilog">
// 				<div className="container">
// 					<section class="scene section section-one">
// 						<div class="viewer viewer-one"></div>
// 					</section>
// 				</div>
// 			</div>
// 		</>
// 	)
// }

// export default LogoAnimation;