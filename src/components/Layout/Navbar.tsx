import { useState } from "react"
import Link from "next/link"
import Logo from "../../assets/images/logo.svg"
import LanguageToggle from "../Common/LanguageToggle"
import ThemeToggle from "../Common/ThemeToggle"
import { Transition } from "@headlessui/react"

import { IoMenuSharp, IoCloseOutline } from "react-icons/io5"
import { NavigationLink } from "../../types"

export interface NavbarProps {
  navigationLinks: NavigationLink[]
}

const Navbar = ({ navigationLinks }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='w-full h-base sm:h-sm md:h-md lg:h-lg xl:h-xl bg-theme-darkest border-b-4 border-theme-darker fixed top-0 z-50 inset-x-0'>
      <div className='flex justify-between h-full w-11/12 md:w-4/5 items-center md:px-20 m-auto'>
        <div className='w-1/4'>
          <Link passHref href={`#home`}>
            <a>
              <Logo className='dark:fill-theme-pink cursor-pointer fill-theme-purple h-16 md:h-24 hover:fill-white dark:hover:fill-white' />
            </a>
          </Link>
        </div>
        <div className='md:flex items-center hidden'>
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
        <div className='md:hidden flex'>
          <button
            onClick={(event) => {
              event.preventDefault()
              setIsOpen(!isOpen)
              return false
            }}
            type='button'
            className='text-4xl text-theme-pink cursor-pointer hover:text-theme-cyan'
            aria-controls='mobile=menu'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            {!isOpen ? <IoMenuSharp /> : <IoCloseOutline />}
          </button>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter='transition ease-out duration-100 transform'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='transition ease-in duration-75 transform'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <div className='md:hidden overflow-hidden relative' id='mobile-menu'>
          <div className='dark:bg-theme-darkest bg-theme-purple h-screen w-screen inset-0 p-12 flex flex-col relative'>
            <div className='flex flex-col items-center'>
              {navigationLinks.map(({ displayName, id, target }) => (
                <div
                  key={id}
                  className='cursor-pointer dark:text-theme-purple text-theme-darkest uppercase hover:text-theme-pink transition-all ease-in-out mb-6'
                >
                  <Link passHref href={`#${target}`}>
                    <span
                      onClick={() => setIsOpen(!isOpen)}
                      className='font-fira text-3xl'
                    >
                      {displayName}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
            <div className='mt-16 bg-theme-darkest p-4 w-1/2 m-auto rounded-2xl'>
              <div className='mb-4'>
                <LanguageToggle />
              </div>
              <div>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  )
}

export default Navbar
