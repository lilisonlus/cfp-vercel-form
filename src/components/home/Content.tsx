import Image from "next/image";
import Link from "next/link";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Content() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mb-2 text-center text-lg font-bold capitalize md:mb-12 md:text-3xl lg:text-4xl">
        Ti piacerebbe far parte di questo evento? <br />
        Scegli come
      </p>
      <div className="flex flex-col items-center justify-center md:flex-row">
        {/* Speaker */}
        <div className="flex flex-col items-center justify-center md:relative md:items-end">
          <Image
            height={30}
            width={30}
            className="hidden lg:absolute lg:-left-36 lg:top-16 lg:block lg:w-44 xl:-left-44 xl:w-64"
            src="/svg/speaker.svg"
            alt="Speaker"
          />
          <div className="relative mb-1 flex flex-row items-center justify-center md:mb-5">
            <FaAngleRight className="absolute -left-5 h-5 fill-accent md:hidden" />
            <p className="text-4xl font-bold text-accent md:text-4xl lg:text-5xl">
              Speaker
            </p>
            <Image
              height={30}
              width={30}
              className="absolute -right-16 top-0 w-10 md:hidden"
              src="/svg/mic.svg"
              alt="Microphone"
            />
          </div>
          <div className="mb-2.5 md:relative lg:mb-5">
            <FaAngleLeft className="hidden fill-accent md:absolute md:-right-9 md:top-3 md:block md:w-9 lg:w-10" />
            <p className="text-center text-lg font-semibold md:text-right lg:text-xl">
              Mostraci la tua <span className="text-accent">passione</span>
              <br />
              per la cultura e il software libero{" "}
            </p>
          </div>
          <div className="mb-2.5 md:relative lg:mb-12">
            <FaAngleLeft className="hidden fill-accent md:absolute md:-right-9 md:top-3 md:block md:w-9 lg:w-10" />
            <p className="text-center text-lg font-semibold md:text-right lg:text-xl">
              L&apos;intervento dovra&apos; avere una durata <br /> massima di{" "}
              <span className="text-accent">15</span> minuti
            </p>
          </div>
          <Link
            href={"/call-for-talk"}
            className="h-8 rounded bg-accent px-2 text-center text-xl font-bold lg:h-10 lg:text-2xl"
          >
            Candidati
          </Link>
        </div>
        {/* Divider */}
        <hr className="lg:h-70 my-4 h-0.5 w-80 border-0 bg-accent md:absolute md:my-10 md:h-64 md:w-0.5 md:bg-accent" />
        {/* Sponsor */}
        <div className="flex flex-col items-center justify-center md:relative md:ml-20 md:items-start">
          <Image
            height={30}
            width={30}
            className="hidden lg:absolute lg:-right-28 lg:block lg:w-28 xl:-right-48 xl:w-48"
            src="/svg/sponsor.svg"
            alt="Sponsor"
          />
          <div className="relative mb-1 flex flex-row items-center justify-center md:mb-5">
            <FaAngleRight className="absolute -left-5 h-5 fill-accent md:hidden" />
            <p className="text-4xl font-bold text-accent md:text-4xl lg:text-5xl">
              Sponsor
            </p>
            <Image
              height={30}
              width={30}
              className="absolute -right-16 top-0 w-10 md:hidden"
              src="/svg/paper.svg"
              alt="Paper"
            />
          </div>
          <div className="mb-2.5 md:relative lg:mb-5">
            <FaAngleRight className="hidden fill-accent md:absolute md:-left-9 md:top-3 md:block md:w-9 lg:w-10" />
            <p className="text-center text-lg font-semibold md:text-left lg:text-xl">
              Vuoi <span className="text-accent">supportare</span> l&apos;evento
              con un <br />
              contributo economico
            </p>
          </div>
          <div className="mb-2.5 md:relative lg:mb-12">
            <FaAngleRight className="hidden fill-accent md:absolute md:-left-9 md:top-3 md:block md:w-9 lg:w-10" />
            <p className="text-center text-lg font-semibold md:text-left lg:text-xl">
              Nome e logo del tuo brand saranno <br />
              riportati sul materiale promozionale
            </p>
          </div>
          <Link
            href={"/call-for-sponsor"}
            className="h-8 rounded bg-accent px-2 text-center text-xl font-bold lg:h-10 lg:text-2xl"
          >
            Sponsorizza
          </Link>
        </div>
      </div>
    </div>
  );
}
