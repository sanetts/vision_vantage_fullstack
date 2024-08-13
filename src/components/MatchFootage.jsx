import React, { useEffect, useState } from "react";
import axios from "axios";
import SkillDashboard from "./SkillDashboard";

const MatchFootage = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filename, setFilename] = useState(null);
  const [trackingVideoPath, setTrackingVideoPath] = useState(null);

  useEffect(() => {
    // Function to extract video_id from the URL
    const getVideoIdFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      return params.get("video_id");
    };

    const fetchFilename = async () => {
      const videoId = getVideoIdFromUrl();
      if (!videoId) {
        console.error("No video_id found in URL");
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:8008/get_video_filename/${videoId}`
        );
        setFilename(response.data.filename);
      } catch (error) {
        console.error("Error fetching filename:", error);
      }
    };

    fetchFilename();
  }, []);

  useEffect(() => {
    const fetchTrackerNumbersAndVideo = async () => {
      if (!filename) return;

      try {
        const response = await axios.post(
          `http://localhost:8008/generate_tracker_numbers?filename=${filename}` // Include filename as a query parameter
        );
        setPlayers(response.data.tracker_numbers);
        setTrackingVideoPath(response.data.annotated_video_path); // Set the video path from the response
      } catch (error) {
        console.error("Error fetching tracker numbers and video:", error);
      }
    };

    fetchTrackerNumbersAndVideo();
  }, [filename]);

  const handlePlayerClick = (playerId) => {
    setSelectedPlayer(playerId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPlayer(null);
  };

  // Extract video_id from URL
  const videoId = new URLSearchParams(window.location.search).get("video_id");

  return (
    <div className="flex bg-white shadow-md rounded-lg p-6 m-4">
      {/* Players List */}
      <div className="w-1/4 border-r border-gray-200 pr-4">
        <h2 className="text-xl font-semibold mb-4">Match Footage</h2>
        <h3 className="text-lg mb-2">Players</h3>
        <ul className="space-y-2 max-h-96 overflow-y-scroll">
          {players.map((player, index) => (
            <li
              key={index}
              onClick={() => handlePlayerClick(player)}
              className="flex justify-between items-center p-2 bg-gray-100 rounded-lg cursor-pointer"
            >
              <span className="font-medium">{index + 1}</span>
              <span>{`Player ${player}`}</span>
              <span className="text-green-500">→</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Match Footage Video */}
      <div className="flex-1 pl-4">
        {trackingVideoPath ? (
          <video
            controls
            width="100%"
            height="auto"
            src={`http://localhost:8008/${trackingVideoPath}`}
            className="rounded-lg shadow-md"
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Loading tracking video...</p>
        )}
      </div>

      {/* SkillDashboard Modal */}
      {showModal && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <SkillDashboard
              playerId={selectedPlayer}
              videoId={videoId}
              onClose={closeModal}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchFootage;
