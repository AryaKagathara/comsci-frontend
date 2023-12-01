import Link from "next/link";
import Image from "next/image";


const ContentBox = (props) => {
	return (
		<>
			<h4>{ props.title }</h4>
			<p>{ props.text }</p>
		</>
	)
}

export default ContentBox;