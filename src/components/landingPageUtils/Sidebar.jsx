import { useState } from "react";
import Dash from "../../assets/Dash.png";
import { AiFillHome } from "react-icons/ai";
import Img2 from "../../assets/Transaction.svg";
import Img3 from "../../assets/Accounts.svg";
import Img4 from "../../assets/Investment.svg";
import Img5 from "../../assets/credit-card.svg";
import Img6 from "../../assets/Loan.svg";
import Img7 from "../../assets/Service.svg";
import Img8 from "../../assets/Privilage.svg";
import Img9 from "../../assets/Setting2.svg";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="h-auto w-[250px] border-2 border-gray-100 flex flex-col items-center max-md:hidden">
      <div className="flex items-center justify-center p-[20px] gap-[10px] cursor-pointer">
        <img src={Dash} alt="" className="h-[30px]" />
        <span className="text-xl text-[#4F4F4F]">Bank Dash.</span>
      </div>
      <div className="flex flex-col justify-center gap-[20px] mt-[50px] cursor-pointer">
        <div
          onClick={() => handleItemClick("Dashboard")}
          className="flex items-center gap-4"
          style={{ color: selectedItem === "Dashboard" ? "blue" : "#00000040" }}
        >
          <AiFillHome className="text-[16px] text-gray-400" />
          <span className="text-[14px]"> Dashboard </span>
        </div>
        <div
          onClick={() => handleItemClick("Transaction")}
          className="flex items-center gap-4"
          style={{ color: selectedItem === "Transaction" ? "blue" : "#00000040" }}
        >
          <img src={Img2} alt="" className="h-[16px]" />
          <span className="text-[14px]">Transaction</span>
        </div>
        <div
          onClick={() => handleItemClick("Account")}
          className="flex items-center gap-4"
          style={{ color: selectedItem === "Account" ? "blue" : "#00000040" }}
        >
          <img src={Img3} alt="" className="h-[16px]" />
          <span className="text-[14px]">
            Account
          </span>
        </div>
        <div
          onClick={() => handleItemClick("Investment")}
          className="flex items-center gap-4"
          style={{ color: selectedItem === "Investment" ? "blue" : "#00000040" }}
        >
          <img src={Img4} alt="" className="h-[16px]" />
          <span className="text-[14px]">Investment</span>
        </div>
        <div
          onClick={() => handleItemClick("Credit Cards")}
          className="flex items-center gap-4"
          style={{ color: selectedItem === "Credit Cards" ? "blue" : "#00000040" }}
        >
          <img src={Img5} alt="" className="h-[16px]" />
          <span className="text-[14px]">Credit Cards</span>
        </div>
        <div
          onClick={() => handleItemClick("Loans")}
          className="flex items-center gap-4"
          style={{ color: selectedItem === "Loans" ? "blue" : "#00000040" }}
        >
          <img src={Img6} alt="" className="h-[16px]" />
          <span className="text-[14px]">Loans</span>
        </div>
        <div
          onClick={() => handleItemClick("Services")}
          className="flex items-center gap-4"
          style={{ color: selectedItem === "Services" ? "blue" : "#00000040" }}
        >
          <img src={Img7} alt="" className="h-[16px]" />
          <span className="text-[14px]">Services</span>
        </div>
        <div
          onClick={() => handleItemClick("My Privileges")}
          className="flex items-center gap-4"
          style={{ color: selectedItem === "My Privileges" ? "blue" : "#00000040" }}
        >
          <img src={Img8} alt="" className="h-[16px]" />
          <span className="text-[14px]">My Privileges</span>
        </div>
        <div
          onClick={() => handleItemClick("Settings")}
          className="flex items-center gap-4"
          style={{ color: selectedItem === "Settings" ? "blue" : "#00000040" }}
        >
          <img src={Img9} alt="" className="h-[16px]" />
          <span className="text-[14px]">Settings</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar