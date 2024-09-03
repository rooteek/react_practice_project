import React from "react";

class Home extends React.Component {

    render() {
        return (
            <>
                <p>Select your favorite color <span style={{ background: "yellow" }}>{this.props.color}</span></p>
            </>
        )
    }
}

export {Home}