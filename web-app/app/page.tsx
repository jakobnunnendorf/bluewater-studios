import Image from "next/image";

export default function Home() {
  return (
    <section className="h-fit">
      <div className="h-fit">
        <div className="h-[93vh] flex flex-col justify-center">
          <h1 className="z-10 text-7xl font-extrabold px-16 text-white/75">
            Boutique Websites
            <br /> for{" "}
            <span className="z-10 text-[#FDEBBD]/75  text-6xl text-center">
              world-class
            </span>
            <br /> Yacht Interior Designers
          </h1>
          <h2 className="text-4xl p-8 font-extrabold px-20">
            Do your Portfolio justice
          </h2>
          <ul className="z-10 flex gap-12 justify-end px-16 w-1/2 mr-0 ml-auto absolute bottom-20 right-0">
            <li className="-2 w-fit aspect-square p-2 -[#1974EF] rounded-xl flex items-center justify-center">
              <Image
                src="/social-icons/Facebook.png"
                height={30}
                width={30}
                alt="Facebook button"
              />
            </li>
            <li className="-2 w-fit aspect-square p-2 -black rounded-xl flex items-center justify-center">
              <Image
                src="/social-icons/Instagram.png"
                height={30}
                width={30}
                alt="Facebook button"
              />
            </li>
            <li className="-2 w-fit aspect-square p-2 -[#0A66C2] rounded-xl flex items-center justify-center">
              <Image
                src="/social-icons/LinkedIn.png"
                height={30}
                width={30}
                alt="Facebook button"
              />
            </li>
            <li className="-2 w-fit aspect-square p-2 -[#4AC859] rounded-xl flex items-center justify-center">
              <Image
                src="/social-icons/WhatsApp.png"
                height={30}
                width={30}
                alt="Facebook button"
              />
            </li>
            <li className="-2 w-fit aspect-square p-2 -white rounded-xl flex items-center justify-center">
              <Image
                src="/social-icons/X (formerly Twitter).png"
                height={30}
                width={30}
                alt="Facebook button"
              />
            </li>
            <li className="-2 w-fit aspect-square p-2 -[#FE0000] rounded-xl flex items-center justify-center">
              <Image
                src="/social-icons/YouTube.png"
                height={30}
                width={30}
                alt="Facebook button"
              />
            </li>
          </ul>
        </div>
        <video autoPlay loop muted className="absolute top-0 w-full z-0 ">
          <source src="/bg-video.mov" type="video/mp4" />
        </video>
      </div>
      <div className="bg-slate-400 h-fit relative w-full  text-slate-800">
        <h2 className="text-6xl text-center font-bold pt-32">Portfolio</h2>
        <h3 className="text-2xl text-center font-bold pt-8">
          {" "}
          State-of-the-art websites for our yacht interior designers
        </h3>
        <div className="w-full px-4 h-full flex py-12">
          <div className="w-1/2  h-fit">
            <figure className="relative w-full ">
              <Image
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={900}
                height={600}
                src="/pf1.png"
                alt="test"
              />
            </figure>
            <figure className="relative w-full ">
              <Image
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={900}
                height={600}
                src="/pf3.png"
                alt="test"
              />
            </figure>
          </div>
          <div className="w-1/2  h-fit">
            <figure className="relative w-full">
              <Image
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={900}
                height={600}
                src="/pf2.png"
                alt="test"
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="bg-slate-800 text-white">
        <h2 className="text-white  font-extrabold text-4xl text-center p-28 pb-2">
          Guaranteed results
        </h2>
        <h3 className="text-white/60  font-extrabold text-3xl text-center pb-14">
          or 100% money back
        </h3>
        <div className="grid grid-cols-2">
          <video autoPlay loop muted className="w-full">
            <source src="/case study.mp4" type="video/mp4"/>
          </video>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-4xl">Results after 3 months</h3>
            <h4>+380% Clicks</h4>
            <h4>+37% More leads</h4>
            <h4>+5% Conversion</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
