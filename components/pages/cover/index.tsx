"use client"

import Image from "next/image";
import teacherMaterial from "@/public/Images/teacher-material.png";
import { merge } from "@/utils/commonHelper";

const Cover = ({
  title,
  characterTitle,
  className,
}: {
  title: string;
  characterTitle: string;
  className: string;
}) => {
  return (
    <div className="bg-login-bg bg-cover w-full flex flex-col min-h-screen justify-between">
      <div className="px-10 pt-[53px]">
        <Image
          src={`${process.env.NEXT_PUBLIC_ASSETS_BASE_URL}/dronarjun/mission_margdarshan.png`}
          id="logo"
          width={300}
          height={120}
          alt={"logo"}
        />
        <div className="relative mt-[62px]">
          <p
            className={
              "text-sm tracking-[2px] font-normal text-black-gay-300 after:content-[''] after:absolute after:top-2 after:left-[98px] after:w-[137px] after:h-[2px] after:bg-blue-gradient"
            }
          >
            {title}
          </p>
        </div>
        <h1
          className={merge(
            "ml-[2px] mt-[5px] text-[64px] font-semibold max-w-[426px] w-full bg-clip-text text-transparent bg-blue-gradient pt-1 leading-[1.2]",
            className
          )}
        >
          {characterTitle}
        </h1>
      </div>
      <div className="flex items-center justify-start ">
        <Image src={teacherMaterial} width={547} height={456} alt="banner" />
      </div>
    </div>
  );
};

export default Cover;
