import React from "react";
import Image from "next/image";
import {
  IconBellFilled,
  IconChevronDown,
} from "@tabler/icons-react";

const Navigation = () => {
  return (
    <div className="flex flex-row items-center justify-between  bg-gradient-to-r from-[#11191A] to-[#296377] h-[79px] px-[36px]">
      <div className="flex gap-2">
        <Image
          src="/asset/Logo-FTL-no-tagline.svg"
          width={88}
          height={31}
          alt="Logo FTL"
        />

        <div
          className={` text-xl font-semibold text-white`}
        >
          iMeeting
        </div>
      </div>

      <div className="flex justify-content-center items-center min-w-[20%] gap-4">
        <div className="">
          <IconBellFilled
            size={28}
            stroke={2}
            className="text-white cursor-pointer hover:text-gray-300"
          />
        </div>
        <div>
          <Image
            src="/asset/avatar.svg"
            width={45}
            height={45}
            alt="Avatar"
          />
        </div>
        <div>John Doe</div>

        <div>
          <IconChevronDown
            size={28}
            stroke={2}
            className="text-white cursor-pointer hover:text-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
