import { merge } from "@/utils/commonHelper";
import React from "react";

type ProjectBannerProps = {
  className?: string;
  title: string;
};

const Header: React.FC<ProjectBannerProps> = ({ className, title }) => {
  return (
    <div>
      <h1
        className={merge(
          "text-[10px] font-normal tracking-[1.5px] text-gray uppercase border-b-2 max-w-[233px] pb-2 border-purple-300",
          className
        )}
      >
        {title}
      </h1>
    </div>
  );
};

export default Header;
