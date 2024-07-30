import PropTypes from "prop-types";
import { FaArrowRight, FaBolt } from "react-icons/fa";

const Trends = ({ className = "" }) => {
  return (
    <div className={`w-[310px] rounded-8xs bg-white flex flex-col items-start justify-start pt-[38px] pb-8 pr-[22px] pl-[34px] box-border gap-6 text-lg sticky top-0 h-screen ${className}`}>
      <div className="w-full h-[335px] relative rounded-8xs bg-white hidden" />
      <div className="self-stretch flex flex-row items-start justify-between gap-5">
        <div className="relative font-medium inline-block z-[1]">
          Trending Now
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="relative">
            <FaArrowRight className="w-4 h-4 z-[1]" />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start text-xl text-darkslategray-100">
        <div className="flex flex-col items-start justify-start gap-4">
          <div className="flex flex-row items-start justify-start">
            <div className="h-[81px] w-[81px] relative rounded-full bg-gray-200 z-[1]" />
          </div>
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="relative font-medium inline-block z-[1] text-base">
              Jack Travor
            </div>
            <div className="flex flex-row items-start justify-start text-sm text-darkgray-200">
              <FaBolt className="h-5 w-5 relative z-[2]" />
              <div className="flex flex-col items-start justify-start pl-1">
                <div className="relative inline-block z-[1]">
                  300 Passes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start text-sm text-mediumseagreen">
        <div className="rounded-81xl bg-white flex flex-row items-start justify-start py-2 px-9 border border-solid border-whitesmoke-100">
          <div className="relative inline-block z-[2]">
            View Profile
          </div>
        </div>
      </div>
    </div>
  );
};

Trends.propTypes = {
  className: PropTypes.string,
};

export default Trends;
