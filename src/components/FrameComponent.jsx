import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[26px] max-w-full text-left text-lg text-darkslategray-200 font-roboto ${className}`}
    >
      <div className="w-[1080px] flex flex-row items-start justify-between max-w-full gap-[20px] lg:flex-wrap">
        <div className="w-[675px] flex flex-row items-start justify-start gap-[122px] max-w-full mq450:gap-[30px] mq825:flex-wrap mq825:gap-[61px]">
          <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
            <div className="relative font-medium">Match Footage History</div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start gap-[28px] min-w-[240px] max-w-full text-slategray mq450:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[50px]">{`Filter : `}</a>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-[9px] min-w-[189px] text-smi text-darkgray-100">
              <div className="rounded-sm bg-white flex flex-row items-end justify-start pt-[9px] pb-2 pr-[9px] pl-[11px] gap-[11px]">
                <div className="h-8 w-[91px] relative rounded-sm bg-white hidden" />
                <div className="relative inline-block min-w-[47px] z-[1]">
                  Football
                </div>
              </div>
              <div className="flex-1 rounded-sm bg-white flex flex-row items-end justify-between pt-[9px] pb-2 pr-[9px] pl-[11px] whitespace-nowrap gap-[20px]">
                <div className="h-8 w-[91px] relative rounded-sm bg-white hidden" />
                <div className="relative inline-block min-w-[35px] z-[1]">
                  5 vs 5
                </div>
              </div>
              <div className="rounded-sm bg-white flex flex-row items-end justify-start pt-[9px] pb-2 pr-[9px] pl-[11px] gap-[14px]">
                <div className="h-8 w-[91px] relative rounded-sm bg-white hidden" />
                <div className="relative inline-block min-w-[44px] z-[1]">
                  London
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 text-slategray">
          <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[64px]">
            View All
          </a>
        </div>
      </div>
      <div className="">
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
