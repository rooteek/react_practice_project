import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import UpdateData from './UpdateData';

function ShowData() {
    const [persons, setPersons] = useState([])
    const [shouldUpdate, setShouldUpdate] = useState(false);
    const [page, setPage] = useState(1);
    const [userValue, setUserValue] = useState({
        _id: "",
        firstName: "",
        lastName: "",
        mobileNo: "",
        email: "",
        nickName: "",
    })

    const [currentPage, setCurretPage] = useState(1);

    // useEffect(() => {
    //     axios.get("https://jsonplaceholder.typicode.com/users")
    //         .then((res) => {
    //             // console.log(res.data)
    //             setPersons(res.data);
    //         })
    // }, [])
    // console.log(person)

    function fetchDetails() {
        // fetch("http://localhost:3000/Users")
        //     .then((res) => {
        //         return res.json()
        //     }).then((data) => {
        //         setPersons(data)
        //     })
        axios.get("https://service.apikeeda.com/api/v1/contact-book", {
            headers: {
                "x-apikeeda-key": "u1724739183696ecd220963121av"
            }
        }).then((respon) => {
            // console.log(respon.data.data);
            setPersons(respon.data.data)
            return respon.data;
        }).catch((e) => {
            console.log("Err", e)
        })

    }
    useEffect(() => {
        fetchDetails()
    }, [])

    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((res)=>{
    //          res.json().then((data)=>{
    //             // return data
    //             setPersons(data)
    //         })
    //     })
    // },[])

    function deletePerson(id) {
        // fetch(`https://jsonplaceholder.typicode.com/users${id}`, {
        //     method: 'DELETE'
        // }).then((resp) => {
        //     // console.log(resp)
        //     return resp
        // }).then((data) => {
        //     console.log(data)
        //     fetchDetails()
        // })
        // console.log(id)
        axios.delete(`https://service.apikeeda.com/api/v1/contact-book/${id}`, {
            headers: {
                "x-apikeeda-key": "u1724739183696ecd220963121av"
            }
        }).then((resp) => {
            console.log(resp)
            fetchDetails()
        }).catch((e) => {
            console.log("the Error is ", e)
        })
    }


    function updatePerson(_id, firstName, lastName, mobileNo, email, nickName) {
        setShouldUpdate(true)
        // console.log(id)
        // console.log(firstName)
        setUserValue({
            _id,
            firstName,
            lastName,
            mobileNo,
            email,
            nickName,
        })
    }

    function setUpdateValue(e) {
        // console.log("object")
        setUserValue({ ...userValue, [e.target.id]: e.target.value })
        // console.log(userValue.firstName, userValue.lastName, userValue.email, userValue.mobileNo);
    }

    function updateInputBox(id) {
        // console.log(id)
        // console.log(userValue.firstName, userValue.lastName, userValue.email, userValue.mobileNo);
        axios.patch(`https://service.apikeeda.com/api/v1/contact-book/${id}`, userValue, {
            headers: {
                "x-apikeeda-key": "j1724751761653vcm498272548no"
            }
        }).then((resp) => {
            console.log(resp)
            fetchDetails()
            setShouldUpdate(false);
        }).catch((e) => {
            console.log("Ther Error is ----> ", e)
        })
    }
    function calcelFun() {
        setShouldUpdate(false)
    }
    console.log(persons.length)
    console.log(page)
    return (
        <>
            <h1 className='text-3xl font-bold text-center'>Show All Details</h1>
            <div className='min-h-[260px]  border border-black overflow-y-auto'>
                <table className='w-full border border-collapse '>
                    <thead>
                        <tr>
                            <th className='border bg-slate-700 text-slate-200 font-medium h-10'>Sr No.</th>
                            <th className='border bg-slate-700 text-slate-200 font-medium h-10'>FirstName</th>
                            <th className='border bg-slate-700 text-slate-200 font-medium h-10'>LastName</th>
                            <th className='border bg-slate-700 text-slate-200 font-medium h-10'>Mobile</th>
                            <th className='border bg-slate-700 text-slate-200 font-medium h-10'>Email</th>
                            <th className='border bg-slate-700 text-slate-200 font-medium h-10 w-28' colSpan={2}>Operation</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {persons.slice(page * 5 - 5, page * 5).map((item, index) => {
                            return (
                                <tr key={item._id} className='hover:bg-slate-400 cursor-pointer hover:text-slate-200'>
                                    <td className='border text-center'>{index + 1}</td>
                                    <td className='border text-center'>{item.firstName}</td>
                                    <td className='border text-center'>{item.lastName}</td>
                                    <td className='border text-center'>{item.mobileNo}</td>
                                    <td className='border text-center'>{item.email}</td>
                                    <td className='border text-center w-28'>
                                        <button className='py-2 px-4 rounded-xl font-medium bg-red-600 text-slate-200 outline-none' onClick={() => { deletePerson(item._id) }}>Delete</button>
                                    </td>
                                    <td className='border text-center w-28'>
                                        <button className='py-2 px-4 rounded-xl font-medium bg-yellow-500 text-slate-900 outline-none' onClick={() => { updatePerson(item._id, item.firstName, item.lastName, item.mobileNo, item.email, item.nickName) }}>Update</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className='mt-5'>
                <div className='flex gap-2 justify-center'>
                    <div title='Previus' className={`h-7 w-7 flex items-center justify-center rounded-full bg-blue-600 text-slate-200 font-bold cursor-pointer ${page <= 1 ? "button_disable" : ""}`} onClick={() => { setPage(page - 1) }} >
                        ←
                    </div>

                    {
                        
                        persons.length > 0 && <div className='pagination'>
                            {[...Array(Math.ceil
                            (persons.length / 5))].map((e,i) => {
                                return <span className='borderml-2 py-1 px-2 cursor-pointer hover:bg-slate-400' onClick={()=>{setPage(i+1)}}>{i+1}</span>
                            })}                         
                        </div>
                    }
                    <div title='next' className={`h-7 w-7 flex items-center justify-center rounded-full bg-blue-600 text-slate-200 font-bold cursor-pointer ${page > persons.length / 5 ? "button_disable" : ""}`} onClick={() => { setPage(page + 1) }}>  
                         →
                    </div>
                </div>
            </div>
            <dir>
                {
                    shouldUpdate ? <UpdateData _id={userValue._id} firstName={userValue.firstName} lastName={userValue.lastName} mobileNo={userValue.mobileNo} email={userValue.email} nickName={userValue.nickName} onChange={setUpdateValue} updateBtn={() => { updateInputBox(userValue._id) }} calcenBtn={calcelFun} /> : ""
                }
            </dir>

        </>
    )
}

export default ShowData;