import { Component } from "react";
import './navbar.css'

class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="h-16 bg-gray-700 text-slate-50 flex justify-center items-center gap-12">
                    <a href="/">Home</a>
                    <a href="/working">Working</a>
                    <a href="/methods">methods</a>
                </nav>
            </>
        )
    }
}

export default Navbar;