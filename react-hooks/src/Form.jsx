import { useState } from "react";
import Button from "./components/FormFiled/Button";
import { Input } from "./components/FormFiled/Input";
import { Lable } from "./components/FormFiled/label";
import { Select } from "./components/FormFiled/Select";

function Form() {

    // let [form, setForm] = useState({
    //     name: "",
    //     lastName: "",
    //     college: "",
    //     dob: "",
    //     gender: "",
    // })

    let [name, setName] = useState("")
    let [lastName, setLastname] = useState("")
    let [college, setCollege] = useState("")
    let [dob, setDob] = useState("")
    let [submit, setSubmit] = useState(false);
    // let detalils = [];
    // function storeValue(e) {
    //     // const { name, value } = e.target;
    //     // setFormData({ ...formData, [name]: value });
    //     setForm({ [e.target.id]: e.target.value })
    //     console.log("submited");
    // }

    function submitForm(e) {
        e.preventDefault();
        console.log(name, lastName, college, dob)
        console.log("cick")
    }
    function formCheck() {
        if (name.trim() !== "" && lastName.trim() !== "" && college.trim() !== "" && dob.trim() !== "") {
            setSubmit(true);
        }
    }
    // function storeValue() {
    //     console.log("cick")
    // }
    return (
        <form className="w-3/4 mx-auto mt-2" onSubmit={submitForm} >
            <div className=" flex gap-2">
                <div className="w-full">
                    <Lable label={"Enter your name"} forName={"name"} />
                    <Input types="text" placeholder="Enter name" value={name} inputId="name" changeFun={(e) => { setName(e.target.value) }} />
                </div>
                <div className="w-full">
                    <Lable label="Enter your Last name" forName="lastName" />
                    <Input types="text" placeholder="Enter name" inputId="lastName" value={lastName} changeFun={(e) => { setLastname(e.target.value) }} />
                </div>
            </div>
            <div className="my-4">
                <div className="w-full">
                    <Select selectId="college" value={college} changeFun={(e) => { setCollege(e.target.value) }} />
                </div>
            </div>
            <div className="flex gap-4">
                <div className="w-full">
                    <Lable label="Enter you DOB" forName="abc" />
                    <Input types="date" placeholder="Enter name" inputId="dob" value={dob} changeFun={(e) => { setDob(e.target.value) }} />
                </div>
                <div className="w-full">
                    <Lable label="Select you Gender" forName="abc" />
                    <div className="flex gap-5">
                        <div className="flex gap-2">
                            <Lable label="Male" forName="male" />
                            <Input types="radio" placeholder="Enter name" inputId="male" inputName="gender" />
                        </div>
                        <div className="flex gap-2">
                            <Lable label="Female" forName="famale" />
                            <Input types="radio" placeholder="Enter name" inputId="famale" inputName="gender" />
                        </div>
                        <div className="flex gap-2">
                            <Lable label="Unknown" forName="unknown" />
                            <Input types="radio" placeholder="Enter name" inputId="unknown" inputName="gender" />
                        </div>
                    </div>
                </div>
            </div>
            <Button btnText="Submit" clickHandler={formCheck} />
            {submit ? <div>
                <p>Name: {name}</p>
                <p>Last Name: {lastName}</p>
                <p>College: {college}</p>
                <p>DOB: {dob}</p>
                {/* <p>Gender: {gender}</p> */}
            </div> : null}
            {/* {console.log(form)}
            {console.log(detalils)} */}
        </form>

    )
}
export default Form;