import Link from "next/link";

const NavLink = ({ href, title }) => {
  const isExternal = href.startsWith('http');
  
  if (isExternal) {
    return (
      <a
        href={href}
        className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
