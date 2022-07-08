import { gql } from "graphql-request"

const query = gql`
  query IndexQuery($locale: Locale!) {
    navigationLinks(locales: [$locale]) {
      displayName
      id
      identificator
      isButton
      target
      order
    }
    heroSections(locales: [$locale]) {
      header
      id
      preText
      textList
      emojiList
      callToAction {
        text
        type
        address
      }
      main
      slug
    }
    socials {
      id
      isHighlight
      name
      url
      handler
    }
    mailing(locales: [$locale]) {
      name
      id
      address
      slug
      subject
    }
  }
`

export default query
