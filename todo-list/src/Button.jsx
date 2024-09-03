function Button(props) {

    return (
        <button onClick={props.clickHandler} className={`border rounded-md px-3 py-2 ${props.bgColor} text-slate-200 font-medium`} > {props.value}</button >
    )
}
export { Button }