import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../redux/services/users";
import signupImg from "../Assets/images/signup.gif";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: null,
  });
  const [register, { isLoading, error }] = useRegisterMutation();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileInputChange = (event) => {
    setFormData({
      ...formData,
      photo: event.target.files[0],
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("name", formData.name);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("password", formData.password);
    // if (formData.photo) {
    //   formDataToSubmit.append("photo", formData.photo);
    // }

    try {
      await register(formDataToSubmit).unwrap();
      navigate("/login");
    } catch (err) {
      console.error("Signup failed:", err);
    }
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1150px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img
                src={signupImg}
                alt="Signup"
                className="w-80% rounded-l-lg m-4"
              />
            </figure>
          </div>

          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-primaryColor">account</span>
            </h3>
            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-2 border-b border-solid border-[#00061161] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-gray-500 cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-2 border-b border-solid border-[#00061161] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-gray-500 cursor-pointer"
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
                  className="w-full pr-4 py-2 border-b border-solid border-[#00061161] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-gray-500 cursor-pointer"
                  required
                />
              </div>
              <div className="relative w-[130px] h-[50px] mb-5">
                <input
                  type="file"
                  name="photo"
                  id="customfile"
                  accept=".jpg, .png"
                  onChange={handleFileInputChange}
                  className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                />
                <label
                  htmlFor="customfile"
                  className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[13px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                >
                  UploadResume
                </label>
              </div>

              <div className="mt-7">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white text-[18px] leading-[30px] rounded-lg px-4 py-2"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing up..." : "Signup"}
                </button>
              </div>
              {error && (
                <p className="mt-5 text-red-500 text-center">
                  {error.message || "Signup failed. Please try again."}
                </p>
              )}
              <p className="mt-5 text-textColor text-center">
                Already have an account?
                <Link
                  to="/login"
                  className="text-primaryColor font-medium ml-1"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import signupImg from "../Assets/images/signup.gif";

// const Signup = () => {

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     photo: null,
//   });

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleFileInputChange = async (event) => {
//     const file = event.target.files[0];
//     console.log(file);
//   };

//   const submitHandler = async (event) => [event.preventDefault()];

//   return (
//     <section className="px-5 xl:px-0">
//       <div className="max-w-[1150px] mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2">
//           <div className="hidden lg:block bg-primaryColor rounded-l-lg">
//             <figure className="rounded-l-lg">
//               <img
//                 src={signupImg}
//                 alt="Signup"
//                 className="w-80% rounded-l-lg m-4"
//               />
//             </figure>
//           </div>

//           <div className="rounded-l-lg lg:pl-16 py-10">
//             <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
//               Create an <span className="text-primaryColor">account</span>
//             </h3>
//             <form onSubmit={submitHandler}>
//               <div className="mb-5">
//                 <input
//                   type="text"
//                   placeholder="Full name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="w-full pr-4 py-2 border-b border-solid border-[#00061161] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-gray-500 cursor-pointer"
//                   required
//                 />
//               </div>
//               <div className="mb-5">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="w-full pr-4 py-2 border-b border-solid border-[#00061161] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-gray-500 cursor-pointer"
//                   required
//                 />
//               </div>
//               <div className="mb-5">
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   className="w-full pr-4 py-2 border-b border-solid border-[#00061161] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-gray-500 cursor-pointer"
//                   required
//                 />
//               </div>
//               <div className="relative w-[130px] h-[50px] mb-5">
//                 <input
//                   type="file"
//                   name="photo"
//                   id="customfile"
//                   accept=".jpg, .png"
//                   onChange={handleFileInputChange}
//                   className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
//                 />
//                 <label
//                   htmlFor="customfile"
//                   className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
//                 >
//                   Upload Photo
//                 </label>
//               </div>

//               <div className="mt-7">
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-500 text-white text-[18px] leading-[30px] rounded-lg px-4 py-2"
//                 >
//                   Signup
//                 </button>
//               </div>
//               <p className="mt-5 text-textColor text-center">
//                 Already have an account?
//                 <Link
//                   to="/login"
//                   className="text-primaryColor font-medium ml-1"
//                 >
//                   Login
//                 </Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Signup;
