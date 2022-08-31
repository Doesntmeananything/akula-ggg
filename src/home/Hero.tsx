import Image from "next/image";

import heroPic from "../../public/images/hero.jpeg";

export const Hero = () => {
  return (
    <section className="pt-10 grid lg:[grid-template-columns:minmax(68ch,1fr)_18ch] md:[grid-template-columns:42ch_auto] [grid-template-areas:'title''image''awards'] md:[grid-template-areas:'title_awards''image_image']">
      <h1 className="text-ggg-gray-100 font-semibold text-[45px] md:text-[40px] lg:text-[110px] leading-[100%] pb-4 md:pb-12 [grid-area:title]">
        Award winning studio based in Auckland.
      </h1>

      <div className="[grid-area:image] relative h-80 md:h-[347px] lg:h-[850px]">
        <Image
          src={heroPic}
          layout="fill"
          alt=""
          objectFit="cover"
          objectPosition="top"
          priority
          quality={100}
        />
      </div>

      <div className="flex gap-2 md:flex-col pt-3 md:justify-start md:items-end justify-between [grid-area:awards]">
        <span className="font-mont text-sm md:text-base lg:text-2xl font-semibold text-ggg-gray-50 md:pr-6 lg:pr-4">
          BAFTA 2020
        </span>

        <div className="text-ggg-gray-300 flex flex-col text-[10px] md:text-xs lg:text-base font-light">
          <span>Evolving Game Winner </span>
          <span>Path Of Exile</span>
        </div>
      </div>
    </section>
  );
};
