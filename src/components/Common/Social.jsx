import React from "react"
import { iconMapper } from "../../services"

const Social = ({ content }) => {
  const SocialIcon = iconMapper(content.name, "social")
  return <SocialIcon />
}

export default Social
