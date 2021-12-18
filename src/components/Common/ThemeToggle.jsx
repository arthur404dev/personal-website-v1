import React, { useEffect, useState } from "react"
import { Switch } from "@headlessui/react"
import { useTheme } from "next-themes"
import { MdLightMode } from "react-icons/md"
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
              ? "border-0 bg-theme-pink"
              : "border-2 border-theme-pink bg-theme-darkest"
          }  relative inline-flex items-center h-6 rounded-full w-11`}
        >
          <span className='sr-only'>Toggle DarkMode</span>
          <span
            className={`${
              theme === "light"
                ? "translate-x-1 bg-theme-darkest w-4 h-4"
                : "translate-x-6 bg-theme-pink w-3 h-3"
            } inline-block transform rounded-full transition ease-in-out duration-400`}
          />
          {theme === "light" ? (
            <MdLightMode className='absolute left-6 text-theme-darkest inline-block w-4 h-4' />
          ) : (
            <FaMoon className='absolute left-1 text-theme-pink inline-block w-3 h-3' />
          )}
        </Switch>
      )}
    </div>
  )
}

export default ThemeToggle
