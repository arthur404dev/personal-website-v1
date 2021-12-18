import React, { useEffect, useState } from "react"
import { Switch } from "@headlessui/react"
import { useRouter } from "next/router"

const LanguageToggle = () => {
  const { locale, push, asPath } = useRouter()
  const [isEnglish, setIsEnglish] = useState(locale === "en_US" ? true : false)

  useEffect(() => {
    if (isEnglish) {
      push(asPath, undefined, { locale: "en_US" })
    } else {
      push(asPath, undefined, { locale: "pt_BR" })
    }
  }, [isEnglish])

  return (
    <div className='text-xs flex flex-col items-center justify-center mb-2'>
      <Switch
        checked={isEnglish}
        onChange={setIsEnglish}
        className={`${
          isEnglish ? "border-theme-cyan border-2" : "bg-theme-cyan border-0"
        }  relative inline-flex items-center h-6 rounded-full w-11`}
      >
        <span className='sr-only'>Toggle Between Languages</span>
        <span
          className={`${
            isEnglish
              ? "translate-x-6 bg-theme-cyan w-3 h-3"
              : "translate-x-1 bg-theme-darkest w-4 h-4"
          } inline-block transform rounded-full transition ease-in-out duration-400 text-theme-darkest font-bold`}
        ></span>
        {isEnglish ? (
          <span className='absolute left-1 text-theme-cyan'>EN</span>
        ) : (
          <span className='absolute left-6 text-theme-darkest font-bold'>
            PT
          </span>
        )}
      </Switch>
    </div>
  )
}

export default LanguageToggle
