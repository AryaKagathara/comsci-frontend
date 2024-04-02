const ServicesType = (props) => {
	return (
		<>
			<div className="service_type">
				<div className="container">
					{
						(props?.serviceData?.length > 0) &&
						props.serviceData.map((service, index) => (
							<div className="type_textbox" key={index}>
								<h3>{service?.smdTitle}</h3>
								<p>{service?.smdDescription}</p>
							</div>
						))
					}
				</div>
			</div>
		</>
	);
};

export default ServicesType;