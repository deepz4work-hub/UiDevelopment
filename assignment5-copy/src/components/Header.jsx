
import { Link, NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'

export default function Header(){
  return (
    <header className="bg-gray-900 text-white">
      <div className="flex items-center justify-between px-6 py-4 container-custom">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="text-2xl font-bold text-yellow-400">MyShop</div>
        </Link>

        {/* Search bar */}
        <SearchBar />

        {/* Right section */}
        <nav className="flex gap-6 text-sm items-center">
          <NavLink to="/signin" className="hover:text-yellow-400">Hello, Sign in</NavLink>
          <NavLink to="/orders" className="hover:text-yellow-400">Returns & Orders</NavLink>
          <NavLink to="/cart" className="hover:text-yellow-400 flex items-center">
            <span className="mr-2">Cart</span>
            <span className="bg-yellow-400 text-black font-bold text-xs px-2 py-0.5 rounded-full">3</span>
          </NavLink>
        </nav>
      </div>
      {/* secondary nav */}
      <div className="bg-gray-800 text-gray-200 text-sm">
        <div className="px-6 py-2 container-custom flex gap-6">
          <a className="hover:text-white" href="#">All</a>
          <a className="hover:text-white" href="#">Today's Deals</a>
          <a className="hover:text-white" href="#">Customer Service</a>
          <a className="hover:text-white" href="#">Gift Cards</a>
        </div>
      </div>
    </header>
  )
}
