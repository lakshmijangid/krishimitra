import React from "react";

function Home() {
  return(
    <>
    <div className="min-h-screen pl-13 lg:pl-20 flex items-center flex-col">
      <h1 className="text-center text-green-800 font-bold font-serif text-4xl mt-5">Dashboard</h1>
      <img src="/Images/Dash Image.png" className="rounded-full shadow-xl shadow-gray-700 hover:shadow-2xl transition-all duration-1000 hover:shadow-gray-900 max-w-50 my-8" alt="" />
      <div className="flex flex-col items-center gap-3 mt-10 w-full px-2">
        <a href="/user/crop-rate" className="bg-green-100 py-2 w-full text-emerald-700 text-center rounded-md border-2 border-emerald-200 text-lg">भाव देखें</a>
        <a href="" className="bg-green-100 py-2 w-full text-emerald-700 text-center rounded-md border-2 border-emerald-200 text-lg">Ask about your crop</a>
      </div>
    </div>
    </>
  )
}

export default Home;
