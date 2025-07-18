import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Singin() {
  const [singData, setSingData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setAgreedToTerms(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `https://myntra-backend-8j4c.onrender.com/api/v1/userAuth/singin`,
        singData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log("User Successfull SingIn", response.data);
      console.log(response.data.data.accessToken);

      console.log(response.data.data.user.email);

      localStorage.setItem("accessToken", response.data.data.accessToken);

      localStorage.setItem("userName", response.data.data.user.userName);
      localStorage.setItem("isVerified", response.data.data.user.isVerified);
      localStorage.setItem("email", response.data.data.user.email);
      localStorage.setItem("password", response.data.data.user.password);
      navigate("/Verify");
    } catch (err) {
      console.error("Error to Sing In user:", err.message);
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Server response data:", err.response.data);
        console.error("Server response status:", err.response.status);
        console.error("Server response headers:", err.response.headers);
      } else if (err.request) {
        // The request was made but no response was received (e.g., network error, CORS)
        console.error(
          "No response received from server. Request:",
          err.request
        );
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up request:", err.message);
      }
    } finally {
      setLoading(false);
      setSingData("");
    }
  };

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center">
      {/* Top Banner */}

      <div className="w-full flex justify-center">
        <img
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/10/29/9610da61-a1a4-4215-b1fa-f612242d10e61698602536819-Flat_200--1-.jpg" // Replace with your actual banner image
          alt="Flat 200 Off"
          className="w-[450px] h-30 object-cover "
        />
      </div>
      {/* Login/Signup Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md ">
        <h2 className="text-3xl font-semibold mb-6 text-gray-600">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <div className="flex flex-col border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-pink-400">
              <input
                type="text"
                name="userName"
                className="flex-1 px-4 py-3 outline-none text-gray-800 placeholder-gray-400"
                placeholder="User Name"
                value={singData.userName}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-pink-400 mt-6">
              <input
                type="email"
                name="email"
                className="flex-1 px-4 py-3 outline-none text-gray-800 placeholder-gray-400"
                placeholder="Email Address"
                value={singData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-pink-400 mt-6">
              <input
                type="password"
                name="password"
                className="flex-1 px-4 py-3 outline-none text-gray-800 placeholder-gray-400"
                placeholder="Password"
                value={singData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-6 flex items-start">
            <input
              type="checkbox"
              id="termsCheckbox"
              className="mt-1 h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
              checked={agreedToTerms}
              onChange={handleCheckboxChange}
            />
            <label
              htmlFor="termsCheckbox"
              className="ml-3 text-md text-gray-600"
            >
              By continuing, I agree to the{" "}
              <a href="#" className="text-pink-600 hover:underline">
                Terms of Use
              </a>{" "}
              &{" "}
              <a href="#" className="text-pink-600 hover:underline">
                Privacy Policy
              </a>{" "}
              and I am above 18 years old.
            </label>
          </div>

          <button
            type="submit"
            className={`w-full py-3 rounded-md font-semibold ${
              agreedToTerms && singData
                ? "bg-pink-500 hover:bg-pink-600 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!agreedToTerms}
          >
            CONTINUE
          </button>
        </form>

        <p className="mt-6 text-left text-gray-600 text-md">
          If You are already register the ?{" "}
          <Link href="/Login" className="text-pink-600 hover:underline">
            LogIn
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Singin;
