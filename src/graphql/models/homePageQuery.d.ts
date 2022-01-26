import { HeroSection, Mailing, NavigationLink, Social } from "../../types"

export default interface HomePageQuery {
  navigationLinks: NavigationLink[]
  heroSections: HeroSection[]
  socials: Social[]
  mailing: Mailing[]
}
