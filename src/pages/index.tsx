import { GetStaticProps } from "next"
import { Navbar, Footer, Hero, CTAOverlay, About } from "../components"
import { homePageData, homePageQuery } from "../graphql"
import { graphCMSClient } from "../services"
import { HeroSection, Mailing, NavigationLink, Social } from "../types"

export interface HomeProps {
  navigationLinks: NavigationLink[]
  homeContent: HeroSection
  socialContent: Social[]
  contactMail: Mailing
}

const Home = ({
  navigationLinks,
  homeContent,
  socialContent,
  contactMail,
}: HomeProps) => {
  const component = "home-page"
  return (
    <div id={component} className='py-base sm:py-sm md:py-md lg:py-lg xl:py-xl'>
      <Navbar navigationLinks={navigationLinks} />
      {/* CTA Overlay */}
      <CTAOverlay socialContent={socialContent} contactMail={contactMail} />
      {/* Main Section */}
      <main
        id={`${component}-content`}
        className='content-base sm:content-sm md:content-md lg:content-lg xl:content-xl snap-y snap-mandatory overflow-x-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-theme-pink'
      >
        {/* Hero Section */}
        <div id={`${component}-section-hero`} className='snap-start'>
          <Hero content={homeContent} socials={socialContent} />
        </div>
        {/* About Section */}
        <div id={`${component}-section-about`} className='snap-start'>
          <About />
        </div>
        {/* Footer Section */}
        <div id={`${component}-section-footer`} className='snap-start'>
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { navigationLinks, heroSections, socials, mailing }: homePageData =
    await graphCMSClient.request(homePageQuery, { locale })
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
