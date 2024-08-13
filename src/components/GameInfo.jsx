import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import VideoUploadModal from "./VideoUploadModal"; // Adjust the import path as necessary

const GameInfo = ({ className = "" }) => {
  const navigate = useNavigate();
  const gameTypeOptions = ["Competitive", "Training"];
  const [selectedGameType, setSelectedGameType] = useState("");
  const [location, setLocation] = useState("");
  const [stadiumName, setStadiumName] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [numberOfPlayers, setNumberOfPlayers] = useState(11);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const gameData = {
      game_type: selectedGameType,
      location,
      stadium_name: stadiumName,
      game_date: selectedDate,
      number_of_players: numberOfPlayers,
    };

    try {
      const response = await axios.post(
        "http://localhost:8008/add_game",
        gameData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setSuccessMessage(response.data.message);
      setError(null);
    } catch (error) {
      console.error("There was an error creating the game!", error);
      setError("Failed to create the game. Please try again.");
      setSuccessMessage("");
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleVideoUpload = async (file) => {
    const formData = new FormData();
    formData.append("video", file);

    try {
      const response = await axios.post(
        "http://localhost:8008/upload_video",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const { video_id, message } = response.data; 
      console.log(video_id);
      setSuccessMessage(message);
      setError(null);
      setIsModalOpen(false);

      // Navigate to the /match page with video_id as a URL parameter
      navigate(`/match?video_id=${video_id}`);
    } catch (error) {
      console.error("There was an error uploading the video!", error);
      setError("Failed to upload the video. Please try again.");
      setSuccessMessage("");
    }
  };


  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={`w-[319px] rounded-8xs bg-white flex flex-col items-start justify-start pt-[29px] px-[38px] pb-[515px] box-border gap-[20px] text-left text-mini text-darkslategray-200 font-roboto lg:pt-5 lg:pb-[335px] lg:box-border mq1425:hidden mq450:pb-[218px] mq450:box-border ${className} ml-[-145px]`}
      >
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
                id="gameType"
                value={selectedGameType}
                onChange={handleGameTypeSelect}
                className="w-full cursor-pointer border border-solid border-gainsboro-100 rounded-md px-3 py-2"
                required
              >
                <option value="" disabled>
                  Select game type
                </option>
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
          <label htmlFor="location" className="text-darkslategray-200">
            Select Location
          </label>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <div className="relative inline-block min-w-[103px] z-[1]">
              <input
                type="text"
                id="location"
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
          <label htmlFor="stadiumName" className="text-darkslategray-200">
            Enter Stadium Name
          </label>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <div className="relative inline-block min-w-[94px] z-[1]">
              <input
                type="text"
                id="stadiumName"
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
          <label htmlFor="selectedDate" className="text-darkslategray-200">
            Select Match Day
          </label>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <div className="relative inline-block min-w-[76px] z-[1]">
              <input
                type="date"
                id="selectedDate"
                value={selectedDate}
                onChange={handleDateChange}
                className="border-2 border-solid border-gainsboro-100 w-[120px] h-[20px] py-[8px] px-[1px] text-darkslategray-200"
                required
              />
            </div>
          </div>
          <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-darkslategray-100" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[3px] gap-[9px]">
          <label htmlFor="numberOfPlayers" className="text-darkslategray-200">
            Number of Players
          </label>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <div className="relative inline-block min-w-[76px] z-[1]">
              <input
                type="number"
                id="numberOfPlayers"
                value={numberOfPlayers}
                onChange={handleNumberOfPlayersChange}
                min="1"
                max="22"
                className="border-gainsboro-100 w-[120px] h-[15px] py-[8px] px-[1px] text-darkslategray-200"
                required
              />
            </div>
          </div>
          <label htmlFor="stadiumName" className="text-darkslategray-200">
            Team A vrs Team B
          </label>
          <div className="relative inline-block min-w-[94px] z-[1]">
            <input
              type="text"
              id="Team A vrs Team B"
              placeholder="Team A vrs Team B"
              className="border-gainsboro-100 w-[175px] h-[15px] py-[8px] px-[1px] text-darkslategray-200"
              required
            />
          </div>

          <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-darkslategray-100" />
        </div>
        {error && <div className="text-red-500">{error}</div>}
        {successMessage && (
          <div className="text-green-500">{successMessage}</div>
        )}
        <button
          type="button"
          onClick={handleOpenModal}
          className="bg-green-500 text-white py-2 px-4 rounded"
        >
          Upload Video
        </button>
      </form>

      <VideoUploadModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onUpload={handleVideoUpload}
      />
    </div>
  );
};

GameInfo.propTypes = {
  className: PropTypes.string,
};

export default GameInfo;
