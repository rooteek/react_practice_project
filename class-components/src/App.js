import React from "react"
import Navbar from "./components/navbar/navbar"
import { HOC, Counter } from "./components/HOC/HigherOrderComponents";
// import { ClassComponents } from "./components/navFiled/ClassComponentsMethos"
// import { Home } from "./components/navFiled/home"
// import ColorBox from "./components/navFiled/colorBox"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: "red",
      bgColor: "bg-red-700",
      count: 0,
    };
    // console.log("constructor");
    // It call only one time on page reload and changingD in components
  }
  // favColor = () => {
  //   // if (this.state.color === 'red') {
  //   //   this.setState({ color: "blue", bgColor: "bg-blue-500" })
  //   // }
  //   // else {
  //   //   this.setState({ color: "red", bgColor: "bg-red-700" })
  //   // }
  //   this.setState({ color: this.state.color.trim() === "red" ? "blue" : "red " })
  //   this.setState({ bgColor: this.state.color.trim() === "red" ? "bg-blue-500" : "bg-red-500" })
  // }
  // handleClick() {
  //   this.setState((coutn) => {
  //     return { count: coutn + 1 }
  //   });
  // }
  // handleClick() {
  //   this.setState(prevState => ({
  //     count: prevState.count + 1
  //   }));
  // }

  // state = {
  // count: 0,
  // }
  // shouldComponentUpdate(props,state) {
  //   // It execute only when the state is updated
  //   // defaul value is true is we set false then the update not show on page or DOM
  //   // it terminate the render method once excecute;
  //   // console.log("shouldComponentUpdate");
  //   // return false;
  //   return true;
  // }
  // static getDerivedStateFromProps(props, state) {
  //   // It call befor the render method  
  //   // console.log("getDerivedStateFromProps")
  //   // console.log();
  //   return { color: props.fav }
  // }
  // componentDidMount() {
  //   // The method is execute after the render is complate at only one time;
  //   // console.log("component did mount");
  // }
  // componentDidUpdate() {
  //   // This method Excecute after update the state;
  //   console.log("componentDidUpdate");
  //   document.getElementById("couterId").innerHTML =
  //     "The updated favorite is " + this.state.count;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("getSnapshotBeforeUpdate");
  //   // this method access props and state before update in simple work you can check previus value and updated value
  //   // It excecute after render and before update
  //   return document.getElementById("colorId").innerHTML = "befor Update : " + prevState.count;

  // }

  // componentWillUnmount() {
  //   // This method is excecute when the component is remove from the DOM
  //   console.log("componentWillUnmount ")
  // }
  increament = () => {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    // console.log("render")
    // console.log(this.state.count)
    return (
      <>
        <center>
          <Navbar />
          <h1>WELCOME TO CLASS COMPONENTS</h1>
          {/* my favorite color is {this.state.color}
          <button onClick={this.favColor} className={`border-2 ${this.state.bgColor} `}>change color</button> */}
          <p>color : {this.state.color}</p>
          <p>{this.state.count}</p>
          <p id="colorId"></p>
          <p id="couterId"></p>
          <button onClick={this.increament}>Add</button>
        </center >
        <div className="flex">
          <HOC cb={Counter} bgcolor="red"/>
          <HOC cb={Counter} bgcolor="green" txtColor="white"/>
        </div>
        {/* <ClassComponents /> */}
      </>
    )
  }
}


export { App }