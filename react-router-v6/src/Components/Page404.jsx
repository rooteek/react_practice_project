import { Link } from "react-router-dom";

function Page404(){
    return(
        <>
            <h1>Page Not found 404</h1>
            <button><Link to="/">Go home page</Link></button>
        </>
    )
}
export default Page404;