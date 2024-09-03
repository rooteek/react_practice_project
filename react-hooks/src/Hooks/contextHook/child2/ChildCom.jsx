import { useContext } from 'react'
import { GlobleData } from '../ParentCom'
import { SuperChild } from './SperChild';

function ChildCom() {
    const { user, setUser, changeDate } = useContext(GlobleData);
    let day = new Date();
    // console.log("child Rander")
    return (
        <div>
            <p>{user}</p>
            <button onClick={() => setUser(user == "user" ? "Admin" : "user")}>change</button>
            {/* <p>Day :{day.getTime() / 1000 / 60 / 60 / 24 / 365} </p> */}
            <p>Day :{day.toLocaleDateString()} </p>
            {day.toLocaleTimeString()}
            <button onClick={() => { changeDate(day) }}>Change Date</button>
            <SuperChild />
        </div>
    )
}
export { ChildCom }