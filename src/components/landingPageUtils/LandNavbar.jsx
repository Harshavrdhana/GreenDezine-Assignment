import { useNavigate } from "react-router-dom";
import Setting from "../../assets/Setting.svg"
import Bell from "../../assets/Bell.svg"
import Photo from "../../assets/Photo.png"
import { AiOutlineLogout } from "react-icons/ai";


const LandNavbar = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.clear();
    navigate("/");
  }

  return (
    <div className="w-full h-[150px] bg-white text-black flex items-center justify-between shadow-lg px-[20px]">
      <div className="text-[22px] text-[#343C6A] max-sm:text-[18px]" >
        Overview
      </div>
      <div className="flex gap-[20px] items-center">
        <input type="text" className="bg-[#F5F7FA] rounded-full w-[250px] text-center h-[40px]"  placeholder="Search for Something" />
        <img src={Setting} alt="" className="h-[40px] max-sm:hidden" />
        <img src={Bell} alt=""  className="h-[40px] max-sm:hidden" />
        <img src={Photo} alt=""  className="rounded-full h-[35px] w-[35px]" />
        
        <span onClick={handleClick} className="cursor-pointer ">
          <AiOutlineLogout className="h-[20px] w-[20px] max-sm:hidden" />
          </span>
      </div>
    </div>
  )
}

export default LandNavbar