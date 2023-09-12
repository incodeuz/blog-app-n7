import React from "react";
import EyeIcon from "../../assets/eye.svg";
import parse from "html-react-parser";

const Card = ({ body, views, title, createdAt, user }) => {
  return (
    <div className="rounded-[16px] border-[1px] border-[#eee] p-[20px] my-[30px]">
      <h3 className="card-title text-[28px] font-bold mb-[9px]">{title}</h3>
      <p className="text-[17px] font-normal mb-[25px]">{parse(body)}</p>

      <p className="text-[17px] font-bold mb-[10px] hover:underline cursor-pointer">
        {user?.username}
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
