import { Fragment } from "react";
import { ShortArrowIcon, Divider } from "../ui";

const posts = [
  {
    date: new Date("August 5, 2022"),
    title: "Path of Exile: Lake of Kalandra",
  },
  {
    date: new Date("August 2, 2022"),
    title: "Divination Card Stories - Rebirth and Renewal",
  },
  {
    date: new Date("July 29, 2022"),
    title: "August Expansion Name Reveal",
  },
  {
    date: new Date("July 28, 2022"),
    title: "Developer Interview - Michael - Supporting Composer",
  },
  {
    date: new Date("July 25, 2022"),
    title: "Updated 3.19 Expansion Timeline",
  },
];

export const Blog = () => {
  return (
    <section className="pt-28 text-ggg-gray-200 pb-24 lg:pb-96">
      <Divider className="mb-[10px]" />

      <div className="flex text-xs lg:text-lg">
        <h2 className="basis-4/6 md:basis-3/12">Blog</h2>

        <button className="underline underline-offset-[6px] decoration-ggg-gray-400">
          All articles
        </button>
      </div>

      {posts.map((post) => (
        <Fragment key={post.title}>
          <hr className="border-ggg-gray-550 h-px w-full mt-7 md:mt-6 lg:mt-16" />

          <div className="md:flex md:items-center pt-2">
            <span className="text-[10px] lg:text-base md:basis-3/12">
              {post.date.toLocaleDateString()}
            </span>

            <div className="md:flex md:items-center md:justify-between md:grow">
              <h3 className="text-lg lg:text-3xl leading-6">{post.title}</h3>

              <ShortArrowIcon className="hidden md:inline mr-2" />
            </div>
          </div>
        </Fragment>
      ))}
    </section>
  );
};
