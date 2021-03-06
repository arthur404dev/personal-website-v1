import Link from "next/link"
import { Social as SocialType } from "../../types"
import SocialIcon from "../Common/SocialIcon"
export interface SocialsProps {
  content: SocialType[]
}
const Socials = ({ content }: SocialsProps) => {
  return (
    <div className='flex flex-col'>
      {content.map((val) => (
        <div
          key={val.id}
          className='dark:text-theme-pink text-theme-dark text-xl mb-1 hover:text-white dark:hover:text-white hover:animate-pulse'
        >
          <Link passHref href={val.url}>
            <a className='z-0' target={"_blank"}>
              <SocialIcon content={val} variant='line' />
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Socials
