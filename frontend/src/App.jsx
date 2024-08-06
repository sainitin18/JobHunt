import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Job from "./Pages/Job.jsx";
import CreateJob from "./Pages/CreateJob.jsx";
import Footer from "./Components/FooterDiv/Footer";
import "../src/App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const userLoggedIn = localStorage.getItem("userLoggedIn") === "true";
      console.log(userLoggedIn);
      setIsAuthenticated(userLoggedIn);
    };

    checkAuth();
  }, []);

  const handleLogin = () => {
    console.log("true");
    setIsAuthenticated(true);
    localStorage.setItem("userLoggedIn", "true");
    console.log(isAuthenticated);
  };

  const handleSignOut = () => {
    console.log("true");
    localStorage.removeItem("userLoggedIn");
    localStorage.removeItem("token");
    console.log("Removed");
    setIsAuthenticated(false);
    window.location.href = "/login";
  };

  // const values = {
  //   isAuthenticated,
  //   handleLogin,
  //   handleSignOut,
  // };

  return (
    <Router>
      <div className="w-[85%] m-auto bg-white">
        <NavBar isAuthenticated={isAuthenticated} onSignOut={handleSignOut} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Signup />} />
            <Route
              path="/post"
              element={
                isAuthenticated ? <CreateJob /> : <Navigate to="/login" />
              }
            />
            <Route path="/job" element={<Job />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

// import React from 'react';
// import { BrowserRouter as Router } from "react-router-dom";
// import NavBar from "./Components/NavBar/NavBar";
// import Routers from "./Routes/Routers";
// import Footer from "./Components/FooterDiv/Footer";
// import "../src/App.css";

// const App = () => {
//   return (
//     <Router>
//       <div className="w-[85%] m-auto bg-white">
//         <NavBar />
//         <main>
//           <Routers />
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;
