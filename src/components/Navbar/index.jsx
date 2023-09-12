import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import {
  PlusCircleOutlined,
  UserOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div className="container flex items-center justify-between">
      <img
        src={Logo}
        alt="Logo"
        onClick={() => navigate("/")}
        className="cursor-pointer"
      />
      {localStorage.getItem("token") ? (
        <div className="flex items-center gap-[20px] m-2">
          <PlusCircleOutlined
            className="text-[27px] hover:opacity-[0.5] cursor-pointer"
            onClick={() => navigate("/create")}
          />
          <div className="h-[40px] w-[2px] bg-slate-500"></div>
          <div className="flex items-center gap-2 hover:opacity-[0.5] cursor-pointer">
            <UserOutlined className="text-[27px]" />
            <span className="font-semibold text-[20px]">
              {localStorage.getItem("full_name")}
            </span>
          </div>
        </div>
      ) : (
        <button
          onClick={() => navigate("/sign-in")}
          className="bg-blue-500 py-[9px] px-[15px] text-white rounded-lg"
        >
          Sign in
        </button>
      )}
    </div>
  );
};

export default Navbar;
