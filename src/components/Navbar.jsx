import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  const currentPath= location.pathname;
  const isStats = currentPath === '/dashboard' || currentPath === '/statistics'
  return (

        <div data-theme="aqua" 
        className={`navbar bg-base-100 text-white ${isStats ? 'bg-secondary text-white' : ''}`}>
     
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 py-2 shadow">
        <div className="tabs tabs-lifted py-2">
        <li><NavLink
        className={({isActive})=> `tab mb-2  ${isActive?' text-yellow-300':'hover:text-yellow-300'}`}
        to='/'>Home</NavLink></li>
        <li><NavLink
        className={({isActive})=> `tab mb-2  ${isActive?'text-yellow-300':'hover:text-yellow-300'}`}
        to='/statistics'>Statistics</NavLink></li>
  
       <li>
       <NavLink
       className={({isActive})=> `tab  ${isActive?'text-yellow-300':'hover:text-yellow-300'}`}
       to='/dashboard'>Dashboard</NavLink>
      </li>    
        </div>
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost text-xl">Gadget-Heaven</Link>
  </div>
  <div className="navbar-center hidden lg:flex tabs tabs-lifted py-2 ">
    <ul className="menu menu-horizontal px-1 space-x-4 ">
    <li><NavLink
        className={({isActive})=> `tab  py-2 font-bold  ${isActive?'text-yellow-300':'hover:text-yellow-300'}`}
        to='/'>Home</NavLink></li>
        <li><NavLink
        className={({isActive})=> `tab   font-bold ${isActive?'text-yellow-300':'hover:text-yellow-300'}`}
        to='/statistics'>Statistics</NavLink></li>
       {/* <li> <Link to='/dashboard'>Dashboard</Link></li>    */}
       <li>
       <NavLink
       className={({isActive})=> `tab  font-bold ${isActive?'text-yellow-300':'hover:text-yellow-300'}`}
       to='/dashboard'>Dashboard</NavLink>
      </li>    

    </ul>
  </div>
  <div className="navbar-end">
    <div className="flex gap-4">
    <Link to='/dashboard'> <MdOutlineShoppingCart /></Link>
    <Link to='/dashboard'> <CiHeart /></Link>
    </div>
  </div>
</div>
    );
};

export default Navbar;