import PropTypes from "prop-types";

const NavigationBar = ({ className = "" }) => {
  return (
    <div
      className={`w-[101px] h-full absolute !m-[0] top-[0px] bottom-[0px] left-[0px] ${className}`}
    >
      <div className="absolute top-[0px] left-[100px] box-border w-px h-[106px] border-r-[1px] border-solid border-gainsboro-200" />
      <div className="absolute top-[105px] left-[24px] box-border w-[53px] h-px border-t-[1px] border-solid border-whitesmoke-200" />
      <div className="absolute top-[331px] left-[24px] box-border w-[53px] h-px border-t-[1px] border-solid border-whitesmoke-200" />
      <div className="absolute top-[972px] left-[25px] rounded-[50%] bg-mediumseagreen w-[50px] h-[50px]" />
      <img
        className="absolute top-[983px] left-[36px] w-7 h-7 overflow-hidden z-[1]"
        loading="lazy"
        alt=""
        src="/plus-22-1.svg"
      />
      <img
        className="absolute top-[0px] left-[0px] w-full h-full z-[3]"
        alt=""
        src="/group-1065.svg"
      />
    </div>
  );
};

NavigationBar.propTypes = {
  className: PropTypes.string,
};

export default NavigationBar;