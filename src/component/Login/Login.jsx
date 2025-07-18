import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [logData, setlogData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const navigate = useNavigate();

  const handleMobileNumberChange = (e) => {
    const { name, value } = e.target;
    setlogData((prev) => ({
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
    const token = localStorage.getItem("accessToken");
    console.log("Access Token :-", token);

    try {
      const response = await axios.post(
        `https://myntra-backend-8j4c.onrender.com/api/v1/userAuth/login`,
        logData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("User Successfull SingIn", response.data);
      localStorage.setItem("email", response.data.data.user.email);
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
      setlogData("");
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
        <h2 className="text-3xl font-semibold mb-6 text-gray-600">Login</h2>

        <div className="mb-6">
          <div className="flex flex-col border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-pink-400">
            <input
              type="email"
              className="flex-1 px-4 py-3 outline-none text-gray-800 placeholder-gray-400"
              placeholder=" Email Address"
              value={logData.email}
              name="email"
              onChange={handleMobileNumberChange}
            />
          </div>
          <div className="flex flex-col border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-pink-400 mt-6">
            <input
              type="password"
              className="flex-1 px-4 py-3 outline-none text-gray-800 placeholder-gray-400"
              placeholder=" Password"
              value={logData.password}
              name="password"
              onChange={handleMobileNumberChange}
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
          <label htmlFor="termsCheckbox" className="ml-3 text-md text-gray-600">
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
          onClick={handleSubmit}
          className={`w-full py-3 rounded-md font-semibold ${
            agreedToTerms && logData
              ? "bg-pink-500 hover:bg-pink-600 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!agreedToTerms || !logData}
        >
          CONTINUE
        </button>

        <p className="mt-6 text-left text-gray-600 text-md">
          If You are not register the ?{" "}
          <a href="/Singin" className="text-pink-600 hover:underline">
            SingIn
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
