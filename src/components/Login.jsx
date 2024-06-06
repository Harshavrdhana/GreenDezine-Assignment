import { useState,useEffect } from "react";
import Navbar from "./utils/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import Img from "../assets/google.png";
import Anime from "../assets/Anime.png";
import { userData } from "./utils/userData";

const Login = () => {
  const [email, setEmail] = useState("harsha@gmail.com");
  const [password, setPassword] = useState("harsha12");
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn,navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = userData.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setIsLoggedIn(true); 
    } else {
      alert("Please enter correct login credentials.");
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden">
      <Navbar />
      <div className="flex lg:flex-row flex-col h-[90vh] w-full justify-evenly items-center bg-white">
        <div className="w-[300px]">
          <div className="width-full">
            <h1 className="text-black text-5xl font-bold mb-[30px]">
              Sign in to
            </h1>
            <span className="text-black text-3xl font-medium">
              Loren Ipsum Simply
            </span>
          </div>
          <div className="flex flex-col justify-center mt-[50px] font-normal">
            <span>If You dont have an account</span>
            <span>
              You can{" "}
              <Link className="text-blue-600 font-bold" to="/signup">
                Register here!
              </Link>
            </span>
          </div>
        </div>
        <div className="w-[300px] flex flex-col bg-white rounded-lg h-auto">
          <span className="text-black text-3xl font-semibold max-lg:hidden">Sign in</span>
          <form className="flex flex-col justify-center mt-[40px]" onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center gap-[30px]">
              <input
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[45px] rounded-lg border-none pl-[10px] bg-[#F0EFFF] text-gray-400 placeholder:text-[#C6C3FF] focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-[45px] rounded-lg border-none pl-[10px] bg-[#F0EFFF] text-gray-400 placeholder:text-[#C6C3FF] focus:outline-none"
              />
            </div>

            <span className="text-gray-400 flex justify-end mt-3">
              Forgot Password?
            </span>

            <button
              type="submit"
              className="w-full h-[45px] rounded-lg border-none pl-[10px] bg-[#4D47C3] text-white mt-10 placeholder:text-[#C6C3FF]"
            >
              Login
            </button>

            <span className="flex justify-center text-gray-400 mt-7">
              or continue with
            </span>
            <div className="mt-7 flex gap-[10px] items-center justify-center">
              <span className="text-4xl">
                <FaApple />
              </span>
              <img src={Img} alt="" className="h-[30px] w-[30px]" />
            </div>
          </form>
        </div>
      </div>
      <div
        className="absolute hidden lg:block"
        style={{ left: "38%", bottom: "0" }}
      >
        <img src={Anime} alt="Anime" className="h-[60vh]"  />
      </div>
    </div>
  );
};

export default Login;
