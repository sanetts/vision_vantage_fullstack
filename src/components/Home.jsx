import React from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import GameInfo from "./GameInfo";
import MatchList from "./MatchList";
// import FrameComponent from "./components/FrameComponent";
import Trends from "./Trends";
// import VideoTrends from "./VideoTrends";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar className="mt-[20px]" />
        <main className="self-stretch flex flex-row items-start justify-start py-0 pr-9 pl-[125px] box-border relative gap-[25px] max-w-full lg:pl-[62px] lg:box-border mq825:pl-[31px] mq825:box-border ">
          <div className="h-1.5 w-[45px] absolute !m-[0] top-[226px] left-[-2px] rounded-81xl bg-white [transform:_rotate(-90deg)] [transform-origin:0_0]" />
          <GameInfo />
          <section className="flex-1 flex flex-col items-end justify-start gap-[39px] max-w-[calc(100%_-_344px)] mq1425:max-w-full mq825:gap-[19px]">
            {/* <Trends /> */}
            <MatchList />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
