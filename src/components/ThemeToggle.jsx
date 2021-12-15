import React, { useEffect, useState } from "react"
import { Switch } from "@headlessui/react"
import { useTheme } from "next-themes"
import { MdDarkMode, MdLightMode } from "react-icons/md"
import { FaMoon } from "react-icons/fa"

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [darkMode, setDarkMode] = useState(theme === "light" ? false : true)

  useEffect(() => {
    if (darkMode) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }, [darkMode])

  return (
    <div className='text-xs flex items-center justify-center'>
      {theme && (
        <Switch
          checked={darkMode}
          onChange={setDarkMode}
          className={`${
            theme === "light"
              ? "border-0 bg-accent-tertiary"
              : "border-2 border-accent-tertiary bg-darkest"
          }  relative inline-flex items-center h-6 rounded-full w-11`}
        >
          <span className='sr-only'>Toggle DarkMode</span>
          <span
            className={`${
              theme === "light"
                ? "translate-x-1 bg-darkest w-4 h-4"
                : "translate-x-6 bg-accent-tertiary w-3 h-3"
            } inline-block transform rounded-full transition ease-in-out duration-400`}
          />
          {theme === "light" ? (
            <MdLightMode className='absolute left-6 text-darkest inline-block w-4 h-4' />
          ) : (
            <FaMoon className='absolute left-1 text-accent-tertiary inline-block w-3 h-3' />
          )}
        </Switch>
      )}
    </div>
  )
}

export default ThemeToggle
