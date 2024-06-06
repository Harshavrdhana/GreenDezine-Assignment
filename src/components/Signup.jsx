import Navbar from "./utils/Navbar"
import { FaApple } from "react-icons/fa";
import Img from "../assets/google.png"
import { Link, useNavigate } from "react-router-dom";
import Anime from "../assets/Anime.png";
import { useState } from "react";
import { userData } from "./utils/userData";

const Signup = () => {
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('') 
  const [confirmPassword, setConfirmPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [contactNumber, setContactNumber] = useState('')

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword || !userName || !contactNumber) {
      alert("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const newUser = {
      id: userData.length + 1,
      userName: userName,
      email: email,
      password: password,
      contactNumber: contactNumber,
    };

    userData.push(newUser);

    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setUserName('');
    setContactNumber('');

    alert("Registration successful!");

    navigate("/");
  };

  return (
    <div className=" h-screen w-screen ">
      <Navbar />
      <div className=" flex lg:flex-row flex-col h-[90vh] w-full justify-evenly items-center bg-white ">
        <div className="w-[300px]">
          <div className="width-full">
            <h1 className="text-black text-5xl font-bold mb-[30px]">Sign Up to</h1>
            <span className="text-black text-3xl font-medium">Loren Ipsum Simply</span>
          </div>
          <div className="flex flex-col justify-center mt-[50px] font-normal">
            <span>If You already have an account</span>
            <span>You can <Link className="text-blue-600 font-bold" to="/">Login here!</Link></span>
          </div>
        </div>
        <div className="w-[300px] flex flex-col bg-white rounded-lg h-auto" >
          <span className="text-black text-3xl font-semibold max-lg:hidden">Sign Up</span>
          <form className="flex flex-col justify-center mt-[40px]" onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center gap-[15px]">
              <input
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[45px] rounded-lg border-none pl-[10px] bg-[#F0EFFF] text-gray-600 placeholder:text-[#C6C3FF] focus:outline-none"
              />
              <input
                type="text"
                placeholder="Create user name"
                onChange={(e) => setUserName(e.target.value)}
                className="w-full h-[45px] rounded-lg border-none pl-[10px] bg-[#F0EFFF] text-gray-600 placeholder:text-[#C6C3FF] focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Contact number"
                onChange={(e) => setContactNumber(e.target.value)}
                className="w-full h-[45px] rounded-lg border-none pl-[10px] bg-[#F0EFFF] text-gray-600 placeholder:text-[#C6C3FF] focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-[45px] rounded-lg border-none pl-[10px] bg-[#F0EFFF] text-gray-600 placeholder:text-[#C6C3FF] focus:outline-none"
              />
              <input
                type="password"
                placeholder="Confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full h-[45px] rounded-lg border-none pl-[10px] bg-[#F0EFFF] text-gray-600 placeholder:text-[#C6C3FF] focus:outline-none"
              />
            </div>

            <button
              className="w-full h-[45px] rounded-lg border-none pl-[10px] bg-[#4D47C3] text-white mt-10 placeholder:text-[#C6C3FF]"
            >Register</button>

            <span className="flex justify-center text-gray-400 mt-7">or continue with</span>
            <div className="mt-7 flex gap-[10px] items-center justify-center">
              <span className="text-4xl"><FaApple /></span>
              <img
                src={Img}
                alt=""
                className="h-[30px] w-[30px]"
              />
            </div>
          </form>

        </div>
      </div>
      <div className="absolute hidden lg:block" style={{ left: '38%', bottom: '0' }} >
        <img
          src={Anime}
          alt="Anime"
          className="h-[60vh]"
        />
      </div>

    </div>
  )
}

export default Signup