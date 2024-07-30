import PropTypes from "prop-types";
import { FaArrowRight, FaBolt } from "react-icons/fa"; // Importing React-icons

const MatchList = ({ className = "" }) => {
  return (
    <div
      className={`w-[1401px] flex flex-row flex-wrap items-start justify-start gap-[11px] max-w-full text-left text-14xl text-darkslategray-200 font-roboto ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start relative max-w-full lg:min-w-full">
        <div className="flex-1 rounded-8xs bg-seagreen-200 flex flex-row items-end justify-start relative gap-[236px] max-w-full z-[1] lg:flex-wrap lg:gap-[118px] mq450:gap-[59px]">
          <video
            className="self-stretch w-[1080px] relative rounded-8xs max-h-full min-h-[335px] max-w-full z-[0]"
            controls
          >
            <source src="/videos/08fd33_4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="h-full w-[396px] absolute !m-[0] top-[0px] right-[14px] bottom-[0px] rounded-tl-981xl rounded-tr-8xs rounded-br-8xs rounded-bl-none bg-seagreen-100 z-[2]" />
          <div className="h-[146px] w-[251px] flex flex-col items-start justify-start min-w-[251px] lg:flex-1">
            <div className="self-stretch rounded-81xl bg-white flex flex-row items-start justify-start py-[13px] px-[19px] whitespace-nowrap z-[3]">
              <div className="h-[65px] w-[251px] relative rounded-81xl bg-white hidden" />
              <div className="relative font-black z-[4]">Upload Match</div>  
            </div>
          </div>
        </div>
      </div>
      <div className="w-[310px] rounded-8xs bg-white flex flex-col items-start justify-start pt-[38px] pb-8 pr-[22px] pl-[34px] box-border gap-[25px] text-lg">
        <div className="w-[310px] h-[335px] relative rounded-8xs bg-white hidden" />
        <div className="self-stretch flex flex-row items-start justify-between pt-0 px-0 pb-3.5 gap-[20px] mq450:flex-wrap">
          <div className="relative font-medium inline-block min-w-[113px] z-[1]">
            Trending Now
          </div>
          <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
            <div className="w-[30px] h-[13px] relative">
              <FaArrowRight className="absolute top-[0px] left-[0px] w-[13px] h-[13px] z-[1]" />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-[68px] text-xl text-darkslategray-100">
          <div className="flex flex-col items-start justify-start gap-[18px]">
            <div className="flex flex-row items-start justify-start py-0 px-3">
              {/* Placeholder for user profile picture */}
              <div className="h-[81px] w-[81px] relative rounded-[50%] bg-gray-200 z-[1]" />
            </div>
            <div className="flex flex-col items-start justify-start gap-[7px]">
              <div className="relative font-medium inline-block min-w-[105px] z-[1] mq450:text-base">
                Jack Travor
              </div>
              <div className="flex flex-row items-start justify-start text-mini text-darkgray-200">
                <FaBolt className="h-[19px] w-[19px] relative z-[2]" />
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <div className="relative inline-block min-w-[78px] z-[1]">
                    300 Passes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-[49px] text-smi text-mediumseagreen">
          <div className="rounded-81xl bg-white flex flex-row items-start justify-start pt-2 px-9 pb-[5px] whitespace-nowrap z-[1] border-[1px] border-solid border-whitesmoke-100">
            <div className="h-8 w-[143px] relative rounded-81xl bg-white box-border hidden border-[1px] border-solid border-whitesmoke-100" />
            <div className="relative inline-block min-w-[69px] z-[2]">
              View Profile
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MatchList.propTypes = {
  className: PropTypes.string,
};

export default MatchList;
