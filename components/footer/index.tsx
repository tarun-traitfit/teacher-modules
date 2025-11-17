import Image from "next/image";
import React from "react";

type ProjectBannerProps = {
  pageNumber: number | string;
  title: string;
};

const Footer: React.FC<ProjectBannerProps> = ({ pageNumber, title }) => {
  return (
    <div className="w-full">
      <div className="relative px-10 py-4 flex justify-between items-center bg-primary before:content-[''] before:absolute before:top-[-18px] before:right-0 before:w-[290px] before:h-[19px] before:bg-purple-200 before:[clip-path:polygon(45%_0%,850%_66%,36%_100%)]">
        <p className="text-[10px] text-white font-medium">{pageNumber}</p>
        <div className="flex items-center gap-2">
          <Image
            src={`${process.env.NEXT_PUBLIC_ASSETS_BASE_URL}/dronarjun/mission_margdarshan_logo.png`}
            width={32}
            height={32}
            className=""
            alt="banner"
          />
          <p className="text-[10px] text-white font-medium">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
