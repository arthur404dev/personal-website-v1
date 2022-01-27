import { iconMapper } from "../../services"
import { Mailing } from "../../types"

export interface MailProps {
  content: Mailing
}

const Mail = ({ content }: MailProps) => {
  const MailIcon = iconMapper(content.slug, "mail", "line") as React.ElementType
  return (
    <div className='dark:text-theme-pink text-theme-dark hover:text-white hover:animate-pulse hover-trigger flex flex-col justify-center items-center'>
      <a href={`mailto:${content.address}?subject=${content.subject}`}>
        <MailIcon />
      </a>
      <div className='font-fira mb-4 hover-target absolute bottom-36 animate-pulse'>
        {content.address}
      </div>
    </div>
  )
}

export default Mail
