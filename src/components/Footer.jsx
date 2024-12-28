import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitter,
  FaMicrosoft,
} from "react-icons/fa";

const Footer = () => {
  const links = [
    {
      id: 1,
      href: "https://facebook.com",
      Icon: FaFacebook,
      color: "#4267B2",
      alt: "Facebook",
    },
    {
      id: 2,
      href: "https://github.com",
      Icon: FaGithub,
      color: "#333",
      alt: "GitHub",
    },
    {
      id: 3,
      href: "https://google.com",
      Icon: FaGoogle,
      color: "#DB4437",
      alt: "Google",
    },
    {
      id: 4,
      href: "https://x.com",
      Icon: FaTwitter,
      color: "#1DA1F2",
      alt: "X",
    },
    {
      id: 5,
      href: "https://microsoft.com",
      Icon: FaMicrosoft,
      color: "#F25022",
      alt: "Microsoft",
    },
  ];
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        <div>
          <div className="flex">
            <img src="/logo.svg" alt="logo" />
            <h2 className="text-2xl font-bold">Byway</h2>
          </div>

          <p className="mt-4 text-gray-400">
            Empowering learners through accessible and engaging online
            education. Byway is a leading online learning platform dedicated to
            providing high-quality, flexible, and affordable educational
            experiences.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Get Help</h3>
          <ul className="space-y-2">
            <li>
              <a href="/#" className="text-gray-400 ">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/#" className="text-gray-400 ">
                Latest Articles
              </a>
            </li>
            <li>
              <a href="/#" className="text-gray-400 ">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Programs</h3>
          <ul className="space-y-2">
            <li>
              <a href="/#" className="text-gray-400 ">
                Art & Design
              </a>
            </li>
            <li>
              <a href="/#" className="text-gray-400 ">
                Business
              </a>
            </li>
            <li>
              <a href="/#" className="text-gray-400 ">
                IT & Software
              </a>
            </li>
            <li>
              <a href="/#" className="text-gray-400 ">
                Languages
              </a>
            </li>
            <li>
              <a href="/#" className="text-gray-400 ">
                Programming
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-400">
            Address: 123 Main Street, Anytown, CA 12345
          </p>
          <p className="text-gray-400 mt-2">Tel: +1 (123) 456-7890</p>
          <p className="text-gray-400 mt-2">
            Mail:{" "}
            <a href="mailto:bywayedu@webkul.in" className="text-blue-500 ">
              bywayedu@webkul.in
            </a>
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",           
            }}
          >
            {links.map((link) => (
              <a
                className=" my-4  "
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.Icon
                  color={link.color}
                  size={32}
                  className=" bg-white rounded-full p-1"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
