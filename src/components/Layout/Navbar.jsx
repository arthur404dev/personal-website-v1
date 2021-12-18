import React from "react"
import Link from "next/link"
import Logo from "../../assets/images/logo.svg"
import LanguageToggle from "../Common/LanguageToggle"
import ThemeToggle from "../Common/ThemeToggle"

const Navbar = ({ navigationLinks }) => {
  return (
    <nav className='w-full h-28 bg-theme-darkest border-b-4 border-theme-darker fixed top-0 inset-x-0'>
      <div className='flex justify-between h-full w-4/5 items-center px-20 m-auto'>
        <div className='w-1/4'>
          <Link passHref href={`#home`}>
            <Logo className='dark:fill-theme-pink fill-theme-purple h-24 hover:fill-white' />
          </Link>
        </div>
        <div className='flex items-center'>
          {navigationLinks.map(({ displayName, id, target, isButton }) =>
            isButton ? (
              <div
                key={id}
                className='cursor-pointer h-full w-48 border-2 border-theme-pink text-theme-pink hover:bg-theme-pink hover:text-theme-darkest font-bold flex justify-center items-center rounded-full transition-all ease-in-out'
              >
                <Link passHref href={`#${target}`}>
                  <span className='font-fira uppercase'>{displayName}</span>
                </Link>
              </div>
            ) : (
              <div
                key={id}
                className='cursor-pointer text-theme-purple uppercase hover:text-theme-pink transition-all ease-in-out'
              >
                <Link passHref href={`#${target}`}>
                  <span className='font-fira pr-16 '>{displayName}</span>
                </Link>
              </div>
            ),
          )}
          <div className='ml-16 flex flex-col'>
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
