// import React from 'react'
import { useState } from "react";
import { useLoginMutation } from "../redux/services/users";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [login, { isLoading, error }] = useLoginMutation();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData).unwrap();
      console.log(response);
      localStorage.setItem("token", response.token);
      console.log(response.token);
      onLogin();
      navigate("/");
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <section className="px-4 mb-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-textColor text-[22px] leading-9 font-bold mb-[30px]">
          Hello! <span className="text-blueColor">Welcome</span> Back
        </h3>

        <form onSubmit={handleSubmit} className="py-4 md:py-0">
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
              focus:border-b-blueColor text-[15px] leading-7 text-textColor placeholder:#4E545F rounded-md
              cursor-pointer"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
              focus:border-b-blueColor text-[15px] leading-7 text-textColor placeholder:#4E545F rounded-md
              cursor-pointer"
              required
            />
          </div>

          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-blueColor text-white text-[15px] leading-[30px] rounded-lg px-4 py-2"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </div>
          {error && (
            <p className="mt-5 text-red-500 text-center">
              {error.message || "Login failed. Please try again."}
            </p>
          )}
          <p className="mt-5 text-textColor text-center">
            Dont have an account?{" "}
            <Link to="/register" className="text-blueColor font-medium ml-1">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;

// // import React from 'react'

// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <section className="px-4 mb-5 lg:px-0">
//       <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
//         <h3 className="text-textColor text-[22px] leading-9 font-bold mb-[30px]">
//           Hello! <span className="text-blueColor">Welcome</span> Back
//         </h3>

//         <form className="py-4 md:py-0">
//           <div className="mb-5">
//             <input
//               type="email"
//               placeholder="Enter Your Email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
//               focus:border-b-blueColor text-[15px] leading-7 text-textColor placeholder:#4E545F rounded-md
//               cursor-pointer"
//               required
//             />
//           </div>
//           <div className="mb-5">
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
//               focus:border-b-blueColor text-[15px] leading-7 text-textColor placeholder:#4E545F rounded-md
//               cursor-pointer"
//               required
//             />
//           </div>

//           <div className="mt-7">
//             <button
//               type="submit"
//               className="w-full bg-blueColor text-white text-[15px] leading-[30px] rounded-lg px-4 py-2"
//             >
//               Login
//             </button>
//           </div>
//           <p className="mt-5 text-textColor text-center">
//             Dont have an account?{" "}
//             <Link to="/register" className="text-blueColor font-medium ml-1">
//               Register
//             </Link>
//           </p>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Login;
