import { useState } from "react";
import axios from "axios";

function UpdateData(props) {
    let { firstName, lastName, mobileNo, email, nickName, updateBtn, onChange, _id,calcenBtn } = props
    return (
        <>
            <div className=" mt-6 w-3/4 m-auto" id="form">

                <div className="flex-col  w-full hidden">
                    <input type="text" className="border border-slate-400 rounded-lg h-9 outline-none px-3" id="_id" value={_id} onChange={onChange} />
                </div>
                <div className="flex gap-5 text-lg ">
                    <div className="flex flex-col  w-full">
                        <label htmlFor="" className="text-gray-400">First Name</label>
                        <input type="text" className="border border-slate-400 rounded-lg h-9 outline-none px-3" id="firstName" value={firstName} onChange={onChange} />
                    </div>
                    <div className="flex flex-col w-full ">
                        <label htmlFor="" className="text-gray-400">Last Name</label>
                        <input type="text" className="border border-slate-400 rounded-lg h-9 outline-none px-3" id="lastName"
                            value={lastName} onChange={onChange} />
                    </div>
                </div>
                <div className="flex gap-5 text-lg ">
                    <div className="flex flex-col  w-full">
                        <label htmlFor="" className="text-gray-400">Mobile No.</label>
                        <input type="text" className="border border-slate-400 rounded-lg h-9 outline-none px-3" id="mobileNo"
                            value={mobileNo} onChange={onChange} />
                    </div>
                    <div className="flex flex-col w-full ">
                        <label htmlFor="" className="text-gray-400">Email</label>
                        <input type="text" className="border border-slate-400 rounded-lg h-9 outline-none px-3" id="email"
                            value={email} onChange={onChange} />
                    </div>
                </div>
                <div>
                    <div className="flex flex-col text-lg  w-full ">
                        <label htmlFor="" className="text-gray-400">nickName</label>
                        <input type="text" className="border border-slate-400 rounded-lg h-9 outline-none px-3" id="nickName"
                            value={nickName} onChange={onChange} />
                    </div>
                </div>
                <button className="py-2 px-5 mt-3 rounded-xl bg-yellow-500 font-bold" onClick={updateBtn} >Update</button>
                <button className="py-2 px-5 mt-3 rounded-xl bg-gray-600 font-bold mx-5 text-slate-300" onClick={calcenBtn} >Calcen</button>
            </div>
            <div>
                
            </div>
        </>
    )
}

export default UpdateData;