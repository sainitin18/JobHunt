import { useEffect, useRef } from "react";
import userImg from "../../Assets/images/avatar-icon.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

const navLinks = [
  {
    path: "/home",
    display: "Home",
    key: 1,
  },
  {
    path: "/job",
    display: "Jobs",
    key: 2,
  },
  {
    path: "/post",
    display: "Post",
    key: 3,
  },
  {
    path: "/contact",
    display: "Contact",
    key: 4,
  },
];

const NavBar = ({ isAuthenticated, onSignOut }) => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);

  const handleStickyHeader = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("sticky__header");
    } else {
      headerRef.current.classList.remove("sticky__header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyHeader);
    return () => window.removeEventListener("scroll", handleStickyHeader);
  }, []);

  // Modified toggleMenu function to handle overlay
  const toggleMenu = () => {
    menuRef.current.classList.toggle("show__menu");
    overlayRef.current.classList.toggle("show__menu");
  };

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container flex items-center justify-between">
        <h1 className="logo text-[25px] text-blueColor">
          <strong>Job</strong> Hunt
        </h1>
        {/* Overlay */}
        <div
          ref={overlayRef}
          className="overlay md:hidden"
          onClick={toggleMenu}
        ></div>
        {/* Navigation */}
        <div className="navigation md:flex hidden" ref={menuRef}>
          <ul className="menu flex md:items-center gap-[2.7rem]">
            {navLinks.map((link) => (
              <li key={link.key} onClick={toggleMenu}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primaryColor text-[16px] leading-7 font-[600]"
                      : "text-textColor text-[16px] leading-7 font-[500]"
                  }
                >
                  {link.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        {/* User and Login/Logout */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Link to="/">
              <figure className="w-[35px] h-[35px] rounded-full">
                <img src={userImg} className="w-full rounded-full" alt="User" />
              </figure>
            </Link>
          </div>

          {isAuthenticated ? (
            <button
              onClick={onSignOut}
              className="bg-blueColor py-2 px-6 text-textColor font-[600] h-[44px] flex items-center justify-center rounded-[50px]"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-blueColor py-2 px-6 text-textColor font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                Login
              </button>
            </Link>
          )}
          {/* Menu Icon */}
          <span className="md:hidden" onClick={toggleMenu}>
            <BiMenu className="w-6 h-6 cursor-pointer" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

// import { useEffect, useRef } from "react";
// import userImg from "../../Assets/images/avatar-icon.png";
// import { NavLink, Link } from "react-router-dom";
// import { BiMenu } from "react-icons/bi";

// const navLinks = [
//   {
//     path: "/home",
//     display: "Home",
//     key: 1,
//   },
//   {
//     path: "/job",
//     display: "Jobs",
//     key: 2,
//   },
//   {
//     path: "/post",
//     display: "Post",
//     key: 3,
//   },
//   {
//     path: "/contact",
//     display: "Contact",
//     key: 4,
//   },
// ];

// const NavBar = () => {
//   const headerRef = useRef(null);
//   const menuRef = useRef(null);
//   const overlayRef = useRef(null);

//   const handleStickyHeader = () => {
//     if (
//       document.body.scrollTop > 80 ||
//       document.documentElement.scrollTop > 80
//     ) {
//       headerRef.current.classList.add("sticky__header");
//     } else {
//       headerRef.current.classList.remove("sticky__header");
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleStickyHeader);
//     return () => window.removeEventListener("scroll", handleStickyHeader);
//   }, []);

//   // Modified toggleMenu function to handle overlay
//   const toggleMenu = () => {
//     menuRef.current.classList.toggle("show__menu");
//     overlayRef.current.classList.toggle("show__menu");
//   };

//   return (
//     <header className="header flex items-center" ref={headerRef}>
//       <div className="container flex items-center justify-between">
//         <h1 className="logo text-[25px] text-blueColor">
//           <strong>Job</strong> Hunt
//         </h1>
//         {/* Overlay */}
//         <div
//           ref={overlayRef}
//           className="overlay md:hidden"
//           onClick={toggleMenu}
//         ></div>{" "}
//         {/* Navigation */}
//         <div className="navigation md:flex hidden" ref={menuRef}>
//           <ul className="menu flex md:items-center gap-[2.7rem]">
//             {navLinks.map((link) => (
//               <li key={link.key} onClick={toggleMenu}>
//                 <NavLink
//                   to={link.path}
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-primaryColor text-[16px] leading-7 font-[600]"
//                       : "text-textColor text-[16px] leading-7 font-[500]"
//                   }
//                 >
//                   {link.display}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </div>
//         {/* User and Login */}
//         <div className="flex items-center gap-4">
//           <div className="hidden md:block">
//             <Link to="/">
//               <figure className="w-[35px] h-[35px] rounded-full">
//                 <img src={userImg} className="w-full rounded-full" alt="User" />
//               </figure>
//             </Link>
//           </div>

//           <Link to="/login">
//             <button className="bg-blueColor py-2 px-6 text-textColor font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
//               Login
//             </button>
//           </Link>
//           {/* Menu Icon */}
//           <span className="md:hidden" onClick={toggleMenu}>
//             <BiMenu className="w-6 h-6 cursor-pointer" />
//           </span>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default NavBar;

// // import { useEffect, useRef } from "react";
// // import userImg from "../../Assets/images/avatar-icon.png";
// // import { NavLink, Link } from "react-router-dom";
// // import { BiMenu } from "react-icons/bi";

// // const navLinks = [
// //   {
// //     path: "/home",
// //     display: "Home",
// //     key: 1,
// //   },
// //   {
// //     path: "/job",
// //     display: "Jobs",
// //     key: 2,
// //   },
// //   {
// //     path: "/post",
// //     display: "Post",
// //     key: 3,
// //   },
// //   {
// //     path: "/job",
// //     display: "Contact",
// //     key: 4,
// //   },
// // ];

// // const NavBar = () => {
// //   const headerRef = useRef(null);
// //   const menuRef = useRef(null);

// //   const handleStickyHeader = () => {
// //     if (
// //       document.body.scrollTop > 80 ||
// //       document.documentElement.scrollTop > 80
// //     ) {
// //       headerRef.current.classList.add("sticky__header");
// //     } else {
// //       headerRef.current.classList.remove("sticky__header");
// //     }
// //   };

// //   useEffect(() => {
// //     window.addEventListener("scroll", handleStickyHeader);
// //     return () => window.removeEventListener("scroll", handleStickyHeader);
// //   }, []);

// //   const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

// //   return (
// //     <header className="header flex items-center" ref={headerRef}>
// //       <div className="container">
// //         <div className="flex items-center justify-between">
// //           <div>
// //             <h1 className="logo text-[25px] text-blueColor">
// //               <strong>Job</strong> Hunt
// //             </h1>
// //           </div>

// //           <div className="navigation md:hidden" ref={menuRef}>
// //             <ul className="menu flex items-center gap-[2.7rem]">
// //               {navLinks.map((link) => (
// //                 <li key={link.key} onClick={toggleMenu}>
// //                   <NavLink
// //                     to={link.path}
// //                     className={({ isActive }) =>
// //                       isActive
// //                         ? "text-primaryColor text-[16px] leading-7 font-[600]"
// //                         : "text-textColor text-[16px] leading-7 font-[500]"
// //                     }
// //                   >
// //                     {link.display}
// //                   </NavLink>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* nav right */}
// //           <div className="flex items-center gap-4">
// //             <div className="hidden md:block">
// //               <Link to="/">
// //                 <figure className="w-[35px] h-[35px] rounded-full">
// //                   <img
// //                     src={userImg}
// //                     className="w-full rounded-full"
// //                     alt="User"
// //                   />
// //                 </figure>
// //               </Link>
// //             </div>

// //             <Link to="/login">
// //               <button className="bg-blueColor py-2 px-6 text-textColor font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
// //                 Login
// //               </button>
// //             </Link>

// //             <span className="md:hidden" onClick={toggleMenu}>
// //               <BiMenu className="w-6 h-6 cursor-pointer" />
// //             </span>
// //           </div>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // };

// // export default NavBar;
