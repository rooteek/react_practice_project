import { useState } from 'react'
import { Input } from './components/Input';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Input type="text" placeholder=""/>
    </div>
  )
}

export default App
