import { IconType } from "react-icons"
import {
  RiTwitterLine,
  RiFacebookBoxLine,
  RiYoutubeLine,
  RiInstagramLine,
  RiTwitchLine,
  RiLinkedinBoxLine,
  RiMailLine,
  RiTwitterFill,
  RiFacebookFill,
  RiYoutubeFill,
  RiInstagramFill,
  RiTwitchFill,
  RiLinkedinFill,
} from "react-icons/ri"

interface IconMap {
  [key: string]: IconType
}

const socialFill: IconMap = {
  twitter: RiTwitterFill,
  facebook: RiFacebookFill,
  youtube: RiYoutubeFill,
  instagram: RiInstagramFill,
  twitch: RiTwitchFill,
  linkedin: RiLinkedinFill,
}

const socialLine: IconMap = {
  twitter: RiTwitterLine,
  facebook: RiFacebookBoxLine,
  youtube: RiYoutubeLine,
  instagram: RiInstagramLine,
  twitch: RiTwitchLine,
  linkedin: RiLinkedinBoxLine,
}

interface Map {
  fill: IconMap
  line: IconMap
}

const socialMap: Map = {
  line: socialLine,
  fill: socialFill,
}

const mailingMap: IconMap = {
  contact: RiMailLine,
}

export type IconTypes = "social" | "mail"
export type IconVariants = "line" | "fill"

export default (
  value: string,
  type: IconTypes,
  variant: IconVariants,
): IconType | null => {
  switch (type) {
    case "social":
      return socialMap[variant][value]
    case "mail":
      if (!(value in mailingMap)) return null
      return mailingMap[value]

    default:
      return null
  }
}
