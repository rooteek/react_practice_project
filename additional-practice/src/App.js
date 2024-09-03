import { useState } from 'react';
import { Input } from '../src/components/FormComponents/Input'
import { CounterUser } from './components/simpleCounter/CounterUser';

function App() {
  let [count, setCount] = useState(0);

  function increament() {
    setCount(count + 1);
  }
  function ExtraCompo() {
    return (
      <>
        <h1>This is ExtraCompo counter</h1>
        <h1>{count}</h1>
        <button onClick={() => { setCount(count + 1) }}>Add</button >
      </>
    )
  }
  return (
    <div className="App text-center">
      <h1 className='text-3xl'>Just Practice of React</h1>
      <h1>This is App counter </h1>
      {/* {count} */}
      <ExtraCompo />
      <Input />

      <CounterUser count={count} clickHandler={increament} />
    </div>
  );
}

export default App;
