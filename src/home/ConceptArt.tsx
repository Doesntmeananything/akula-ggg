import Image from "next/image";

import { Divider, ShortArrowIcon } from "../ui";

import concept1 from "../../public/images/concept/concept1.png";
import concept2 from "../../public/images/concept/concept2.png";
import concept3 from "../../public/images/concept/concept3.png";

const slides = [
  {
    src: concept1,
    name: "Manor & Crypt",
    author: "Chander Lieve",
  },
  {
    src: concept2,
    name: "Sister Cassia",
    author: "Qingyi Li",
  },
  {
    src: concept3,
    name: "Dark Magic Armour",
    author: "Qingyi Li",
  },
];

export const ConceptArt = () => {
  return (
    <section className="pt-24 md:pt-14">
      <Divider className="mb-[10px]" />

      <div className="flex text-xs lg:text-lg text-ggg-gray-200 pb-9 ">
        <h2 className="basis-1/6">Concept Art</h2>

        <button className="underline underline-offset-[6px] decoration-ggg-underline">
          Path of Exile 2
        </button>
      </div>

      <div className="snap-x snap-proximity flex gap-4 xl:gap-40 overflow-x-auto relative text-ggg-gray-200 no-scrollbar">
        {slides.map((slide) => (
          <div key={slide.name} className="relative snap-center snap-always flex flex-col">
            <div className="relative w-[255px] h-[173px] xl:w-[870px] xl:h-[590px]">
              <Image
                src={slide.src}
                alt={slide.name}
                quality={100}
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start pt-4 xl:pt-5 xl:pb-2">
              <span className="text-lg xl:text-[40px] leading-6 lg:leading-7">{slide.name}</span>
              <span className="text-[10px] xl:text-lg font-light lg:font-normal lg:leading-4">
                by {slide.author}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const SlideButton = () => {
  return (
    <button className="bg-transparent flex justify-center items-center w-[76px] h-[76px] bg-gray-200 border-2 rounded-full">
      <ShortArrowIcon className="h-4 w-4" />
    </button>
  );
};
