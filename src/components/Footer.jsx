 import media from "../assets/social-media.png"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        <div>
          <div className="flex">
          <img src='/logo.svg' alt="logo"/>
          <h2 className="text-2xl font-bold">Byway</h2>
          </div>

          <p className="mt-4 text-gray-400">
            Empowering learners through accessible and engaging online education. 
            Byway is a leading online learning platform dedicated to providing 
            high-quality, flexible, and affordable educational experiences.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Get Help</h3>
          <ul className="space-y-2">
            <li><a href="/#" className="text-gray-400 ">Contact Us</a></li>
            <li><a href="/#" className="text-gray-400 ">Latest Articles</a></li>
            <li><a href="/#" className="text-gray-400 ">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Programs</h3>
          <ul className="space-y-2">
            <li><a href="/#" className="text-gray-400 ">Art & Design</a></li>
            <li><a href="/#" className="text-gray-400 ">Business</a></li>
            <li><a href="/#" className="text-gray-400 ">IT & Software</a></li>
            <li><a href="/#" className="text-gray-400 ">Languages</a></li>
            <li><a href="/#" className="text-gray-400 ">Programming</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-400">
            Address: 123 Main Street, Anytown, CA 12345
          </p>
          <p className="text-gray-400 mt-2">Tel: +1 (123) 456-7890</p>
          <p className="text-gray-400 mt-2">Mail: <a href="mailto:bywayedu@webkul.in" className="text-blue-500 ">bywayedu@webkul.in</a></p>
          <div>
          <img src={media} alt="medias" className="my-2"/>
            </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
