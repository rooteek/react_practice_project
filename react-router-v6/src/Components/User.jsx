import { Link, useParams } from "react-router-dom";

function User() {
    // const parames = useParams();


    let obj = [
        { name: "rut", age: 20, isLogin: false },
        { name: "nir", age: 22, isLogin: false },
        { name: "raj", age: 23, isLogin: true },
        { name: "pan", age: 19, isLogin: true },
    ]

    function checkName(id, name) {
        alert(id)
        alert(name)
    }
    return (
        <>
            <h1>
                {obj.map((item, index) => {
                    return <div className="flex border gap-2 justify-center items-center cursor-pointer" key={index}>
                        <p>{index + 1}</p>
                        <p>{item.name}</p>
                        <p>{item.age}</p>
                        <p>{(item.isLogin).toString()}</p>
                        <p><button className="border py-2 px-4 rounded-xl" onClick={() => checkName(index + 1, item.name)}>check name</button></p>
                    </div>
                })}
            </h1 >
            <h1 className="text-center text-2xl font-bold">Details</h1>
        </>
    )
}
export default User;