"use client";

import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { Button } from "@/components/common/button";
import { IconTitledArrow } from "@/public/assets/icons";

interface CardProps {
  title: string;
  text: string;
  btnText: string;
  icon: StaticImageData;
  iconWhite: StaticImageData;
}

const Card: React.FC<CardProps> = ({
  title,
  text,
  btnText,
  icon,
  iconWhite,
}) => {
  return (
    <div className="relative flex flex-col justify-between group border border-white/10 pl-6 pr-4 lg:pl-10 lg:pr-10 xl:pl-20 xl:pr-15 gap-y-4 lg:gap-y-6 pt-6 pb-6 lg:pt-8 lg:pb-8 xl:pt-10 xl:pb-15 w-full lg:w-1/2 hover:bg-hover-grey transition duration-700 ease-in-out">
      <div className="flex flex-col gap-y-4 lg:gap-y-6">
        <div className="absolute top-4 right-4 lg:top-10 lg:right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <Button icon={IconTitledArrow} variant="secondary" onClick={() => {}} />
        </div>
        <div className="flex items-center">
          <div className="w-10 h-10 lg:w-15 lg:h-15 flex items-center justify-center">
            <Image
              src={icon}
              alt={title}
              width={60}
              height={60}
              className="transition-opacity duration-700 ease-in-out group-hover:opacity-0"
            />
            <Image
              src={iconWhite}
              alt={title}
              width={60}
              height={60}
              className="absolute w-10 h-10 lg:w-15 lg:h-15 transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100"
            />
          </div>
          <h3 className="text-white text-lg lg:text-2xl ml-2 lg:ml-6">{title}</h3>
        </div>
        <p
          className="text-text-darken-3 group-hover:text-text-base transition duration-700 ease-in-out"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
      <Button text={btnText} onClick={() => {}} />
    </div>
  );
};

export default Card;
