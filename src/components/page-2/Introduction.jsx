import star from "../../assets/star.svg";
import profile from "../../assets/span-8.svg";
import achive from "../../assets/language.svg";
import promo from "../../assets/img.jpg";

import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitter,
  FaMicrosoft,
} from "react-icons/fa";

const Introduction = () => {
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
    <>
      <div className="px-8 py-4 md:px-10 md:py-6 flex flex-col gap-5 xs:flex bg-gray-50 relative space-y-3 lg:flex-row ">
        <div className="leading-5 pt-2 lg:w-1/2 md:w-full   ">
          <h3 className="font-bold text-2xl md:text-4xl mb-2">
            Introduction to User Experience Design
          </h3>
          <p className="py-2 text-sm md:text-base text-gray-700">
            This course is meticulously crafted to provide you with a
            foundational understanding of the principles, methodologies, and
            tools that drive exceptional user experiences in the digital{" "}
            landscape.
          </p>

          <div className=" py-4  space-y-4">
            <div className="flex flex-wrap items-center space-x-2 text-gray-700 text-sm">
              <span className="text-yellow-500 font-bold">4.6</span>
              <div className="flex items-center">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <img key={i} src={star} alt="star" className="" />
                  ))}
              </div>
              <span>(651651 ratings)</span>
              <span>|</span>
              <span>22 Total Hours</span>
              <span>155 Lectures</span>
              <span>All levels</span>
            </div>

            <div className="flex items-center space-x-2">
              <img
                src={profile}
                alt="name"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="text-sm text-gray-600">
                Created by {""}
                <a href="#" className="text-blue-500 ">
                  Ronal Richards
                </a>
              </span>
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <img src={achive} alt="" className="" />
              <span>English, Spanish, Italian, German</span>
            </div>
          </div>
        </div>

        <div className="shadow lg:right-[5%]    p-4 rounded-lg w-full md:w-1/3  ">
          <div className="rounded overflow-hidden">
            <img src={promo} alt="buy card" className="w-full" />
          </div>

          <div className="flex py-4 items-center gap-5 text-gray-700 text-xl md:text-xl">
            <span className="font-bold">$49.5</span>
            <span className="line-through text-gray-300">$99.5</span>
            <span className="text-green-600 font-bold">50% Off</span>
          </div>
          <a href="#">
            <button className="bg-black text-white text-sm md:text-md py-4 rounded-md w-full mb-4">
              Add To Cart
            </button>
          </a>
          <a href="#">
            <button className=" text-black border border-black text-sm md:text-md py-4 rounded-md w-full mb-4">
              Buy Now
            </button>
          </a>
          <div className="border-t border-gray-400 mt-4">
            <p className="font-semibold text-lg md:text-xl my-2">Share</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {links.map((link) => (
                <a
                  className=" my-2  "
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.Icon
                    color={link.color}
                    size={32}
                    className=" bg-white rounded-full shadow-lg p-1"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
