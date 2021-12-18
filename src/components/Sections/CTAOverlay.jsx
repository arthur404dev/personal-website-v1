import React from "react"
import Mail from "../Common/Mail"
import Socials from "./Socials"

const CTAOverlay = ({ socialContent, contactMail }) => {
  return (
    <div className='w-4/5 mx-auto fixed bottom-0 left-0 right-0 flex z-10 justify-between'>
      <div className='flex flex-col-reverse items-center'>
        <div className='h-28 border-r-2 dark:border-theme-cyan border-theme-darkest' />
        <div className='mb-4'>
          <Socials content={socialContent} />
        </div>
      </div>
      <div className='flex flex-col-reverse items-center justify-start'>
        <div className='h-28 border-r-2 dark:border-theme-cyan border-theme-darkest' />
        <div className='mb-4'>
          <Mail content={contactMail} />
        </div>
      </div>
    </div>
  )
}

export default CTAOverlay
