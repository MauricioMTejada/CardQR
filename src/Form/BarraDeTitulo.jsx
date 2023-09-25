import React from 'react';

const BarraDeTitulo = ({ title }) => {
  const styleBarra = {
    backgroundColor: '#008639', // Cambia el color de fondo según tu configuración
    color: 'white', // Cambia el color de texto según tu configuración
    padding: '0.5rem 1rem', // Ajusta el espaciado interno según tus necesidades
    borderTopLeftRadius: '0.8rem', // Ajusta los radios de las esquinas según tus necesidades
    borderTopRightRadius: '0.8rem',
    // marginTop: '1rem', // Ajusta el margen superior según tus necesidades
    // borderLeft: '1px solid #453c5c', // Ajusta los bordes según tus necesidades
    // borderRight: '1px solid #453c5c',
    // borderTop: '1px solid #453c5c',
  };

  const h2Style = {
    fontSize: '1.25rem', // Ajusta el tamaño de fuente según tus necesidades
    fontWeight: 'bold',
    color: '#263238'
  };

  return (
    <div style={styleBarra}>
      <h2 style={h2Style}>{title}</h2>
    </div>
  );
};

export default BarraDeTitulo;
