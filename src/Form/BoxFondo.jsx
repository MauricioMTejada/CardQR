import React from "react";

const BoxFondo = ({ children }) => {
	const styleBorder = {
		backgroundColor: "#00ba5d",
		boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
		borderRadius: "0 0 0.8rem 0.8rem",
		marginBottom: "1.5rem", // Ajusta el margen inferior según tus necesidades
		padding: "1.5rem", // Ajusta el espaciado interno según tus necesidades
		// borderLeft: '1px solid #6415ff', // Cambia el color del borde izquierdo según tus necesidades
		// borderRight: '1px solid #6415ff', // Cambia el color del borde derecho según tus necesidades
		// borderBottom: '1px solid #6415ff', // Cambia el color del borde inferior según tus necesidades
		height: '500px',
		display: 'Flex',
		// alignContent: 'center',
		alignItems: 'center',
		// alignSelf: 'center',
	};

	const textStyle = {
		color: "#263238", // Cambia el color de fuente según tus necesidades
	};

	return (
		// <div style={{alignItems: 'center'}}>
			<div style={styleBorder}>
				<div style={textStyle}>{children}</div>
			</div>
		// </div>

	);
};

export default BoxFondo;
