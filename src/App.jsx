import { useState } from 'react';
import './App.css'
import Form from './Form/Form'
import CardContainer from './Card/CardContainer';
// import 'tailwindcss/tailwind.css';

function App() {

  const [infoCard, setInfoCard] = useState( {nombre: "Nombre", apellido: "Apellido", fechaNacimiento: new Date(), fechaValidez: [new Date(), new Date()]} )
  // console.log(infoCard);
  return (
    <div style={{display: 'flex', alignItems: 'stretch'}}>
      <Form setInfoCard={setInfoCard} />
      <CardContainer infoCard={infoCard}/>
    </div>
  )
}

export default App
