import Chip from "../../assets/Chip.png"
import svg from "../../assets/Mastercard.svg"

const Cards = () => {
  return (
    <>
      <div className="flex items-center justify-between pb-[15px] min-w-[280px]">
        <span className="text-gray-600 text-[20px]">My Cards</span>
        <span className="text-gray-600 text-[14px]">See All</span>
      </div>
      <div className=" flex justify-between h-full w-full text-white gap-[20px]" >
        <div className="min-w-[280px] w-[320px] flex flex-col justify-between h-full bg-[#1814F3] rounded-3xl p-[15px]">
          <div className="flex justify-between ">
            <div className="flex flex-col">
              <span className="text-gray-300 text-[10px]">Balance</span>
              <span className="text-gray-200">$5,456</span>
            </div>
            <img
              src={Chip}
              alt=""
              className="w-[35px]"
            />
          </div>
          <div className="flex justify-start gap-[15%]">
            <div className="flex flex-col">
              <span className="text-gray-300 text-[12px]">CARD HOLDER</span>
              <span className="text-gray-200 text-[13px]">Eddy Cusuma</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-300 text-[12px]">VALID THRU</span>
              <span className="text-gray-200 text-[13px]">12/22</span>
            </div>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-100 ">
              3778 **** **** 1234
            </span>
            <img src={svg} alt="" />
          </div>
        </div>
        <div className="min-w-[280px] w-[320px] flex flex-col justify-between h-full bg-white rounded-3xl p-[15px] border">
          <div className="flex justify-between ">
            <div className="flex flex-col">
              <span className="text-[#718EBF] text-[10px]">Balance</span>
              <span className="text-gray-600">$5,456</span>
            </div>
            <img
              src={Chip}
              alt=""
              className="w-[35px]"
            />
          </div>
          <div className="flex justify-start gap-[15%]">
            <div className="flex flex-col">
              <span className="text-[#718EBF] text-[12px]">CARD HOLDER</span>
              <span className="text-gray-600 text-[13px]">Eddy Cusuma</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#718EBF] text-[12px]">VALID THRU</span>
              <span className="text-gray-600 text-[13px]">12/22</span>
            </div>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700 ">
              3778 **** **** 1234
            </span>
            <img src={svg} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards