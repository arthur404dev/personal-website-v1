import React from "react"
import Logo from "../../assets/images/logo.svg"

const Navbar = ({ navigationLinks }) => {
  return (
    <nav className='w-full bg-darkest border-b-4 border-darker'>
      <div className='flex justify-between h-28 w-4/5 items-center px-20 m-auto'>
        <div className='w-1/4'>
          <a href={`#home`}>
            <Logo className='fill-accent-tertiary h-24 hover:fill-white transition-all ease-in-out' />
          </a>
        </div>
        <div className='flex'>
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
        </div>
      </div>
    </nav>
  )
}

export default Navbar
