import { useRef } from "react"

function UseRef() {
    let inputRef = useRef(null)
    function getValue() {
        console.log(inputRef.current.value)
        inputRef.current.focus()
    }
    return (
        <div>
            <h1>Use Ref Hook</h1>
            <p>Use for directely change in to Dom</p>
            <div className="flex flex-col">
                <input type="text" ref={inputRef} className="border-2 border-x-slate-300  h-10 w-50 rounded-lg" />
            </div>
            <div className="">
                <button className="border-2 border-x-slate-300 shadow-md shadow-black p-2 rounded-xl hover:shadow-sm hover:shadow-black active:shadow" onClick={() => getValue()}>get Value</button>
                <button className="border-2 border-x-slate-300 shadow-md shadow-black p-2 rounded-xl hover:shadow-sm hover:shadow-black active:shadow" onClick={() => (inputRef.current.style.color = "red")}>Change Text color</button>
                <button className="border-2 border-x-slate-300 shadow-md shadow-black p-2 rounded-xl hover:shadow-sm hover:shadow-black active:shadow" onClick={() => (inputRef.current.style.backgroundColor = "black")}>Change bg color</button>
            </div>
        </div >
    )
}

export { UseRef }