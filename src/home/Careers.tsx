import { ShortArrowIcon, Divider } from "../ui";

const careersList = [
  "Customer Support",
  "Finance",
  "Art & VFX",
  "Game Design",
  "Software Engineering",
  "Writing",
  "Sound Design",
  "Marketing",
];

export const Careers = () => {
  return (
    <section className="pt-20 md:pt text-ggg-gray-200">
      <Divider className="mb-[10px]" />

      <div className="flex text-xs lg:text-lg">
        <h2>Careers</h2>
      </div>

      <div className="pt-8 md:pt-12 font-light font-pop">
        <ul className="md:h-32 md:flex md:flex-col md:flex-wrap text-2xl xl:text-5xl 2xl:text-[60px] lg:h-full lg:grid lg:grid-cols-2 lg:gap-10">
          {careersList.map((careerName) => (
            <li key={careerName} className="flex items-center gap-8 md:gap-6">
              <ShortArrowIcon className="lg:w-[17px] lg:h-[19px]" />
              {careerName}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
