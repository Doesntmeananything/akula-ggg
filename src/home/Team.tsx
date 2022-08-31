import Image from "next/image";

import { Divider } from "../ui";

import chrisPic from "../../public/images/team/chris.jpeg";
import trevorPic from "../../public/images/team/trevor.jpeg";
import erikPic from "../../public/images/team/erik.jpeg";
import kamilPic from "../../public/images/team/kamil.jpeg";
import patrickPic from "../../public/images/team/patrick.jpeg";
import nickPic from "../../public/images/team/nick.jpeg";

const people = [
  {
    name: "Chris Wilson",
    position: "Co-Founder",
    pic: chrisPic,
  },
  {
    name: "Trevor Gamon",
    position: "Producer",
    pic: trevorPic,
  },
  {
    name: "Erik Olofsson",
    position: "Creative Director",
    pic: erikPic,
  },
  {
    name: "Kamil Orman-Janowski",
    position: "Music Director",
    pic: kamilPic,
  },
  {
    name: "Patrick Manson",
    position: "Environment Artist",
    pic: patrickPic,
  },
  {
    name: "Nick Kolan",
    position: "Game Designer",
    pic: nickPic,
  },
];

export const Team = () => {
  return (
    <section className="pt-32 text-ggg-gray-200">
      <Divider className="mb-[10px]" />

      <div className="flex text-xs lg:text-lg">
        <h2 className="basis-4/6 lg:basis-1/6">Team</h2>

        <button className="md:hidden lg:inline underline underline-offset-[6px] decoration-ggg-gray-400">
          More about us
        </button>
      </div>

      <p className="text-xl lg:text-[40px] leading-[130%] pt-9 max-w-7xl">
        As veterans of various online role playing games, we understand what is required to make an
        addictive action RPG with visceral combat and a complex item economy. We are currently
        developing Path of Exile 2 as well as constantly working on new leagues for PoE.
      </p>

      <ul className="md:grid md:grid-cols-2 lg:grid-cols-3 lg:justify-items-end lg:max-w-7xl lg:ml-auto">
        {people.map((person) => (
          <li key={person.name} className="pt-8">
            <Image
              src={person.pic}
              alt={person.name}
              width={345}
              height={391}
              quality={100}
              objectFit={person.name === "Trevor Gamon" ? "cover" : "none"}
              objectPosition="top"
              style={{ filter: "grayscale(100%)", marginBottom: "4px" }}
            />

            <span className="text-lg lg:text-2xl block">{person.name}</span>

            <hr className="border-ggg-gray-550 h-px w-[345px] mt-[10px] mb-2" />

            <div className="lg:flex lg:items-center lg:justify-between">
              <span className="text-ggg-gray-550 text-sm lg:text-base">{person.position}</span>

              <div className="flex gap-4 text-sm lg:text-lg pt-3 lg:pt-0">
                <a className="underline underline-offset-4">E-mail</a>
                <a className="underline underline-offset-4">Facebook</a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
