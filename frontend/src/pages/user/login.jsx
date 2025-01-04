import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userEmail } from "../../component/reduxToolkit/slices/bookMarkSlices";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const currentData = { email };

  const handleLogin = async (e) => {
    e.preventDefault();

    const apiUrl = "http://localhost:3000/api/user/login";


      // const response = await fetch(apiUrl, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ email, password }),
      // });
     try {
      const response = await axios.post(apiUrl,{email,password});
      console.log(response);
      console.log('check point 1');
      const emailData = response.data.email;
        
        localStorage.setItem("user", JSON.stringify(emailData));
        toast.success("Login successful!");
        dispatch(userEmail(emailData));
        navigate("/");
     } catch (error) {
      toast.error("Invalid email or password!");
     }
     
  
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-100 relative">
      <Toaster />
      {/* Shazam button at the top-left */}
      <div
        className="absolute top-6 left-6 flex items-center space-x-2 cursor-pointer"
        onClick={handleClick}
      >
        <img
          src="https://play-lh.googleusercontent.com/mwTU9-4NX-_QlATb6lILSinKI47wAtOM38GjPYRPQSsQOG2hVRY4h9OfEhDxpf8ADQ"
          alt="Shazam Logo"
          className="h-8 w-8 rounded-full bg-blue-400"
        />
        <span className="text-xl font-bold text-blue-500">Shazam</span>
      </div>

      {/* Login Form */}
      <div
        className="bg-white bg-opacity-80 shadow-lg rounded-lg p-8 max-w-sm w-full relative h-[500px]"
        style={{
          backgroundImage:
            'url("https://media.istockphoto.com/id/685206944/photo/young-girl-is-dancing-and-listening-the-music-till-walking-in-the-park.jpg?s=612x612&w=0&k=20&c=mrpFnFfERJqKcCAjDJ2b7MTDYz3s0OPbLl_Mcq8mmyo=")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-70 rounded-lg"></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          </p>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="emailInput"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="emailInput"
                placeholder="Enter email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </form>
          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <a href="/signup" className="text-yellow-500 hover:underline">
              Signup
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;