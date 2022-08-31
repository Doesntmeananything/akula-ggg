import { Divider, LongArrowIcon } from "../ui";

const socialLinks = ["Facebook", "Youtube", "Linkedin", "Twitter"];

export const Footer = () => {
  return (
    <footer className="text-ggg-gray-200 pb-20">
      <Divider className="mb-1" />

      <div className="flex text-xs lg:text-lg">
        <h2 className="basis-4/6 md:basis-2/6">Contact</h2>

        <button className="underline underline-offset-[6px] decoration-ggg-gray-400">
          All contacts
        </button>
      </div>

      <div className="md:grid md:gap-x-6 md:gap-y-9 md:grid-cols-2 pt-11 md:pt-14">
        <p className="text-xl lg:text-[70px] leading-[100%] font-pop">
          We&apos;re social, so If you want to contact us, please use the following information
          <LongArrowIcon className="md:inline ml-2 hidden lg:hidden" />
        </p>

        <div className="flex lg:text-[30px] gap-4 underline underline-offset-4 pt-6 md:pt-0">
          {socialLinks.map((link) => (
            <span key={link}>{link}</span>
          ))}
        </div>

        <Divider className="mt-14 mb-4 md:hidden" />

        <address className="flex flex-col lg:[grid-column:2] lg:[grid-row:2] lg:space-y-2">
          <span className="text-lg lg:text-3xl">Auckland</span>
          <span className="text-xs lg:text-xl lg:w-44">09 551 3935 inside New Zealand</span>
          <a href="tel:+6495513935" className="text-sm md:text-xs lg:text-xl pt-2 md:pt-0">
            +64 9 551 3935
          </a>
        </address>

        <Divider className="mt-7 mb-4 md:hidden" />

        <div className="flex flex-col lg:[grid-column:2] lg:[grid-row:2] lg:justify-self-end 2xl:justify-self-center">
          <span className="text-lg lg:text-3xl pb-1 lg:pb-2">Email</span>

          <div className="flex flex-col md:flex-row lg:flex-col md:gap-4 lg:gap-2 text-sm md:text-xs lg:text-xl md:leading-3">
            <a href="mailto:contact@grindinggear.com">
              <span className="hidden md:block">General:</span>
              contact@grindinggear.com
            </a>
            <a href="mailto:media@grindinggear.com">
              <span className="hidden md:block">Press:</span>
              media@grindinggear.com
            </a>
          </div>
        </div>
      </div>

      <small className="text-sm md:text-[10px] lg:text-xl pt-9 block">
        &copy; {new Date().getFullYear()} Grinding Gear Games
      </small>
    </footer>
  );
};
