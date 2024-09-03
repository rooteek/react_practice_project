import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PerticulerUser from "./PerticulerUser";

function Table() {
    let [std, setStd] = useState([])

    useEffect(() => {
        // console.log("effe")
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                return response.json();
            }).then((data) => {
                setStd(data);
            })
    }, [])
    return (
        <>
            <table className="">
                <thead className="">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody className="">
                    {
                        std.map((item, i) => {
                            if (i < 10) {
                                return (
                                    <tr key={item.id} >
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.address.city}</td>
                                        <td>
                                            <Link to={"/details/" + item.id + "/" + item.name}>
                                                <button className="border py-1 px-3 rounded-lg">Details</button>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            }
                        })
                    }
                </tbody>
            </table >

            {/* <Route path="/details/:id">
                <PerticulerUser />
            </Route> */}
            <Route path="/details/:id/:name">
                <PerticulerUser />
            </Route>
        </>
    )
}
export default Table;