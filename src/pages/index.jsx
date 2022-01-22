import { gql } from "graphql-request"
import { Navbar, Footer, Hero, CTAOverlay, About } from "../components"
import { graphCMSClient } from "../services"

export default function Home({
  navigationLinks,
  homeContent,
  socialContent,
  contactMail,
}) {
  return (
    <div className='py-20 md:py-28'>
      <Navbar navigationLinks={navigationLinks} />
      {/* CTA Overlay */}
      <CTAOverlay socialContent={socialContent} contactMail={contactMail} />
      {/* Main Section */}
      <main className='h-screen w-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden'>
        {/* Hero Section */}
        <div className='snap-start'>
          <Hero content={homeContent} />
        </div>
        {/* Next Section */}
        <div className='snap-start'>
          <About />
        </div>
        <Footer />
      </main>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  const { navigationLinks, heroSections, socials, mailing } =
    await graphCMSClient.request(
      gql`
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
      `,
      { locale },
    )
  const homeContent = heroSections.find((section) => section.slug === "home")
  const contactMail = mailing.find((mail) => mail.slug === "contact")

  return {
    props: {
      navigationLinks,
      homeContent,
      socialContent: socials,
      contactMail,
    },
  }
}
