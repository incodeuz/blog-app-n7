import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="container flex items-center justify-between">
      <img src={Logo} alt="Logo" />
      <button
        onClick={() => navigate("/sign-in")}
        className="bg-blue-500 py-[9px] px-[15px] text-white rounded-lg"
      >
        Sign in
      </button>
    </div>
  );
};

export default Navbar;
