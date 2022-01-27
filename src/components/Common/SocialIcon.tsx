import { iconMapper } from "../../services"
import { IconVariants } from "../../services/iconMapper"
import { Social } from "../../types"

export interface SocialProps {
  content: Social
  variant: IconVariants
}

const SocialIcon = ({ content, variant }: SocialProps) => {
  const IconElement = iconMapper(
    content.name,
    "social",
    variant,
  ) as React.ElementType
  return <IconElement />
}

export default SocialIcon
