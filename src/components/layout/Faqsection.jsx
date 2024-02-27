import ContentBox from "@/components/layout/ContentBox";
import Accordion from 'react-bootstrap/Accordion';

const Faqsection = (props) => {
	return (
		<>
			<div className="faq">
				<div className="container">
					<div className="faq_section">
						<div className="text_box fadeInUp">
							<ContentBox title={props?.faqTitle} text={props?.faqDescription} />
						</div>
						<Accordion>

							{
								(props?.faqContent?.length > 0) &&
								props.faqContent.map((faqdata, index) => (
									<Accordion.Item eventKey={index} key={index}>
										<Accordion.Header> {faqdata?.faqMetaTitle}</Accordion.Header>
										<Accordion.Body>{faqdata?.faqMetaDescription}</Accordion.Body>
									</Accordion.Item>
								)
								)
							}
						</Accordion>
					</div>
				</div>
			</div>
		</>
	)
}

export default Faqsection;