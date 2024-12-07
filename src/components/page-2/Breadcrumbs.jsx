const Breadcrumbs = () => {
    return (
      <>
      <nav className="text-sm text-gray-600 px-8 py-4 sm:px-4 sm:py-2">
        <ul className="flex flex-wrap items-center space-x-2">
          {/* Home Link */}
          <li>
            <a href="/" className="hover:underline font-medium">
              Home
            </a>
          </li>
          <li>
            <span className="text-gray-400">›</span>
          </li>
          {/* Categories Link */}
          <li>
            <a href="/categories" className="hover:underline font-medium">
              Categories
            </a>
          </li>
          <li>
            <span className="text-gray-400 ">›</span>
          </li>
          {/* Current Page */}
          <li>
            <span className="text-blue-500 font-medium">
              Introduction to User Experience Design
            </span>
          </li>
        </ul>
      </nav>
      </>
    );
  };
  
  export default Breadcrumbs;
  