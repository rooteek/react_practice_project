import { useState, createContext } from "react";
import { ChildCom } from "./child2/ChildCom";

export const GlobleData = createContext();
function ParentCom() {
    let [user, setUser] = useState("User");

    function changeDate(item) {
        console.log(item.toLocaleTimeString())
    }
    // {console.log("reder")}
    return (
        <GlobleData.Provider value={{ user, setUser, changeDate }}>
            <div>
                <h1>Parent Component</h1>
                <ChildCom />
            </div>
        </GlobleData.Provider>
    )
}
export { ParentCom };