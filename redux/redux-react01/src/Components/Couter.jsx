import { useSelector } from "react-redux";


function Couter() {
    const conter = useSelector(state => state)
    return (
        <>
            <div>{conter}</div>
        </>
    )
}

export default Couter;  