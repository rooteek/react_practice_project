import React from "react"
function Input() {
    // return (
    //     <div>
    //         <h1>This is Component Without use JSX!</h1>
    //         <input placeholder="Enter Text"/>
    //     </div>
    // )
    return React.createElement('div', null, React.createElement("h1", null, "This is Component Without use JSX!"), React.createElement('input', { placeholder: "Enter text ", className: "border-black", }))
}

export { Input }