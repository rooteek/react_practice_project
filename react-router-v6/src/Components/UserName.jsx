import { useParams } from "react-router-dom";

function UserName() {
    let params = useParams();
    let { name }=params;
    return (
        <>
            <h1>HEllo <i className="font-bold text-lg">{name}</i> wellcome </h1>
        </>
    )
}
export default UserName;