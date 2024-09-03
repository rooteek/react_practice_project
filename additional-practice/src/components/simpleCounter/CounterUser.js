
function CounterUser(props) {
    let { clickHandler, count } = props;
    return (
        <>
            <h1>{count}</h1>
            <button onClick={clickHandler}>Add User</button>
        </>
    )
}
export { CounterUser }