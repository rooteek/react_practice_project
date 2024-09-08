import { useState } from "react";
import axios from "axios";

function InsertData() {
    // let [name, setName] = useState("");
    // let [lastname, setLastName] = useState("");
    // let [email, setEmail] = useState("");
    // let [mobile, setMobile] = useState("");
    // let [nickName, setNickName] = useState("");

    let [getForm, setFormData] = useState({
        firstName: "",
        lastName: "",
        mobileNo: "",
        email: "",
        nickName: ""
    })

    function handleFormInput(e) {
        setFormData({ ...getForm, [e.target.id]: e.target.value })
    }
    // function insertData() {
    //     console.log(name, lastname, email, mobile, nickName);
    //     fetch("https://service.apikeeda.com/api/v1/contact-book", {
    //         method: "POST",
    //         headers: {
    //             "x-apikeeda-key": "p1724735010584ofn192289416wn",
    //         },
    //         body: JSON.stringify({ name, lastname, mobile, email, nickName })
    //     }).then((resp) => {
    //         console.log(resp)
    //         // console.log(res.json())
    //         // res.json().then((reslt)=>{
    //         //     console.log(reslt)
    //         // })
    //         return resp
    //     })
    // }


    function insertData() {
        if (getForm.firstName.trim() !== "" && getForm.lastName.trim() !== "" && getForm.mobileNo.trim() !== "" && getForm.email.trim() !== "" && getForm.nickName.trim()) {
            // console.log(getForm.firstName, getForm.lastName, getForm.mobile, getForm.email, getForm.nickname);
            axios.post('https://service.apikeeda.com/api/v1/contact-book', getForm, {
                headers: {
                    "x-apikeeda-key": "u1724739183696ecd220963121av"
                }
            })
                .then((res) => {
                    console.log(res);
                    setFormData({
                        firstName: "",
                        lastName: "",
                        mobileNo: "",
                        email: "",
                        nickName: "",
                    })
                    document.getElementById("firstName").focus();
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        else {
            let form = document.getElementById("form");
            let inputs = form.querySelectorAll("input");
            inputs.forEach(input => {
                if (input.value.trim() === "") {
                    input.setAttribute("class", "inputErro");
                }
                else {
                    input.setAttribute("class", "revmoeError");
                }
            });
        }
    }

    return (
        <>
            <div className=" mt-6 w-3/4 m-auto" id="form">
                <div className="flex gap-5 text-lg ">
                    <div className="flex flex-col  w-full">
                        <label htmlFor="" className="text-gray-400">First Name</label>
                        <input type="text" className="border border-slate-400 rounded-lg h-9 outline-none px-3" id="firstName" value={getForm.firstName} onChange={handleFormInput} />
                    </div>
                    <div className="flex flex-col w-full ">
                        <label htmlFor="" className="text-gray-400">Last Name</label>
                        <input type="text" className="border border-slate-400 rounded-lg h-9 outline-none px-3" id="lastName" value={getForm.lastName} onChange={handleFormInput} />
                    </div>
                </div>
                <div className="flex gap-5 text-lg ">
                    <div className="flex flex-col  w-full">
                        <label htmlFor="" className="text-gray-400">Mobile No.</label>
                        <input type="text" className="border border-slate-400 rounded-lg h-9 outline-none px-3" id="mobileNo" value={getForm.mobileNo} onChange={handleFormInput} />
                    </div>
                    <div className="flex flex-col w-full ">
                        <label htmlFor="" className="text-gray-400">Email</label>
                        <input type="text" className="border border-slate-400 rounded-lg h-9 outline-none px-3" id="email" value={getForm.email} onChange={handleFormInput} />
                    </div>
                </div>
                <div>
                    <div className="flex flex-col text-lg  w-full ">
                        <label htmlFor="" className="text-gray-400">nickName</label>
                        <input type="text" className="border border-slate-400 rounded-lg h-9 outline-none px-3" id="nickName" value={getForm.nickName} onChange={handleFormInput} />
                    </div>
                </div>
                <button className="py-2 px-5 mt-3 rounded-xl bg-blue-500 text-slate-200 font-bold" onClick={insertData}>Add</button>
            </div>
            <div>
            </div>
        </>
    )
}

export default InsertData;