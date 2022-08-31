import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-between">
      <Link href="/">
        <a className="font-semibold text-sm md:text-lg lg:text-xl line font-mont flex flex-col -space-y-2 md:-space-y-3.5 lg:-space-y-3">
          <span>GRINDING</span>
          <span>GEAR</span>
          <span>GAMES</span>
        </a>
      </Link>

      <nav className="hidden lg:flex grow justify-around font-pop text-ggg-gray-200 text-lg">
        <div className="flex gap-12">
          <a>About</a>
          <a>Games</a>
          <a>Careers</a>
        </div>

        <div className="flex gap-12">
          <a>Team</a>
          <a>Blog</a>
          <a>Contact</a>
        </div>
      </nav>

      <div className="space-y-3 cursor-pointer pt-2 lg:hidden">
        <div className="w-[30px] h-px bg-ggg-gray-200"></div>
        <div className="w-[30px] h-px bg-ggg-gray-200"></div>
      </div>
    </header>
  );
};
