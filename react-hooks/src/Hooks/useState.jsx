import { useState } from "react"

function UseState() {
    // let [count, setCount] = useState(0);
    // let [greet, setGreet] = useState("hello");
    let [greeds, setGreets] = useState({
        name: "Hello",
        count: 0,
    })
    // let nextGreet = 0;
    function checkGreet() {
        let arr = ['Good Morning', 'Good Afternoon', 'Good Evening', 'Good Nigth', 'Have gread day!'];
        // console.log(greeds.count)
        if (greeds.count < arr.length) {
            // setGreets({ name: arr[greeds.count] });
            // console.log(greeds.name)
            // setGreets({ count: greeds.count + 1 });
            setGreets({
                name: arr[greeds.count],
                count: greeds.count + 1
            });
            // console.log(greeds.name)
        }
        else {
            setGreets({
                name: "Hello",
                count: 0,
            })
        }
    }
    // function checkGreet() {
    //     let arr = ['Good Morning', 'Good Afternoon', 'Good Evening', 'Good Night', 'Have a great day!'];

    //     // Update count first, then update name based on the new count
    //     setGreets(prevState => {
    //         const newCount = prevState.count + 1;
    //         return {
    //             count: newCount,
    //             name: arr[newCount % arr.length] // Use modulo to wrap around if count exceeds array length
    //         };
    //     });
    // }



    return (
        <>
            <h1>{greeds.count}</h1>
            <button className="border rounded-md px-3" onClick={() => { setGreets({ count: greeds.count + 1 }) }}>Increate</button>

            <div className="flex flex-col border-black text-start mt-4">
                <p className="m-2">{greeds.name}</p>
                <button className="w-44 border border-black rounded-md" onClick={checkGreet}>Change Greet</button>
            </div>
        </>
    )
}

export { UseState }