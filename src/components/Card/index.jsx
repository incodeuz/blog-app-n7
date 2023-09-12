import React from "react";
import EyeIcon from "../../assets/eye.svg";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

const Card = ({ body, views, title, createdAt, user, id }) => {
  return (
    <div className="rounded-[16px] border-[1px] border-[#eee] p-[20px] my-[30px] hover:border-black">
      <Link to={localStorage.getItem("token") ? `/details/${id}` : "/sign-in"}>
        <h3 className="card-title text-[28px] font-bold mb-[9px]">{title}</h3>
      </Link>
      <p className="text-[17px] font-normal mb-[25px]">{parse(body.trim())}</p>

      <p className="text-[17px] font-bold mb-[10px] hover:underline cursor-pointer">
        {localStorage.getItem("my_id") === user.id ? "👤 You" : user?.username}
      </p>
      <div className="flex items-center gap-[20px]">
        <p>{new Date(createdAt).toLocaleString()}</p>
        <div className="flex items-center gap-[5px]">
          <img className="w-[20px]" src={EyeIcon} alt="" />
          <span>{views}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
