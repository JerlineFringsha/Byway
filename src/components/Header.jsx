import cart from "../assets/cart.svg";
import heartIcon from "../assets/wishlist.svg";
import bellIcon from "../assets/bell.svg";

import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isCoursePage = location.pathname.startsWith("/course");
  return (
    <>
      <div className=" p-4 border-b px-12">
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
                <a href="#" className="block sm:inline">
                  <button className="w-full sm:w-auto px-4 py-2 border text-sm sm:text-base">
                    Log In
                  </button>
                </a>
                <a href="#" className="block sm:inline">
                  <button className="w-full sm:w-auto px-4 py-2 border bg-gray-900 text-white text-sm sm:text-base">
                    Sign Up
                  </button>
                </a>
              </>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
