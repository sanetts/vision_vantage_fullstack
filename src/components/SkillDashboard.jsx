import React from "react";
import { FaFutbol, FaVideo, FaChartBar, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SkillDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-20 bg-white flex flex-col items-center py-6">
        <div className="space-y-6">
          <div className="flex flex-col items-center cursor-pointer text-gray-600" onClick={() => navigate("/matches")}>
            <FaFutbol className="text-2xl" />
            <span className="text-xs mt-1">Matches</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer text-gray-600" onClick={() => navigate("/videos")}>
            <FaVideo className="text-2xl" />
            <span className="text-xs mt-1">Videos</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer text-gray-600" onClick={() => navigate("/statistics")}>
            <FaChartBar className="text-2xl" />
            <span className="text-xs mt-1">Statistics</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer text-gray-600" onClick={() => navigate("/analytics")}>
            <FaSearch className="text-2xl" />
            <span className="text-xs mt-1">Analytics</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 flex flex-col relative">
        {/* Header */}
        <header className="flex justify-between items-center p-6 bg-white shadow-md">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search Matches, Players, Stats ..."
              className="px-4 py-2 border border-gray-300 rounded-md w-80"
            />
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Jane Doe</span>
            <img src="path-to-profile-image.jpg" alt="Jane Doe" className="w-10 h-10 rounded-full" />
          </div>
        </header>

        {/* Content */}
        <section className="p-6 flex space-x-6">
          <div className="w-60 bg-white p-6 rounded-lg shadow-lg flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Match Footage</h2>
            <div className="flex flex-col space-y-4">
              {[...Array(12).keys()].map(i => (
                <div key={i} className="flex justify-between items-center">
                  <span>{i + 1}</span>
                  <span>Tracker</span>
                  <span>&#8594;</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Match Footage History</h2>
            <div className="w-full h-52 bg-green-500 rounded-lg" />
          </div>
          <div className="w-60 bg-white p-6 rounded-lg shadow-lg">
            <img src="path-to-soccer-image.jpg" alt="Soccer" className="w-full rounded-lg" />
          </div>
        </section>

        {/* Modal */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Select Skillset</h2>
            <div className="flex flex-col space-y-4">
              <select className="px-4 py-2 border border-gray-300 rounded-md">
                <option>Passing</option>
                <option>Speed</option>
                <option>Distance covered</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-md">
                <option>Passing</option>
                <option>Speed</option>
                <option>Distance covered</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-md">
                <option>Passing</option>
                <option>Speed</option>
                <option>Distance covered</option>
              </select>
              <button className="px-4 py-2 bg-green-500 text-white rounded-md">Generate Video</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SkillDashboard;
