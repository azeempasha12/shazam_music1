import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const navigate = useNavigate();
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignupForm({ ...signupForm, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload

    const { name, email, password } = signupForm; // Destructure signupForm

    try {
      const response = await fetch("http://localhost:3000/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }), // Send form data
       
      });

      if (response.ok) {
        const data = await response.json();
        toast.success("🎉 Account created successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.log("Response:", data);
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "An error occurred.", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
        console.error("Error Response:", errorData);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later.", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
    }
  };

  const handleLogin = () => {
    navigate("/loginpage");
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600">
      <div className="absolute top-6 left-6">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={handleClick}>
          <img
            src="https://play-lh.googleusercontent.com/mwTU9-4NX-_QlATb6lILSinKI47wAtOM38GjPYRPQSsQOG2hVRY4h9OfEhDxpf8ADQ"
            alt="Shazam Logo"
            className="h-8 w-8 rounded-full bg-blue-400"
          />
          <span className="text-xl font-bold text-blue-500">Shazam</span>
        </div>
      </div>
      <div
        className="relative w-96 h-[700px] bg-cover bg-center rounded-2xl shadow-xl"
        style={{
          backgroundImage: `url('https://media.istockphoto.com/id/685206944/photo/young-girl-is-dancing-and-listening-the-music-till-walking-in-the-park.jpg?s=612x612&w=0&k=20&c=mrpFnFfERJqKcCAjDJ2b7MTDYz3s0OPbLl_Mcq8mmyo=')`, // Replace with the actual image URL
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-70 rounded-2xl flex flex-col items-center justify-center p-6">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Signup</h1>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          </p>
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={signupForm.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={signupForm.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signupForm.password}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <div className="flex items-center">
              <input type="checkbox" required className="mr-2" />
              <label className="text-sm text-gray-600">Terms and Conditions*</label>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-yellow-500 text-white rounded-md font-semibold hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Signup
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <span className="text-yellow-500 cursor-pointer" onClick={handleLogin}>
              Login
            </span>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
