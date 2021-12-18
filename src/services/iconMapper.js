import {
  RiTwitterLine,
  RiFacebookBoxLine,
  RiYoutubeLine,
  RiInstagramLine,
  RiTwitchLine,
  RiLinkedinBoxLine,
  RiMailLine,
} from "react-icons/ri"

const socialMap = {
  twitter: RiTwitterLine,
  facebook: RiFacebookBoxLine,
  youtube: RiYoutubeLine,
  instagram: RiInstagramLine,
  twitch: RiTwitchLine,
  linkedin: RiLinkedinBoxLine,
}

const mailingMap = {
  contact: RiMailLine,
}

export default (value, type) => {
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
