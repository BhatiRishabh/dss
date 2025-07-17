'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';
import { FiMenu, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="bg-gray-50 z-50 relative">
        <FlipNav isOpen={isOpen} setIsOpen={setIsOpen} />
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </div>
    </>
  );
};

const FlipNav = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <nav className="bg-white sm:p-4 p-2 border-b-[1px] border-gray-200 flex flex-col relative z-50">
      <div className="flex items-center justify-between">
        <NavLeft setIsOpen={setIsOpen} />
        <NavRight />
      </div>
      {isOpen && (
        <div className="lg:hidden mt-2">
          <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      )}
    </nav>
  );
};

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/img/Logo.png" width={100} height={100} alt="logo" />
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
      <NavLink text="Accommodation" links="#acc" />
      <NavLink text="Schedule" links="#schedule" />
      <NavLink text="Workshops" links="#Events" />
      <NavLink text="Keynote Speaker" links="#Speakers" />
      <NavLink text="Mentors" links="#faculty" />
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
        </motion.button>
      </a>
      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdzcs7iO5O46GLZTQEsTrdlL01bOlKWjABINNgGZXlT-YKDSg/viewform" target="">
        <button className="hidden sm:block pointer-events-auto rounded-xl bg-indigo-500 px-6 py-3 font-extrabold uppercase text-neutral-50 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-100">
          REGISTER
        </button>
      </Link>
    </div>
  );
};

const NavMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleClick = () => setIsOpen(false);

  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      className="bg-white shadow-lg flex flex-col gap-4 px-4 py-4 border-t rounded-b-md"
    >
      <MenuLink text="Themes" links="#themes" onClick={handleClick} />
      <MenuLink text="About" links="#about" onClick={handleClick} />
      <MenuLink text="Features" links="#feature" onClick={handleClick} />
      <MenuLink text="Accommodation" links="https://drive.google.com/file/d/1PDuvJ-mXDMT047d-T_pj-bF61cK5UfSE/view?usp=sharing" onClick={handleClick} />
      <MenuLink text="Schedule" links="#schedule" onClick={handleClick} />
      <MenuLink text="Workshops" links="#Events" onClick={handleClick} />
      <MenuLink text="Keynote Speakers" links="#Speakers" onClick={handleClick} />
      <MenuLink text="Instructors" links="#faculty" onClick={handleClick} />
    </motion.div>
  );
};

const MenuLink = ({
  text,
  links,
  onClick,
}: {
  text: string;
  links: string;
  onClick: () => void;
}) => {
  return (
    <motion.a
      onClick={onClick}
      href={links}
      rel="nofollow"
      variants={menuLinkVariants}
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
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    opacity: 0,
    transition: {
      when: 'afterChildren',
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
