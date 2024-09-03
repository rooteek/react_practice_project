import { forwardRef } from "react"

function UseForwardRef(props, ref) {

    return (
        <>
            <input type="text" className="border-2 mx-3" ref={ref} />
        </>
    )
}

// export {UseForwardRef}
export default forwardRef(UseForwardRef)