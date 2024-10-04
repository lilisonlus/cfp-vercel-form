import Image from "next/image";

import { eventData } from "@/constant/config";

export default function Hero() {
  return (
    <div className="mb-8 flex flex-col items-center justify-center md:mb-14 md:grid md:auto-cols-max md:grid-flow-col lg:mb-24">
      <div className="flex-dir flex md:col-start-2 md:col-end-6 md:row-start-1">
        <p className="mr-2.5 text-7xl font-bold uppercase md:text-[7rem] lg:text-[8rem]">
          Linux
        </p>
        <Image
          height={30}
          width={30}
          className="w-16 md:w-28 lg:w-32"
          src="/svg/linuxday.svg"
          alt="Linux Day Logo"
        />
      </div>
      <p className="mb-3.5 text-7xl font-bold uppercase md:col-start-3 md:col-end-8 md:row-start-2 md:text-[7rem] lg:text-[8rem]">
        Day <span className="text-accent">2024</span>
      </p>
      <p className="text-xl font-extralight md:col-start-2 md:col-end-8 md:row-start-3 md:text-center md:text-3xl lg:text-4xl">
        Giornata nazionale per il software libero
      </p>
      <p className="text-lg font-extrabold text-accent md:hidden">
        {eventData.address}
      </p>
      <p className="text-lg font-extrabold text-accent md:hidden">
        {eventData.city}
      </p>
      <p className="text-lg font-extrabold text-accent md:hidden">
        {eventData.date}
      </p>
    </div>
  );
}
