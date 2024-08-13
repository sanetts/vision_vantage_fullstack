import React, { useState } from "react";
import axios from "axios";

const SkillDashboard = ({ playerId, videoId, onClose }) => {
  const [selectedSkill, setSelectedSkill] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleSkillChange = (e) => {
    setSelectedSkill(e.target.value);
  };

  const handleGenerateVideo = async () => {
    if (!selectedSkill) {
      alert("Please select a skillset.");
      return;
    }

    setLoading(true);

    let endpoint = "";
    if (selectedSkill === "passing") {
      endpoint = `http://localhost:8008/extract_player_passes_video?video_id=${videoId}&player_id=${playerId}`;
    } else if (selectedSkill === "speed_distance") {
      endpoint = `http://localhost:8008/extract_player_speedanddistance_video?video_id=${videoId}&player_id=${playerId}`;
    }

    try {
      const response = await axios.post(endpoint);
      setVideoUrl(response.data.video_path);
    } catch (error) {
      console.error("Error generating video:", error);
      alert("Failed to generate video. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Select Skillset</h2>
      <div className="flex flex-col space-y-4">
        <select
          className="px-4 py-2 border border-gray-300 rounded-md"
          value={selectedSkill}
          onChange={handleSkillChange}
        >
          <option value="">Select Skill</option>
          <option value="passing">Passing</option>
          <option value="speed_distance">Speed & Distance covered</option>
        </select>

        <button
          className="px-4 py-2 bg-green-500 text-white rounded-md"
          onClick={handleGenerateVideo}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Video"}
        </button>

        <button
          className="px-4 py-2 bg-gray-300 text-black rounded-md mt-4"
          onClick={onClose}
        >
          Close
        </button>
      </div>

      {videoUrl && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-4">Generated Video</h2>
          <video
            src={`http://localhost:8008/${videoUrl}`}
            controls
            className="w-full h-80"
          />
          <a
            href={`http://localhost:8008/${videoUrl}`}
            download
            className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4 inline-block"
          >
            Download Video
          </a>
        </div>
      )}
    </div>
  );
};

export default SkillDashboard;
