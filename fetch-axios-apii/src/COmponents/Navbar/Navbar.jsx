import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <nav className='bg-gray-500 flex justify-center items-center text-slate-300 font-bold gap-48 h-10'>
                <Link to="/home">Home</Link>
                <Link to="/insert">Add Details</Link>
                <Link to="/showdata">Details</Link>
                <Link to="/about">About</Link>
            </nav>
        </>
    )
}
export default Navbar