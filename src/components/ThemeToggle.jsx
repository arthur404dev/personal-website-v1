import React, { useEffect, useState } from "react"
import { Switch } from "@headlessui/react"
import { useTheme } from "next-themes"

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
    <>
      {theme && (
        <Switch
          checked={darkMode}
          onChange={setDarkMode}
          className={`${
            theme === "light" ? "bg-gray-200" : "bg-blue-600"
          } relative inline-flex items-center h-6 rounded-full w-11`}
        >
          <span className='sr-only'>Toggle DarkMode</span>
          <span
            className={`${
              theme === "light" ? "translate-x-1" : "translate-x-6"
            } inline-block w-4 h-4 transform bg-white rounded-full transition ease-in-out duration-200`}
          />
        </Switch>
      )}
    </>
  )
}

export default ThemeToggle
