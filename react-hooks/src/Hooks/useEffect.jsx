import React, { useEffect, useState } from "react"
function UseEffect() {
    let [count, setCount] = useState(0);
    let [name, setName] = useState("hi");
    useEffect(() => {
        console.log("Use Effect Hook");
    },[name])
    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold mt-2">Use Effect Hook</h1>
            <div>
                {count}
                <br />
                <button onClick={() => { setCount(count + 1) }}>Add</button>
            </div>
            <div>
                {name}
                <br />
                <button onClick={() => { setName(name!=="hi" ? "hi" : "hello") }}>Change name</button>
            </div>
        </div>
    )
}
export { UseEffect }