import { IconType } from "react-icons"
import {
  RiTwitterLine,
  RiFacebookBoxLine,
  RiYoutubeLine,
  RiInstagramLine,
  RiTwitchLine,
  RiLinkedinBoxLine,
  RiMailLine,
} from "react-icons/ri"

interface IconMap {
  [key: string]: IconType
}

const socialMap: IconMap = {
  twitter: RiTwitterLine,
  facebook: RiFacebookBoxLine,
  youtube: RiYoutubeLine,
  instagram: RiInstagramLine,
  twitch: RiTwitchLine,
  linkedin: RiLinkedinBoxLine,
}

const mailingMap: IconMap = {
  contact: RiMailLine,
}

type IconTypes = "social" | "mail"

export default (value: string, type: IconTypes): IconType | null => {
  switch (type) {
    case "social":
      if (!(value in socialMap)) return null
      return socialMap[value]
    case "mail":
      if (!(value in mailingMap)) return null
      return mailingMap[value]

    default:
      return null
  }
}
