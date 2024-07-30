import PropTypes from "prop-types";

const History = ({ className = "" }) => {
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
      <div className="self-stretch flex flex-row items-end justify-start gap-[25px] max-w-full text-5xl text-darkgray-200 mq1425:flex-wrap">
        <div className="flex-1 rounded-8xs bg-white flex flex-row items-start justify-between py-8 pr-3.5 pl-[18px] box-border min-h-[445px] max-w-full gap-[20px] lg:flex-wrap lg:min-w-full mq1425:min-h-[auto]">
          <div className="h-[445px] w-[1080px] relative rounded-8xs bg-white hidden max-w-full" />
          <div className="w-[754px] flex flex-row items-start justify-start gap-[67px] max-w-full mq450:gap-[17px] mq825:flex-wrap mq825:gap-[33px]">
            <div className="w-72 flex flex-col items-start justify-start gap-[35px] min-w-[288px] mq450:gap-[17px] mq825:flex-1">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px]">
                <div className="flex-1 relative whitespace-nowrap z-[1] mq450:text-lgi">
                  06/06/24 09:01:16
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-[3px]">
                <div className="flex-1 relative whitespace-nowrap z-[1] mq450:text-lgi">
                  05/06/24 10:02:25
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[28px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px]">
                  <div className="flex-1 relative whitespace-nowrap z-[1] mq450:text-lgi">
                    04/06/24 18:03:34
                  </div>
                </div>
                <div className="self-stretch relative whitespace-nowrap z-[1] mq450:text-lgi">
                  03/06/24 19:48:46
                </div>
              </div>
              <div className="self-stretch relative whitespace-nowrap z-[1] mq450:text-lgi">
                03/06/24 11:58:59
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[259px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[35px] mq450:gap-[17px]">
                <div className="self-stretch relative z-[1] mq450:text-lgi">
                  Birmingham City vrs Randers FC
                </div>
                <div className="self-stretch relative z-[1] mq450:text-lgi">
                  Luton Town vrs PSV FC
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[28px]">
                  <div className="self-stretch relative whitespace-pre-wrap z-[1] mq450:text-lgi">
                    Inter Miami vrs Union Berlin
                  </div>
                  <div className="self-stretch relative z-[1] mq450:text-lgi">
                    Birmingham City vrs Ipswich FC
                  </div>
                </div>
                <div className="self-stretch relative z-[1] mq450:text-lgi">
                  Galatico vrs RB Leipzig
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default History;
