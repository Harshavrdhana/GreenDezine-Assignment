import Cards from "./landingPageUtils/Cards";
import Transaction from "./landingPageUtils/Transaction";
import CustomBarChart from "./landingPageUtils/CustomBarChart";
import Sidebar from "./landingPageUtils/Sidebar";
import LandNavbar from "./landingPageUtils/LandNavbar";
import PieChart from "./landingPageUtils/PieChart";

const LandingPage = () => {


  return (
    <div className="flex w-screen h-auto">
      <Sidebar />
      <div className="flex flex-col h-auto w-full bg-[#F5F7FA]">
        <LandNavbar />
        <div className="flex w-full h-full justify-between px-[40px] max-sm:px-[20px] pt-[40px] bg-[#F5F7FA]">
          <div className="w-full flex h-full max-xl:flex-col max-xl:overflow-hidden">
            <div className="w-[45vw] h-[200px] ">
              <Cards />
            </div>
            <div className=" w-full min-w-[280px] ml-[50px] max-xl:ml-[0px] max-xl:mt-[60px] h-[200px]">
              <Transaction />
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex justify-start max-lg:flex-col">
          <div>
            <div className="w-full flex justify-start items-center ml-[40px] max-sm:ml-[20px] h-[45px] pb-[15px]">
              <span className="items-center text-[#343C6A]">Weekly Activity</span>
            </div>
            <div className="w-[43vw] flex flex-col justify-center min-w-[280px] h-auto bg-[white] ml-[40px] max-sm:ml-[20px] rounded-3xl mb-[20px]">
              <CustomBarChart />
            </div>
          </div>
          <div>
            <div className="w-full flex justify-start items-center ml-[40px] max-sm:ml-[20px] h-[45px] pb-[15px]">
              <span className="items-center text-[#343C6A]">Weekly Activity</span>
            </div>
            <div className="bg-white rounded-3xl ml-[40px] max-sm:ml-[20px] min-w-[280px] w-[320px]">
              <PieChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;