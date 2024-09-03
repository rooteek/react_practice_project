import { useState } from "react"
import Button from "../components/FormFiled/Button";
import { Input } from "../components/FormFiled/Input";

function User(props) {
    // let name = "rut"
    let [name, setName] = useState("");
    let [check, setCheck] = useState(false);
    function getName(e) {
        // console.log(e.target.value);
        setName(e.target.value)
    }
    return (
        <>
            <h1 className="text-center text-[70px] font-[700]">Data lifting</h1>
            <div>
                <Input placeholder="Enter you name" changeFun={getName} />
                <p>you name is : {check ? name : ""}</p>
            </div>
            <Button btnText="click" clickHandler={() => { props.alert(name); setCheck(true) }} />
        </>
    )
}
export { User }