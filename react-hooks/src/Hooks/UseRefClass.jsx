import React, { createRef } from "react";
class UseRefClass extends React.Component {
    render() {
        let inputRef = createRef()
        function changeColor() {
            inputRef.current.style.color = "red"
        }
        return (
            <>
                <h1>Class Component with ref Example</h1>
                <input type="text" ref={inputRef} />
                <button onClick={changeColor}>click</button>
            </>
        )
    }
}

export { UseRefClass }