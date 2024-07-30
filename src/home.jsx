import GroupComponent from "../components/GroupComponent";
import NavigationBar from "../components/NavigationBar";
import GameInfo from "../components/GameInfo";
import MatchList from "../components/MatchList";
import FrameComponent from "../components/FrameComponent";

const IMINN = () => {
  return (
    <div className="w-full relative bg-whitesmoke-200 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[25px] box-border gap-[25px] leading-[normal] tracking-[normal]">
      <GroupComponent />
      <NavigationBar />
      <main className="self-stretch flex flex-row items-start justify-start py-0 pr-9 pl-[125px] box-border relative gap-[25px] max-w-full lg:pl-[62px] lg:box-border mq825:pl-[31px] mq825:box-border">
        <div className="h-1.5 w-[45px] absolute !m-[0] top-[226px] left-[-2px] rounded-81xl bg-mediumseagreen [transform:_rotate(-90deg)] [transform-origin:0_0]" />
        <GameInfo />
        <section className="flex-1 flex flex-col items-end justify-start gap-[39px] max-w-[calc(100%_-_344px)] mq1425:max-w-full mq825:gap-[19px]">
          <MatchList />
          <FrameComponent />
        </section>
      </main>
    </div>
  );
};

export default home;