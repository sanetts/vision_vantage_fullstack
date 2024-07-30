import React from "react";
import {
  FaFutbol,
  FaBasketballBall,
  FaFootballBall,
  FaBaseballBall,
  FaHockeyPuck,
  FaVolleyballBall,
  FaHandRock,
  FaRunning,
  FaCircle, 
  FaCrosshairs,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-[120px] bg-white text-gray-900 min-h-screen flex flex-col items-center ">

      <div className="mb-12">
        <button className="text-gray-300 hover:text-green-500  focus:outline-non">
          <FaHockeyPuck size={21} />
        </button>
      </div>
      

      <div className="mb-12">
        <button className="text-gray-300 hover:text-green-500  focus:outline-non">
          <FaHandRock size={21} />
        </button>
      </div>
      

      <div className="mb-12">
        <button className="text-gray-300 hover:text-green-500  focus:outline-none">
          <FaFootballBall size={21} />
        </button>
      </div>

      <div className="mb-12">
        <button className="text-gray-300 hover:text-green-500  focus:outline-none">
          <FaBaseballBall size={24} />
        </button>
      </div>

      <div className="mb-12">
        <button className="text-gray-300 hover:text-green-500  focus:outline-none">
          <FaRunning size={21} />
        </button>
      </div>
      <div className="mb-12">
        <button className="text-green-500 focus:outline-none">
          <FaFutbol size={21} />
        </button>
      </div>

      <div className="mb-12">
        <button className="text-gray-300 hover:text-green-500  focus:outline-none">
          <FaVolleyballBall size={21} />
        </button>
      </div>
      
      <div className="mb-12">
        <button className="text-gray-300 hover:text-green-500  focus:outline-none">
          <FaBasketballBall size={21} />
        </button>
      </div>

      <div className="mb-12">
        <button className="text-gray-300 hover:text-green-500 focus:outline-none">
          <FaCircle size={21} />
        </button>
      </div>
      <div className="mb-12">
        <button className="text-gray-300 hover:text-green-500 focus:outline-none">
          <FaCrosshairs size={21} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
