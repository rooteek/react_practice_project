function Input(props) {
    const { id, type, placeholder } = props;
    return (
        <>
            <input type={type} placeholder={placeholder}  className="" />
        </>
    )
}
export { Input }