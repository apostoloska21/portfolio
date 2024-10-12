import Link from "next/link";

const NavLink = ({ href, title }) => {
  const isExternal = href.startsWith('http');
  
  const linkClasses = "block py-2 pl-3 pr-4 text-white dark:text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-gray-200 dark:hover:text-white";
  
  if (isExternal) {
    return (
      <a
        href={href}
        className={linkClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    );
  }

  return (
    <Link href={href} className={linkClasses}>
      {title}
    </Link>
  );
};

export default NavLink;
