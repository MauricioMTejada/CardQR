import { useState } from 'react';
import './App.css'
import Form from './Form/Form'
// import 'tailwindcss/tailwind.css';

function App() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <Form />
    </>
  )
}

export default App
