import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:8004/register/", {
        username,
        email,
        password,
      });
      setSuccess("Registration successful!");
      setUsername("");
      setEmail("");
      setPassword("");
      setError("");
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setError("Invalid data. Please check your inputs.");
      } else {
        setError("Registration failed. Please try again.");
      }
      setSuccess("");
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="relative w-[75%] bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-600">
            <img
              src="./assets/oscar_bobb.png"
              alt="Oscar Bobb"
              className="mx-auto"
            />
          </div>
        </div>
      </div>

      <div className="relative w-5/6 bg-purple-100 flex items-center justify-center">
        <div className="absolute left-3/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold">
              Welcome to Vision Vantage 👋
            </h1>
            <p className="text-gray-600">Please sign up to create an account</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={handleUsernameChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>
            <button
              className="relative inline-block min-w-[84px] z-[1] bg-mediumseagreen text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Register
            </button>
            {error && (
              <p className="mt-4 text-center text-sm text-red-600">{error}</p>
            )}
            {success && (
              <p className="mt-4 text-center text-sm text-green-600">
                {success}
              </p>
            )}
            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 hover:underline">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
