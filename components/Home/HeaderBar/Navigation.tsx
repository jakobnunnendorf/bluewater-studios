import Link from "next/link";

type Props = {
  hiddenNavStyles?: string;
  isBg?: boolean;
};

const Navigation: React.FC<Props> = ({
  hiddenNavStyles = "hidden lg:block",
  isBg = true,
}) => {
  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Portfolio", link: "/portfolio" },
  ];
  return (
    <nav className={hiddenNavStyles}>
      <ul
        className={`flex flex-col items-center justify-between font-gilroy-regular text-lg font-normal lg:flex-row lg:justify-between ${isBg ? "text-black lg:h-fit lg:w-[581px]" : "gap-10 text-white lg:gap-20"}`}
      >
        {links.map((link) => (
          <li className="" key={link.link}>
            <Link href={link.link}>
              <p className="underline-offset-4 duration-500 hover:scale-105 hover:underline">
                {link.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
