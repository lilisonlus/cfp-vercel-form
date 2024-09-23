import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mb-8 sm:flex sm:flex-col sm:items-center sm:justify-center lg:mb-24 lg:grid lg:auto-cols-max lg:grid-flow-col">
        <div className="flex-dir flex items-center justify-center lg:col-start-2 lg:col-end-6 lg:row-start-1">
          <p className="mr-2.5 text-7xl font-bold uppercase lg:text-[8rem]">
            Linux
          </p>
          <img
            className="w-16 lg:w-32"
            src="/linuxday_fullcolor.svg"
            alt="Linux Day Logo"
          />
        </div>
        <p className="mb-3.5 inline-block text-7xl font-bold uppercase lg:col-start-3 lg:col-end-8 lg:row-start-2 lg:text-[8rem]">
          Day <span className="text-accent">2024</span>
        </p>
        <p className="text-xl font-extralight lg:col-start-2 lg:col-end-8 lg:row-start-3 lg:text-center lg:text-4xl">
          Giornata nazionale per il software libero
        </p>
        <div className="flex flex-col items-center justify-center lg:hidden">
          <p className="text-lg font-extrabold text-accent">
            Indirizzo / Benevento (BN) / 26 Ottobre
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="mb-2 text-center text-lg font-bold capitalize lg:mb-12 lg:text-4xl">
          Ti piacerebbe far parte di questo evento? <br />
          Scegli come
        </p>
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <div className="flex flex-col items-center justify-center lg:relative lg:items-end">
            <img
              className="hidden lg:absolute lg:-left-36 lg:block lg:w-48 xl:w-64 xl:-left-44"
              src="/speaker.svg"
              alt="Speaker"
            />
            <div className="relative mb-1 flex flex-row items-center justify-center lg:mb-5">
              <img
                className="absolute -left-8 w-10 lg:hidden"
                src="/angle.svg"
                alt="Angle bracket"
              />
              <p className="text-4xl font-bold text-accent lg:text-5xl">
                Speaker
              </p>
              <img
                className="absolute -right-16 top-0 w-10 lg:hidden"
                src="/mic.svg"
                alt="Microphone"
              />
            </div>
            <div className="lg:relative">
              <img
                className="hidden lg:absolute lg:-right-9 lg:top-3 lg:block lg:w-10"
                src="/left_angle.svg"
                alt="Angle bracket"
              />
              <p className="mb-2.5 text-center text-lg font-semibold lg:mb-5 lg:text-right lg:text-xl">
                Mostraci la tua <span className="text-accent">passione</span>
                <br />
                per la cultura e il software libero{" "}
              </p>
            </div>
            <div className="lg:relative">
              <img
                className="hidden lg:absolute lg:-right-9 lg:top-3 lg:block lg:w-10"
                src="/left_angle.svg"
                alt="Angle bracket"
              />
              <p className="mb-2.5 text-center text-lg font-semibold lg:mb-12 lg:text-right lg:text-xl">
                L’intervento dovra’ avere una durata <br /> massima di{" "}
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
          <hr className="my-4 h-0.5 w-80 border-0 bg-accent lg:absolute lg:my-10 lg:h-80 lg:w-0.5 lg:bg-accent" />
          <div className="flex flex-col items-center justify-center lg:relative lg:ml-20 lg:items-start">
            <img
              className="hidden lg:absolute lg:-right-28 lg:block lg:w-32 xl:w-48 xl:-right-48"
              src="/sponsor.svg"
              alt="Sponsor"
            />
            <div className="relative mb-1 flex flex-row items-center justify-center">
              <img
                className="absolute -left-8 w-10 lg:hidden"
                src="/angle.svg"
                alt="Angle bracket"
              />
              <p className="text-4xl font-bold text-accent lg:mb-4 lg:text-5xl">
                Sponsor
              </p>
              <img
                className="absolute -right-16 top-0 w-10 lg:hidden"
                src="/paper.svg"
                alt="Paper"
              />
            </div>
            <div className="lg:relative">
              <img
                className="hidden lg:absolute lg:-left-9 lg:top-3 lg:block lg:w-10"
                src="/right_angle.svg"
                alt="Angle bracket"
              />
              <p className="mb-2.5 text-center text-lg font-semibold lg:mb-5 lg:text-left lg:text-xl">
                Vuoi <span className="text-accent">supportare</span> l’evento
                con un <br />
                contributo economico
              </p>
            </div>
            <div className="lg:relative">
              <img
                className="hidden lg:absolute lg:-left-9 lg:top-3 lg:block lg:w-10"
                src="/right_angle.svg"
                alt="Angle bracket"
              />
              <p className="mb-2.5 text-center text-lg font-semibold lg:mb-12 lg:text-left lg:text-xl">
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
    </>
  );
}
