import Image from "next/image";

import { Divider } from "../ui";

import art1 from "../../public/images/home_art1_small.jpeg";
import art2 from "../../public/images/home_art2_small.png";

export const About = () => {
  return (
    <section className="pt-24 md:pt-20 lg:pt-[285px]">
      <Divider className="mb-[10px]" />

      <div className="flex text-xs lg:text-lg lg:gap-16 text-ggg-gray-200">
        <h2 className="basis-2/4">About</h2>

        <button className="md:hidden lg:inline underline underline-offset-[6px] decoration-ggg-gray-400">
          Read more
        </button>
      </div>

      <div className="text-ggg-gray-200 py-10 md:py-11 flex flex-col md:flex-row md:gap-16 md:items-start lg:justify-between">
        <p className="text-lg lg:text-[40px] leading-[120%] basis-6/12 max-w-3xl">
          Grinding Gear Games was founded in November 2006 in Auckland, New Zealand. Its founding
          members come from various countries and have a selection of diverse backgrounds ranging
          from artificial intelligence and software security to industrial design to professional
          tournament game play.
        </p>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-10 text-sm md:text-xs lg:text-lg pt-[30px] md:pt-0 leading-[150%] space-y-5 lg:space-y-0 font-light lg:font-normal basis-5/12">
          <p className="max-w-sm">
            GGG developed Path of Exile, which was released on 23 October 2013. During the open
            beta, from 23 January 2013 to release, more than 46,000 people participated.
          </p>
          <p className="max-w-sm [grid-column:1] [grid-row:2]">
            GGG crowd funded Path of Exile through allowing users to pre-purchase in-game
            microtransactions ahead of the games launch date. In only 6 days, GGG was able to raise
            over $245,000.
          </p>
          <p className="max-w-sm">
            In 2018, Tencent became a majority holder in GGG, acquiring 86.67% of the company&apos;s
            shares. The three co-founders hold the remaining 13.26%. Two of the co-founders also sit
            on the board of directors, alongside 3 appointed by Tencent in April 2018.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between gap-4 items-end pb-6">
        <div className="relative w-full h-[337px] md:h-[353px] md:w-[433px] lg:w-[870px] lg:h-[850px]">
          <Image src={art1} layout="fill" objectFit="cover" alt="" />
        </div>
        <div className="relative w-2/4 h-[353px] md:h-[353px] md:w-52 lg:w-[405px] lg:h-[680px]">
          <Image src={art2} layout="fill" objectFit="cover" alt="" />
        </div>
      </div>

      <div className="md:pt-10 md:flex md:gap-8 items-center lg:justify-end xl:gap-52">
        <div className="flex items-center gap-6 md:gap-8">
          <span className="font-shocka text-ggg-gray-500 text-[170px] md:text-[200px] lg:text-[360px]">
            38
          </span>

          <span className="text-ggg-gray-200 text-2xl lg:text-3xl xl:text-[40px] leading-[110%] pb-8 md:pb-0 md:w-36 lg:w-60">
            Unique Leagues Since launch
          </span>
        </div>

        <div className="text-sm md:text-xs lg:text-base xl:text-xl basis-7/12 font-light lg:font-normal leading-[17px] space-y-5 -mt-10 text-ggg-gray-200 max-w-[414px]">
          <p>
            Leagues in Path of Exile represent the game worlds that characters exist within. A
            single character can only belong to one league at any time, and can&apos;t interact with
            characters outside that league.
          </p>

          <p>
            These leagues are intended to introduce and test new content while providing players
            with a fresh economy. Challenge leagues are currently released on a 13 week cycle. In
            addition, each pair of leagues has a set of optional challenges that can be completed
            for a prize.
          </p>
        </div>
      </div>
    </section>
  );
};
