function Input(props) {

    const { type, placeholder, value, changeHandler,id } = props;
    return (
        <input type={type} placeholder={placeholder} value={value} onChange={changeHandler} className="border rounded-lg mx-2 h-9 px-3" id={id}/>
    )
}

export { Input }