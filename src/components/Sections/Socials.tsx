import { Social } from "../../types"
import SocialComponent from "../Common/Social"

export interface SocialsProps {
  content: Social[]
}
const Socials = ({ content }: SocialsProps) => {
  return (
    <div className='flex flex-col'>
      {content.map((val) => (
        <div
          key={val.id}
          className='dark:text-theme-pink text-theme-dark text-xl mb-1 hover:text-white dark:hover:text-white hover:animate-pulse'
        >
          <a href={val.url} className='z-0' target={"_blank"}>
            <SocialComponent content={val} />
          </a>
        </div>
      ))}
    </div>
  )
}

export default Socials
