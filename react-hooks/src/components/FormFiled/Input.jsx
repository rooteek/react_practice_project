// import React from "react";
function Input(props) {
    let { placeholder, types, inputId, inputName, changeFun, value } = props;
    return (
        <input className="w-full border border-slate-300 rounded-lg px-4 py-2 outline-none" type={types} placeholder={placeholder} id={inputId} name={inputName} onChange={changeFun} value={value} />
    )
}
export { Input };