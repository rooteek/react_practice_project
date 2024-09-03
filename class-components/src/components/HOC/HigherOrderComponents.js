import { useState } from "react"

function HOC(props) {
    return (
        <div className="ml-10 text-center w-52 border border-black " style={{background:`${props.bgcolor}`,color:`${props.txtColor}`}}>
            <h2>HOC</h2>
            <props.cb />
        </div>
    )
}

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className="">
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)} className="border px-2 bg-blue-600">Add</button>
        </div>
    )
}

export { HOC, Counter }