import Button from "./FormFiled/Button"

function EventHandler() {
    function clickFunction() {
        alert("Click Even");
    }
    function hoverFunc() {
        console.log("Hover");
        alert("Hover")
    }
    function eventHandler(process) {
        alert("Evnet " + process)
    }
    return (
        <div>
            <button className="border border-stone-300 px-3 py-1 rounded-xl bg-blue-600 text-white font-bold" onClick={clickFunction}>Click</button>
            <button className="border border-stone-300 px-3 py-1 rounded-xl bg-blue-600 text-white font-bold" onMouseEnter={() => { eventHandler('Hover') }}>Hover</button>
            <button className="border border-stone-300 px-3 py-1 rounded-xl bg-blue-600 text-white font-bold" onBlur={() => eventHandler('blue')}>blur</button>
            <button className="border border-stone-300 px-3 py-1 rounded-xl bg-blue-600 text-white font-bold" onClick={()=>eventHandler("Click")}>Click</button>

        </div>
    )
}

export { EventHandler }