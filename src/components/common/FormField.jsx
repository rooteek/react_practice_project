import { useState } from "react"

function FormField() {

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        college: "",
        course: "",
        language: [],
        date: ""
    })
    function inputHandler(e) {
        setForm({ ...form, [e.target.id]: e.target.value })
    }
    function handlerCheckboxChange(e) {
        let languageSelected = [...form.language]
        let { language } = form;
        if (e.target.checked) {
            languageSelected.push(e.target.id)
            console.log(languageSelected)
        }
        else {
            languageSelected = languageSelected.filter((lang ) => {
                lang !== e.target.id;
            })
        }
        setForm({
            ...form,
            language: languageSelected
        })
    }

    return (
        <div className="w-[700px] p-4 mx-auto flex flex-col gap-2">
            <div className="flex gap-3">
                <div className="flex flex-col w-full">
                    <label htmlFor="firstName" >First Name</label>
                    <input type="text" id="firstName" className="h-10 rounded-xl border w-full" value={form.firstName} onChange={inputHandler} />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="lastName" >Last Name</label>
                    <input type="text" id="lastName" className="h-10 rounded-xl border w-full" value={form.lastName} onChange={inputHandler} />
                </div>
            </div>
            <div className="flex gap-3">
                <div className="flex flex-col w-full">
                    <label htmlFor="college" >College Name</label>
                    <input type="text" id="college" className="h-10 rounded-xl border w-full" value={form.college} onChange={inputHandler} />
                </div>
            </div>
            <div className="flex gap-3">
                <div className="flex flex-col w-full">
                    <select name="" id="course" className="h-10 rounded-xl border w-full" value={form.course} onChange={inputHandler} >
                        <option value="">Select Course</option>
                        <option value="BCA">BCA</option>
                        <option value="B.sc">B.sc</option>
                        <option value="B.Com">B.Com</option>
                        <option value="BBA">BBA</option>
                    </select>
                </div>
            </div>
            <div className="flex gap-3">
                <div className="flex flex-col w-full">
                    <label htmlFor="" >Language</label>
                    <div className="flex gap-2">
                        <div className="flex items-center gap-1">
                            <label htmlFor="java">Java</label>
                            <input type="checkbox" id="java" value="java" checked={form.language.includes("java")} onChange={handlerCheckboxChange} />
                        </div>
                        <div className="flex items-center gap-1">
                            <label htmlFor="c++">C++</label>
                            <input type="checkbox" id="c++" value="c++" checked={form.language.includes("c++")} onChange={handlerCheckboxChange} />
                        </div>
                        <div className="flex items-center gap-1">
                            <label htmlFor="js">JS</label>
                            <input type="checkbox" id="js" value="js" checked={form.language.includes("js")} onChange={handlerCheckboxChange} />
                        </div>
                        <div className="flex items-center gap-1">
                            <label htmlFor="python">Python</label>
                            <input type="checkbox" id="python" value="python" checked={form.language.includes("python")} onChange={handlerCheckboxChange} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="date" >DOB</label>
                    <input type="date" id="date" className="h-10 rounded-xl border w-full" value={form.date} onChange={inputHandler} />
                </div>
            </div>
            <div className="p-3 w-28 flex justify-center items-center rounded-xl bg-blue-500 text-white font-bold">
                <button>Submit</button>
            </div>
            {console.log(form)}
        </div>
    )
}

export default FormField