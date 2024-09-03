import { useState } from 'react'
import { Input } from './components/Input'
import { Button } from './Button'
function App() {
  const [item, setItem] = useState("")
  const [value, setValue] = useState([]);
  const addItem = () => {
    console.log(item);
    if (item.trim() !== "") {
      setValue([...value, { item }])
      setItem("")
      document.getElementById("InputBox").focus()
    }
  }
  const deleteItem = (e) => {
    // console.log(e)
    setValue(value.filter((item, i) => {
      // console.log(i)
      return i !== e
    }))
  }
  return (
    <div className='border w-96 mx-auto text-center shadow-xl rounded-xl p-5 mt-10'>
      <h1 className='text-2xl font-bold'>TODO LIST</h1>
      <Input placeholder="add item...." value={item} changeHandler={(e) => setItem(e.target.value)} id="InputBox"/>
      <Button value="ADD" clickHandler={addItem} bgColor="bg-blue-500" />
      <ul className=''>
        {value.map((v, i) => (
          <li key={i} className='w-full'>{i + 1} <Input type="text" value={v.item} /><Button value="Delete" clickHandler={() => deleteItem(i)} bgColor="bg-red-600" /> </li>
        ))}
      </ul>
    </div>
  )
}

export default App


















