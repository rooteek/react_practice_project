import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <nav className='bg-gray-500 h-12 flex justify-center items-center gap-14 text-slate-200 text-xl'>
                    <Link to="/">Add Details</Link>
                    <Link to="/details">Details</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">contact</Link>
            </nav>
        </>
    )
}

export default Navbar;