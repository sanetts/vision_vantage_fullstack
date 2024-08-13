import PropTypes from "prop-types";
import MatchList from "./MatchList";
import Trends from "./Trends";


const VideoTrends = ({ className = "" }) => {
  return (
    <div className={`flex flex-row items-start justify-between gap-4 w-full h-screen ${className}`}>
      <div className="flex flex-col flex-1">
      <MatchList />
        {/* <FrameComponent /> */}
        
      </div>
      <Trends className="w-[310px]" />
    </div>
  );
};

VideoTrends.propTypes = {
  className: PropTypes.string,
};

export default VideoTrends;
