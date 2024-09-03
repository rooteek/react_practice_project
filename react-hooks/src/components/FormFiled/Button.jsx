function Button(props) {
    return (
        <>
            <button className="px-3 py-2 border rounded-lg bg-blue-600 text-slate-100 font-medium mt-2" onClick={props.clickHandler}>{props.btnText}</button>
            {/* <button className="px-3 py-2 border rounded-lg bg-blue-600 text-slate-100 font-medium mt-2" onClick={()=>alert(props.massage)} >{props.children}</button> */}
        </>
    )
}

export default Button;