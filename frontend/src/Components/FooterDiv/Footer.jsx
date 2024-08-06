// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const socialLinks = [
  {
    path: "https://www.instagram.com",
    icon: <AiFillInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.facebook.com",
    icon: <BsFacebook className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.twitter.com",
    icon: <AiOutlineTwitter className="group-hover:text-white w-4 h-5" />,
  },
];

const companyLinks = [
  {
    path: "/about",
    display: "About Us",
  },
  {
    path: "/features",
    display: "Features",
  },
  {
    path: "/news",
    display: "News",
  },
  {
    path: "/faq",
    display: "FAQ",
  },
];

const resourceLinks = [
  {
    path: "/account",
    display: "Account",
  },
  {
    path: "/support-center",
    display: "Support Center",
  },
  {
    path: "/feedback",
    display: "Feedback",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const supportLinks = [
  {
    path: "/events",
    display: "Events",
  },
  {
    path: "/promo",
    display: "Promo",
  },
  {
    path: "/req-demo",
    display: "Req Demo",
  },
  {
    path: "/careers",
    display: "Careers",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="p-[5rem] mb-4 bg-blueColor rounded-[10px] m-auto">
      <div className="container mx-auto px-4">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <div className="logoDiv">
              <h1 className="logo text-[25px] text-white pb-[1.5rem]">
                <strong>Job</strong>Hunt
              </h1>
            </div>
            <p className="text-white pb-[13px] opacity-70 leading-7">
              Copyright {year} developed by Sai Nitin all rights are reserved.
            </p>
            <br />
            <p className="text-white pb-[13px] opacity-70 leading-7">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div>
            <h2 className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
              Company
            </h2>
            <ul className="grid gap-3">
              {companyLinks.map((item, index) => (
                <li
                  key={index}
                  className="text-white opacity-[.7] hover:opacity-[1]"
                >
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
              Resources
            </h2>
            <ul className="grid gap-3">
              {resourceLinks.map((item, index) => (
                <li
                  key={index}
                  className="text-white opacity-[.7] hover:opacity-[1]"
                >
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
              Support
            </h2>
            <ul className="grid gap-3">
              {supportLinks.map((item, index) => (
                <li
                  key={index}
                  className="text-white opacity-[.7] hover:opacity-[1]"
                >
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
              Contact Info
            </h2>
            <div>
              <small className="text-[14px] text-white">
                helloworls@mail.com
              </small>
              <div className="icons flex gap-4 py-[1rem]">
                {socialLinks.map((link, index) => (
                  <Link
                    to={link.path}
                    key={index}
                    className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor"
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
