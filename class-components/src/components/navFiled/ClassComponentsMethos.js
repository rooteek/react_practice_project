import React from "react";
class ClassComponents extends React.Component {
    render() {
        return (
            <div className="px-8">
                <h1>Class Components </h1>
                <p>There is three phase of react class Components</p>
                <ol className="list-decimal">
                    <li>Mounting</li>
                    <details>
                        <summary></summary>
                        <p>Mounting has four built-in methods</p>
                        <ul className="list-disc ml-10">
                            <li>constructor()</li>
                            <details>
                                <summary>
                                </summary>
                                <p>the Constructor is alway call before rander methods</p>
                            </details>
                            <li>getDerivedStateFromProps()</li>
                            <li>render()</li>
                            <li>componentDidMount()</li>
                        </ul>

                    </details>
                    <li>Updating</li>
                    <details>
                        <summary></summary>
                        <ul className="list-disc ml-10">
                            <li>getDerivedStateFromProps()</li>
                            <li>shouldComponentUpdate</li>
                            <li>render()</li>
                            <li>getSnapshotBeforeUpdate()</li>
                            <li>componentDidUpdate()</li>
                        </ul>
                    </details>
                    <li>Unmounting</li>
                    <details>
                        <summary></summary>
                        <ul className="list-disc ml-10">
                            <li>componentWillUnmount()</li>
                        </ul>
                    </details>
                </ol>
            </div>
        )
    }
}

export { ClassComponents };