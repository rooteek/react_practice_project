import { useCallback, useMemo, useState } from "react"

function UseMemo() {

    let [count, setCount] = useState(0)
    let [name, setName] = useState("hi");
    // function AutoMultiplication() {
    //     console.log("multiplication")
    //     return count * 5;
    // }
    useMemo(() => {
        console.log("multiplication")
        return count * 5
    }, [count])
    // let callBackAuto = useCallback(() => {
    //     console.log("callback")
    // }, [count])
    return (
        <div>
            <h1>Use Memo</h1>
            <p>Use for Enhance the proformance of the app it shop unwanted rednder of the application</p>
            <div>
                {/* {AutoMultiplication} */}
                {/* {callBackAuto()} */}
                <h3>{count}</h3>
                <button onClick={() => { setCount(count + 1) }} >Add 1</button>
                <h3>{name}</h3>
                <button onClick={() => setName(name == 'hi' ? "hello" : "hi")}>change name</button>
            </div>
        </div>
    )
}

export { UseMemo }