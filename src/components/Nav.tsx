'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { FiMenu, FiArrowRight } from "react-icons/fi";
import Image from "next/image";
const Nav = () => {
  return (
    <div className="bg-gray-50 ">
      <FlipNav />
    </div>
  );
};

const FlipNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white sm:p-4 p-2 border-b-[1px] border-gray-200 flex items-center justify-between relative">
      <NavLeft setIsOpen={setIsOpen} />
      <NavRight />
      <NavMenu isOpen={isOpen} />
    </nav>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
   <Link href='/'>
   <Image src='/img/Logo.png' width='65' height='65' alt='logo'>
    </Image>
    </Link>
  );
};

const NavLeft = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex items-center gap-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block lg:hidden text-gray-950 text-2xl"
        onClick={() => setIsOpen((pv) => !pv)}
      >
        <FiMenu />
      </motion.button>
      <Logo />
      <NavLink text="Themes" links="#themes" />
      <NavLink text="About" links="#about" />
      <NavLink text="Features" links="#feature" />
      <NavLink text="Schedule" links="#schedule" />
      <NavLink text="Events" links="#Events" />
      <NavLink text="Keynote Speakers" links="#Speakers" />
      <NavLink text="Instructors" links="#faculty" />
    </div>
  );
};


type NavLinkProps = {
  text: string;
  links: string;
};

const NavLink = ({ text, links }: NavLinkProps) => {
  return (
    <Link
      href={links}
      rel="nofollow"
      className="hidden lg:block h-[30px] overflow-hidden font-medium"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">
          {text}
        </span>
      </motion.div>
    </Link>
  );
};
const NavRight = () => {
  return (
    <div className="flex items-center gap-4">
      <a href="#map">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 hidden sm:block bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent font-medium rounded-md whitespace-nowrap"
      >
        Reach out
      </motion.button></a>
      {/* <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium rounded-md whitespace-nowrap"
      >
        Register
      </motion.button> */}
      <Link href="https://forms.gle/qyqmH4FjPRoHP4iw8" target="_blank">
      <button className="hidden sm:block pointer-events-auto rounded-xl bg-indigo-500 px-6 py-3  font-extrabold uppercase text-neutral-50 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-100">
  Register
</button>
</Link>

    </div>
  );
};

const NavMenu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute p-4 bg-white shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4"
    >
      <MenuLink text="Themes" links="#themes" />
      <MenuLink text="About" links="#about"/>
      <MenuLink text="Features" links="#feature"/>
      <MenuLink text="Schedule" links="#schedule" />
      <MenuLink text="Events" links="#Events" />
      <MenuLink text="Keynote Speakers" links="#Speakers" />
      <MenuLink text="Instructors" links="#faculty" />
    </motion.div>
  );
};

const MenuLink = ({ text,links }: { text: string,links:string }) => {
  return (
    <motion.a
      variants={menuLinkVariants}
      rel="nofollow"
      href={links}
      className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2"
    >
      <motion.span variants={menuLinkArrowVariants}>
        <FiArrowRight className="h-[30px] text-gray-950" />
      </motion.span>
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">
          {text}
        </span>
      </motion.div>
    </motion.a>
  );
};

export default Nav;

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};