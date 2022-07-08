import CallToAction from "./CallToAction"

export default interface HeroSection {
  header: string
  id: string
  preText: string
  textList: string[]
  emojiList: string[]
  callToAction: CallToAction
  main: string
  slug: string
}
