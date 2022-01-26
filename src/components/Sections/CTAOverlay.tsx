import { Mailing, Social } from "../../types"
import Mail from "../Common/Mail"
import Socials from "./Socials"

export interface CTAOverlayProps {
  socialContent: Social[]
  contactMail: Mailing
}

const CTAOverlay = ({ socialContent, contactMail }: CTAOverlayProps) => {
  return (
    <div className='w-4/5 mx-auto fixed bottom-0 left-0 right-0 hidden md:flex z-10 justify-between'>
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
