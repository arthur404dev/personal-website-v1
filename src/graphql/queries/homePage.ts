import { gql } from "graphql-request"

const query = gql`
  query IndexQuery($locale: Locale!) {
    navigationLinks(locales: [$locale]) {
      displayName
      id
      isButton
      target
    }
    heroSections(locales: [$locale]) {
      header
      id
      preText
      textList
      emojiList
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
