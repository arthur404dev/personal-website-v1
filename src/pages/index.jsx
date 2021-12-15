import { gql } from "graphql-request"
import { useTheme } from "next-themes"
import { Navbar, Footer, ThemeToggle } from "../components"
import { graphCMSClient } from "../services"

export default function Home({ navigationLinks }) {
  const { theme, setTheme } = useTheme()
  return (
    <>
      <Navbar navigationLinks={navigationLinks} />
      <ThemeToggle />
      <Footer />
    </>
  )
}

export async function getStaticProps({ locale }) {
  const { navigationLinks } = await graphCMSClient.request(
    gql`
      query IndexQuery($locale: Locale!) {
        navigationLinks(locales: [$locale]) {
          displayName
          id
          isButton
          target
        }
      }
    `,
    { locale },
  )
  return {
    props: {
      navigationLinks,
    },
  }
}
