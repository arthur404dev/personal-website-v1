import { iconMapper } from "../../services"
import { Social } from "../../types"

export interface SocialProps {
  content: Social
}

const SocialComponent = ({ content }: SocialProps) => {
  const SocialIcon = iconMapper(content.name, "social") as React.ElementType
  return <SocialIcon />
}

export default SocialComponent
