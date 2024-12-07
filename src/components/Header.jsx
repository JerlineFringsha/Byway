import cart from "../assets/cart.svg";
import heartIcon from "../assets/wishlist.svg";
import bellIcon from "../assets/bell.svg";

import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isCoursePage = location.pathname.startsWith("/course");
  return (
    <>
      <div className="bg-white p-4 shadow-lg">
        <nav className="flex items-center justify-between">
          <div className="flex space-x-1 cursor-pointer">
            <Link to="/" className="flex space-x-1 cursor-pointer">
              <img src="/logo.svg" alt="logo" className="w-8 h-8" />
              <h3 className="text-gray-600 text-xl font-semibold">Byway</h3>
            </Link>
          </div>

          <div className="flex items-center sm:space-x-4 space-x-2">
            {isCoursePage ? (
              <>
                <img src={heartIcon} alt="Favorites" />
                <img src={cart} alt="Cart" />
                <img src={bellIcon} alt="Notifications" />
                {/* Profile Icon */}
                {/* <img src={profileIcon} alt="Profile" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full" /> */}
              </>
            ) : (
              <>
                <img src={cart} alt="Cart" className="w-6 h-6 sm:w-8 sm:h-8" />
                <a href="#">
                  <button className="px-4 py-2 border">Log In</button>
                </a>
                <a href="#">
                  <button className="px-4 py-2 border bg-gray-900 text-white">
                    Sign Up
                  </button>
                </a>
              </>
            )}
          </div>
        </nav>
      </div>
      {/* <div className="bg-white-800 p-4  shadow-lg">
        <nav className="flex items-center justify-between">
          <div className="flex space-x-1">
            <img src="/logo.svg" alt="logo" className=""></img>
            <h3 className="text-gray-600 text-xl font-semibold"> Byway</h3>
          </div>

          <div className="flex sm:flex-row sm:space-x-2 space-y-4 sm:space-y-0 items-center">
            <img src={cart} alt="cart" className="w-6 h-6 sm:w-8 sm:h-8" />
            <a href="#">
              <button className=" px-4 py-2  border">
                Log In
              </button>
            </a>   
            <a href="#">       
            <button className="px-4 py-2 border bg-gray-900 text-white">Sign Up</button>
            </a> 
          </div>
        </nav>
      </div> */}
    </>
  );
};

export default Header;
