import React from "react";
import { Link } from "react-router-dom";

function SignUp() {

//   if(role === "farmer"){
//  createFarmerProfile()
// }

// if(role === "student"){
//  createStudentProfile()
// }


  return (
    <div className="min-h-screen flex items-center justify-center pl-13 md:pl-20 py-12">
      <div className="bg-green-50 p-8 rounded-2xl shadow-xl w-full max-w-md border border-green-100">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-emerald-800 mb-2">
            Create Account
          </h1>
          <p className="text-gray-600">
            Join KrishiMitra community today
          </p>
        </div>

        <form className="space-y-5">

          {/* FULL NAME */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>

            <input
              type="text"
              className="w-full px-4 py-3 bg-green-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              placeholder="Enter your full name"
            />
          </div>

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
              placeholder="Create a password"
            />
          </div>

          {/* CONFIRM PASSWORD */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>

            <input
              type="password"
              className="w-full px-4 py-3 bg-green-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              placeholder="Confirm your password"
            />
          </div>

          {/* ROLE SELECT */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Role
            </label>

            <select
              className="w-full px-4 py-3 bg-green-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
            >
              <option value="">Choose role</option>
              <option value="farmer">Farmer</option>
              <option value="student">Student</option>
            </select>
          </div>

          {/* SIGNUP BUTTON */}
          <button
            type="button"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 mt-6 cursor-pointer"
          >
            Sign Up
          </button>

        </form>

        {/* LOGIN LINK */}
        <div className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-emerald-700 font-semibold hover:underline"
          >
            Log In
          </Link>
        </div>

      </div>
    </div>
  );
}

export default SignUp;
