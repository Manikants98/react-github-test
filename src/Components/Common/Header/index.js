import { Avatar } from '@mui/material'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex justify-between w-full h-[8vh] p-3 text-white bg-black">
      <div className="flex items-center gap-2">
        <Link to="/" className="px-4 py-2 text-xl font-extrabold">
          Brand
        </Link>
        <Link to="/" className="p-2">
          Home
        </Link>
        <Link to="/about-us" className="p-2">
          About Us
        </Link>
        <Link to="/contact-us" className="p-2">
          Contact Us
        </Link>
      </div>
      <Avatar alt="M" src="M" />
    </div>
  )
}

export default Header
