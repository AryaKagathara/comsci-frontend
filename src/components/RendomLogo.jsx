
import React, { useState, useEffect } from "react";


function RandomImage(props) {
	const style = {
		width: 150,
		height: 80,
		display: 'inline-flex',
		boxSizing: 'border-box',
		backgroundImage: `url("${props.url}")`,
		transition: 'all 1s ease-in-out',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		backgroundPosition: 'center center'
	};

	return (
		<div href="" style={style} />
	);
}

const RendomLogo = (props) => {

	useEffect(() => {
		// const interval = setInterval(() => {
		// 	setNumbers((prevNumbers) => [...prevNumbers].sort(() => Math.random() - 0.5));
		// }, 2000);

		// return () => clearInterval(interval);
	}, []);

	return (
		<>
			<div className="rendom">
				<div className="container">
					<div className="text mt-5" data-scroll data-scroll-speed=".1">
						<h2>{props?.title}</h2>
						<p>{props?.shortDescription}</p>
					</div>
					<div className="logo_section" id="ren_logo" data-scroll data-scroll-speed=".4">
						{props?.clientLogos.map((image, index) => (
							<RandomImage key={index} num={index} url={image?.clientLogoImage?.sourceUrl} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default RendomLogo;