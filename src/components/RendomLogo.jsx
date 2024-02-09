import Link from "next/link";
import React, { useState, useEffect } from "react";

const imgQty = 18;

function RandomImage(props) {
	const style = {
		width: 150,
		height: 80,
		display: 'inline-flex',
		boxSizing: 'border-box',
		backgroundImage: `url("images/rendom-type-${props.num}.svg")`,
		transition: 'all 1s ease-in-out'
	};

	return (
		<div href="" style={style} />
	);
}

const RendomLogo = () => {
	const [numbers, setNumbers] = useState(Array(imgQty).fill().map((_, i) => i + 1));

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
					<div className="text mt-2">
						<h2>Clients</h2>
					</div>
					<div className="logo_section" id="ren_logo">
						{numbers.map((num) => (
							<RandomImage key={num} num={num} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default RendomLogo;