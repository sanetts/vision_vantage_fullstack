import PropTypes from "prop-types";
import { useState } from "react";
import { FaSearch, FaUserCircle, FaChevronDown } from "react-icons/fa";

// Text color change on click
const GroupComponent = ({ className = "" }) => {
  const [selectedTab, setSelectedTab] = useState("");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <header
      className={`self-stretch flex flex-row items-end justify-between py-[23px] pr-9 pl-[136px] box-border relative gap-[20px] max-w-full z-[1] text-left text-xs text-silver font-roboto lg:pl-[68px] lg:box-border mq825:pl-[34px] mq825:box-border ${className}`}
    >
      <div className="h-2 w-[70px] absolute !m-[0] top-[-4px] left-[136px] rounded-81xl bg-white" />
      <i className="relative hidden min-w-[78px] whitespace-nowrap z-[1]">
        Football Player
      </i>
      <div className="h-[calc(100%_+_1815px)] w-[calc(100%_-_1815px)] absolute !m-[0] top-[105px] right-[1815px] bottom-[-1920px] left-[0px] bg-white [transform:_rotate(-90deg)] [transform-origin:0_0]" />
      <nav className="m-0 w-[420px] flex flex-col items-start justify-end pt-0 px-0 pb-[15px] box-border max-w-full mq1425:hidden mq825:w-0">
        <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-lg text-darkgray-100 font-roboto mq825:hidden">
          <div
            className={`flex flex-col items-start justify-start py-0 pr-[3px] pl-0 ${
              selectedTab === "matches" ? "text-darkslategray-200" : "text-gray-400"
            }`}
          >
            <a
              className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[70px] z-[1] cursor-pointer"
              onClick={() => handleTabClick("matches")}
            >
              Matches
            </a>
          </div>
          <div
            className={`w-[85px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border ${
              selectedTab === "videos" ?  "text-darkslategray-200" : "text-gray-400"
            }`}
          >
            <a
              className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[56px] z-[1] cursor-pointer"
              onClick={() => handleTabClick("videos")}
            >
              Videos
            </a>
          </div>
          <div
            className={`flex flex-col items-start justify-start ${
              selectedTab === "statistics" ?  "text-darkslategray-200" : "text-gray-400"
            }`}
          >
            <a
              className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[76px] z-[1] cursor-pointer"
              onClick={() => handleTabClick("statistics")}
            >
              Statistics
            </a>
          </div>
          <div
            className={`flex flex-col items-start justify-start ${
              selectedTab === "analytics" ?  "text-darkslategray-200" : "text-gray-400"
            }`}
          >
            <a
              className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[75px] z-[1] cursor-pointer"
              onClick={() => handleTabClick("analytics")}
            >
              Analytics
            </a>
          </div>
        </nav>
      </nav>
      <div className="w-[675px] flex flex-col items-start justify-end pt-0 pb-px pr-[19px] pl-0 box-border max-w-full text-sm">
        <div className="self-stretch rounded-81xl bg-white box-border flex flex-row items-start justify-between py-[11px] px-[31px] max-w-full gap-[20px] z-[1] border-[1px] border-solid border-gainsboro-100">
          <div className="h-[50px] w-[656px] relative rounded-81xl bg-white box-border hidden max-w-full border-[1px] border-solid border-gainsboro-100" />
          <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 mq825:hidden">
            <div className="relative whitespace-nowrap z-[3]">
              Search Matches, Players, Stats ...
            </div>
          </div>
          <FaSearch className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[2]" />
        </div>
      </div>
      <div className="w-[351px] flex flex-row items-start justify-start gap-[22px] max-w-full text-lg text-darkgray-200">
        <div className="flex flex-row items-start justify-start gap-[14px]">
          <div className="h-[59px] w-[59px] relative rounded-[50%] object-cover z-[1]">
            <img
              className="h-full w-full rounded-full"
              alt="Profile"
              src="/ellipse-1@2x.png"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[76px] whitespace-nowrap z-[1]">
              Jane Doe
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
          <FaChevronDown className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]" />
        </div>
      </div>
    </header>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
