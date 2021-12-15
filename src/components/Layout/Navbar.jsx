import React from "react"
import { ThemeToggle } from ".."
import Logo from "../../assets/images/logo.svg"
import LanguageToggle from "../LanguageToggle"

const Navbar = ({ navigationLinks, locale }) => {
  return (
    <nav className='w-full h-28 bg-darkest border-b-4 border-darker fixed top-0 inset-x-0'>
      <div className='flex justify-between h-full w-4/5 items-center px-20 m-auto'>
        <div className='w-1/4'>
          <a href={`#home`}>
            <Logo className='fill-accent-tertiary h-24 hover:fill-white transition-all ease-in-out' />
          </a>
        </div>
        <div className='flex items-center'>
          {navigationLinks.map(({ displayName, id, target, isButton }) =>
            isButton ? (
              <div
                key={id}
                className='cursor-pointer h-full w-48 border-2 border-accent-tertiary text-accent-tertiary hover:bg-accent-tertiary hover:text-darkest font-bold flex justify-center items-center rounded-full transition-all ease-in-out'
              >
                <a href={`#${target}`}>
                  <span className='font-fira uppercase'>{displayName}</span>
                </a>
              </div>
            ) : (
              <div
                key={id}
                className='cursor-pointer text-accent-primary uppercase hover:text-accent-tertiary transition-all ease-in-out'
              >
                <a href={`#${target}`}>
                  <span className='font-fira pr-16 '>{displayName}</span>
                </a>
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
