// import { useState, createContext } from "react"

import { ParentCom } from "./Hooks/contextHook/ParentCom"

// import { UseState } from "./Hooks/useState"
// import { UseContext } from "./Hooks/UseContext"
import Form from "./Form"
import { UseEffect } from "./Hooks/useEffect"
import { UseMemo } from "./Hooks/UseMemo"
import { UseRef } from "./Hooks/UseRef"
import { EventHandler } from "./components/EventHandler"
import Button from "./components/FormFiled/Button"
import { User } from "./liftingUp/User"
import { UseRefClass } from "./Hooks/UseRefClass"
import UseForwardRef from "./Hooks/useForwardRef"
import { useRef } from "react"
// export const UserContext = createContext();
function App() {


  let inpuRef = useRef(null);

  // const [user, setUser] = useState("Me");
  // useCallback ?
  // useDebugValue
  // useDeferredValue
  // useLayoutEffect
  // useMemo
  // useReducer
  // useRef
  // const name = ['1', 2, 3, 4, '4'];
  function passData(name) {
    alert("hello " + name)
  }
  function changeInput() {
    inpuRef.current.style.color = 'red';
    inpuRef.current.focus()
    inpuRef.current.value=""
  }
  return (
    <div className="px-5">
      <h1 className="text-center text-4xl font-bold">Hooks Practice</h1>
      {/* <UseState /> */}
      {/* <Form /> */}

      {/* <ParentCom /> */}
      {/* <UseEffect /> */}
      {/* <UseMemo /> */}
      {/* <UseRef /> */}
      {/* <UseRefClass /> */}
      {/* <EventHandler /> */}
      {/* <Button massage={"hello"}><i>hello</i></Button> */}
      {/* <User name="" alert={passData}/> */}


      {/* <div>
        <UseForwardRef ref={inpuRef} />
        <button onClick={changeInput}>change dom</button>
      </div> */}

    </div>

  )
}



export default App
