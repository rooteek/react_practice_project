import { useContext, useState } from "react";
import { GlobleData } from '../ParentCom'

function SuperChild() {
    const { user } = useContext(GlobleData);
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>This is Super Child</h1>
            <p>{user}</p>
        </>
    )
}

export { SuperChild }