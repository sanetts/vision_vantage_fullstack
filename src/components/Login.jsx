import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8004/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);
        // Store the token in localStorage or state
        localStorage.setItem("access_token", data.access_token);
        // Redirect or handle successful login (e.g., navigate to a different page)
        // window.location.href = '/dashboard'; // Example redirect
      } else {
        const errorText = await response.text();
        setError(`Login failed: ${errorText}`);
      }
    } catch (error) {
      setError(`Error during login: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side */}
      <div className="relative w-[75%] bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-600">
            <img
              src="../assets/oscar_bobb.png"
              alt="Oscar bobb"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className="relative w-[45%] bg-purple-100 flex items-center justify-center">
        {/* Form overlay */}
        <div className="absolute left-5/3 transform -translate-x-[70%] bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold">
              Welcome to Vision Vantage! 👋
            </h1>
            <p className="text-gray-600">
              Please sign-in to your account and start the adventure
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email or Username
              </label>
              <input
                id="email"
                name="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email or username"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4 flex items-center justify-between">
              <label className="inline-flex items-center text-sm text-gray-600">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Remember Me</span>
              </label>
              <a
                href="#"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Forgot Password?
              </a>
            </div>
            <div className="mb-4">
              <button
                className="relative inline-block min-w-[84px] z-[1] bg-mediumseagreen text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Sign in
              </button>
            </div>
            {error && <div className="text-red-500 text-center">{error}</div>}
            <div className="text-center text-gray-600 text-sm">
              <p>
                New on our platform?{" "}
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-800 font-bold"
                >
                  Create an account
                </a>
              </p>
            </div>
          </form>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <img
                src="https://img.icons8.com/fluent/48/000000/google-logo.png"
                alt="Google"
                className="h-8 w-8"
              />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <img
                src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
                alt="Facebook"
                className="h-8 w-8"
              />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <img
                src="https://img.icons8.com/fluent/48/000000/twitter.png"
                alt="Twitter"
                className="h-8 w-8"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
