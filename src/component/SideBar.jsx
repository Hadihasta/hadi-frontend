import React from "react";
import { IconHome } from "@tabler/icons-react";
import { IconUser } from "@tabler/icons-react";

const SideBar = () => {
  return (
    <div className="text-black absolute p-[10px] bg-white max-w-[90px] border border-r border-[#F7F7F7] h-screen  flex flex-col gap-[15px]">
      <div className="bg-[#4A8394] w-[49px] h-[49px] rounded-lg flex items-center justify-center mx-auto mt-10">
        <IconHome
          size={24}
          stroke={2}
          className="text-white cursor-pointer"
        />
      </div>
      <div className="mx-auto">
        <IconUser
          size={24}
          stroke={2}
          className="text-[#4A8394]  cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SideBar;
