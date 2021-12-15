import { gql } from "graphql-request"
import { Navbar, Footer } from "../components"
import { graphCMSClient } from "../services"

export default function Home({ navigationLinks, locale }) {
  return (
    <div className='py-28'>
      <Navbar navigationLinks={navigationLinks} />
      <main className='h-screen w-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden'>
        <div className='h-screen bg-red-200 snap-start'></div>
        <div className='h-screen bg-blue-200 snap-start'></div>
        <div className='h-screen bg-green-200 snap-start'></div>
      </main>
      <Footer />
    </div>
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
