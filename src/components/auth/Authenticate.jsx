import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Authenticate = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  return <Outlet />;
};

export default Authenticate;
