import React, { useState } from "react";
import PropTypes from "prop-types";
import { IoIosArrowDown } from "react-icons/io";

const GameInfo = ({ className = "" }) => {
  const gameTypeOptions = [ "Competitive", "Training"];
  const [selectedGameType, setSelectedGameType] = useState("");
  const [location, setLocation] = useState("");
  const [stadiumName, setStadiumName] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [numberOfPlayers, setNumberOfPlayers] = useState(11);

  const handleGameTypeSelect = (event) => {
    setSelectedGameType(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleStadiumNameChange = (event) => {
    setStadiumName(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleNumberOfPlayersChange = (event) => {
    setNumberOfPlayers(parseInt(event.target.value, 10));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      selectedGameType,
      location,
      stadiumName,
      selectedDate,
      numberOfPlayers,
    });
    
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-[319px] rounded-8xs bg-white flex flex-col items-start justify-start pt-[29px] px-[38px] pb-[515px] box-border gap-[20px] text-left text-mini text-darkslategray-200 font-roboto lg:pt-5 lg:pb-[335px] lg:box-border mq1425:hidden mq450:pb-[218px] mq450:box-border ${className} ml-[-145px]`}
    >
      <div className="w-[319px] h-[925px] relative rounded-8xs bg-white hidden" />
      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-3 text-lg text-darkslategray-200">
        <div className="relative font-medium inline-block min-w-[105px] z-[1]">
          Create Game
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[3px] gap-[9px] text-darkslategray-200">
      <label htmlFor="gameType" className="text-darkslategray-200">
          Select Game Type
        </label>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <div className="relative inline-block min-w-[195px] z-[1]">
            <select
              value={selectedGameType}
              onChange={handleGameTypeSelect}
              className="w-full cursor-pointer border border-solid border-gainsboro-100 rounded-md px-3 py-2"
              required
            >
             
              {gameTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-darkslategray-100" />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[3px] gap-[9px]">
      <label htmlFor="location" className="text-darkslategray-200">Select Location</label>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <div className="relative inline-block min-w-[103px] z-[1]">
            <input
              type="text"
              value={location}
              onChange={handleLocationChange}
              placeholder="Location"
              className="border-gainsboro-100 w-[175px] h-[15px] py-[8px] px-[1px] text-darkslategray-200"
              required
            />
          </div>
        </div>
        <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-darkslategray-100" />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[3px] gap-[9px]">
      <label htmlFor="location" className="text-darkslategray-200">Enter Stadium Name</label>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <div className="relative inline-block min-w-[94px] z-[1]">
            <input
              type="text"
              value={stadiumName}
              onChange={handleStadiumNameChange}
              placeholder="Stadium Name"
              className="border-gainsboro-100 w-[175px] h-[15px] py-[8px] px-[1px] text-darkslategray-200"
              required
            />
          </div>
        </div>
        <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-darkslategray-100" />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[3px] gap-[9px]">
      <label htmlFor="location" className="text-darkslategray-200">Select Match Day</label>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <div className="relative inline-block min-w-[76px] z-[1]">
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="border-2 border-solid border-gainsboro-100 w-[120px] h-[20px] py-[8px] px-[5px] text-darkslategray-200"
              required
            />
          </div>
        </div>
        <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-darkslategray-100" />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[3px] gap-[9px]">
      <label htmlFor="location" className="text-darkslategray-200">Number of Players Per Team</label>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <div className="relative inline-block min-w-[124px] z-[1]">
            <input
              type="number"
              value={numberOfPlayers}
              onChange={handleNumberOfPlayersChange}
              min="1"
              className="border-2 border-solid border-gainsboro-100 w-[40px] h-[20px] py-[8px] px-[5px] text-darkslategray-200"
              required
            />
          </div>
        </div>
        
        <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-darkslategray-100" />
      </div>
      <div className="rounded-sm bg-mediumseagreen flex flex-row items-start justify-start pt-[9px] px-[79px] pb-2 whitespace-nowrap z-[1] text-base text-white">
        <div className="h-9 w-[242px] relative rounded-sm bg-mediumseagreen hidden" />  
        <button type="submit" className="relative inline-block min-w-[84px] z-[1] bg-mediumseagreen text-white">
  Upload Video
</button>

      </div>
      <div className="flex flex-row items-start justify-start py-0 pr-[69px] pl-[67px] text-sm text-slategray">
        <div className="relative inline-block min-w-[107px] z-[1]">
          All My Games <span> 3 </span>
        </div>
        
      </div>
    </form>
  );
};

GameInfo.propTypes = {
  className: PropTypes.string,
};

export default GameInfo;
