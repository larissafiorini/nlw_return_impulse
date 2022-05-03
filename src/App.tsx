import { useState } from 'react'

interface ButtonProps{
  text?:string;
}

function Button(props: ButtonProps){
  return <button className='button'> {props.text ?? 'Default' }</button>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex gap-2'>
      <Button text="Enviar"/>
      <Button text="Ok"/>
    </div>
    )
}

export default App
