import Image from "next/image";
import Link from "next/link";

import { eventData } from "@/constant/config";

export default function Navbar() {
  return (
    <header className="mb-7 flex h-1/6 flex-col items-center md:flex-row md:justify-between">
      <Link href={"/"}>
        <Image
          className="w-60 md:w-72 lg:w-80"
          src="/svg/Lilis.svg"
          alt="LILIS Logo"
          height={30}
          width={30}
        />
      </Link>
      <p className="hidden md:block md:text-right md:text-xl md:font-extrabold md:text-accent">
        {eventData.address} /<br />
        {eventData.city} /<br />
        {eventData.date} /
      </p>
    </header>
  );
}
