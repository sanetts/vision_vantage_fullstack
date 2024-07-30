import PropTypes from "prop-types";
import { FaArrowRight, FaBolt } from "react-icons/fa"; 

const MatchList = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-start justify-start gap-4 max-w-full text-left text-darkslategray-200 font-roboto ${className}`}
    >
      {/* Video Feed Section */}
      <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
        <div className="flex-1 rounded-8xs bg-seagreen-200 flex flex-row items-end justify-start relative gap-8 lg:gap-20 max-w-full lg:flex-wrap">
          <video
            className="self-stretch w-full max-w-full rounded-8xs"
            controls
          >
            <source src="../public/output_video5.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

     
    </div>
  );
};

MatchList.propTypes = {
  className: PropTypes.string,
};

export default MatchList;
