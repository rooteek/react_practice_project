import { useState } from 'react'
import Counter from './Components/Couter.jsx'
import { useDispatch } from 'react-redux';
function App() {

  const dispatch = useDispatch();
  const [count, setCount] = useState(0)
  return (
    <>
      <div className='flex justify-center items-start gap-6 py-4'>
        <button className='border px-3' onClick={e => dispatch({ type: "INCREMENT" })}>+</button>
        <Counter />
        <button className='border px-3' onClick={e => dispatch({ type: "DECREASE" })}>-</button>
      </div>
    </>
  )
}

export default App
