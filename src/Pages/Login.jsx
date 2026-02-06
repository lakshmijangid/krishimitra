import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
const [role, setRole] = React.useState("");
const navigate = useNavigate();
//   if(role === "farmer"){
//  navigate("/farmer-dashboard")
// }

// if(role === "student"){
//  navigate("/student-dashboard")
// }

function handleLogin( ) {
    if(role === "farmer"){
 navigate("/farmer/dashboard")
}

if(role === "student"){
 navigate("/student/dashboard")
}
}


  return (
    <>
      <div className="min-h-screen flex items-center justify-center pl-13 md:pl-20 py-12">
        <form className="bg-green-50 p-8 rounded-2xl shadow-xl w-full max-w-md border border-green-100">

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-emerald-800 mb-2">
              Login
            </h1>
          </div>

          <form className="space-y-5">

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>

              <input
                type="email"
                className="w-full px-4 py-3 bg-green-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                placeholder="Enter your email"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>

              <input
                type="password"
                className="w-full px-4 py-3 bg-green-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                placeholder="Enter password"
              />
            </div>

            {/* ROLE SELECT */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Role
              </label>

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-3 bg-green-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              >
                <option value="">Choose role</option>
                <option value="farmer">Farmer</option>
                <option value="student">Student</option>
              </select>
            </div>

            {/* LOGIN BUTTON */}
            <button
              type="button"
              onClick={() => handleLogin()}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 mt-6 cursor-pointer"
            >
              Log In
            </button>

          </form>

          {/* SIGNUP LINK */}
          <div className="mt-6 text-center text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/sign-up"
              className="text-emerald-700 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </div>

        </form>
      </div>
    </>
  );
}

export default Login;
