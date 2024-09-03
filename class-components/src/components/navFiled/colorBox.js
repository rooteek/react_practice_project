import React from "react";

class ColorBox extends React.Component {
    render() {
        // let { bgColor } = this.props;
        return (
            <>
                <div className="mainDiv flex">
                    <div className={`w-5 h-5 border-2 ml-2 bg-red-500`} onClick="click" ></div >
                    <div className={`w-5 h-5 border-2 ml-2 bg-yellow-500`}  ></div >
                    <div className={`w-5 h-5 border-2 ml-2 bg-green-500 `}  ></div >
                    <div className={`w-5 h-5 border-2 ml-2 bg-blue-500`}  ></div >
                </div>
            </>
        )
    }
}

export default ColorBox;