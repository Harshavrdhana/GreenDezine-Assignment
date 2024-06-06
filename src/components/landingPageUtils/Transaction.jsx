import Img1 from "../../assets/Transaction1.svg"
import Img2 from "../../assets/Transaction2.svg"
import Img3 from "../../assets/Transaction3.svg"

const Transaction = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full flex justify-start items-center h-[45px] pb-[15px]">
        <span className="items-center text-[#343C6A]">Recent Transaction</span>
      </div>
      <div className=" h-full flex flex-col justify-between p-[20px] min-w-[310px] bg-white rounded-3xl w-[310px]">
        <div className="flex justify-between items-center ">
          <img src={Img1} alt="" className="w-[45px]" />
          <div className="flex flex-col w-[140px]">
            <span className="text-gray-600 text-[13px]">Deposite from my Card</span>
            <span className="text-[#718EBF] text-[13px]">28 January 2021</span>
          </div>
          <span className="text-[#FF4B4A]">-$850</span>
        </div>
        <div className="flex justify-between items-center ">
          <img src={Img2} alt="" className="w-[4y5px]" />
          <div className="flex flex-col w-[140px]">
            <span className="text-gray-600 text-[13px]">Deposite Paypal</span>
            <span className="text-[#718EBF] text-[13px]">25 January 2021</span>
          </div>
          <span className="text-[#FF4B4A]">-$850</span>
        </div>
        <div className="flex justify-between items-center ">
          <img src={Img3} alt="" className="w-[45px]" />
          <div className="flex flex-col w-[140px]">
            <span className="text-gray-600 text-[13px]">Jemi Wilson</span>
            <span className="text-[#718EBF] text-[13px]">21 January 2021</span>
          </div>
          <span className="text-[#FF4B4A]">-$850</span>
        </div>
      </div>
    </div>

  )
}

export default Transaction