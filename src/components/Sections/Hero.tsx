import { useEffect, useState } from "react"
import HeroImg from "../../assets/images/logo.svg"
import { Typewriter, useTypewriter } from "react-simple-typewriter"
import { HeroSection, NavigationLink, Social } from "../../types"
import SocialIcon from "../Common/SocialIcon"
import Link from "next/link"
import { getComponent } from "../../services"

export interface HeroProps {
  content: HeroSection
  socials: Social[]
  components: NavigationLink[]
}

const Hero = ({ content, socials, components }: HeroProps) => {
  const component = getComponent("hero", components).target
  const { header, emojiList, preText, textList, slug, main, callToAction } =
    content
  const config = {
    words: textList,
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 80,
    delaySpeed: 1500,
    cursor: true,
    cursorStyle: "|",
  }

  const { text, count } = useTypewriter({
    words: config.words,
    loop: config.loop,
    typeSpeed: config.typeSpeed,
    deleteSpeed: config.deleteSpeed,
    delaySpeed: config.delaySpeed,
  })

  const [emoji, setEmoji] = useState("")
  useEffect(() => {
    const index = count % emojiList.length
    setEmoji(emojiList[index])
  }, [count])

  return (
    <div
      id={component}
      className='content-base sm:content-sm md:content-md lg:content-lg xl:content-xl dark:bg-theme-darkest bg-theme-off-white flex flex-col md:flex-row '
    >
      <div
        id={`${component}-container`}
        className='w-full md:w-3/5 h-full md:h-full md:m-auto flex flex-col md:flex-row items-center justify-between p-8'
      >
        <div
          id={`${component}-heading`}
          className='max-w-sm sm:max-w-md w-full md:w-1/2 md:h-full text-left flex flex-col justify-start pt-16'
        >
          <h3
            id={`${component}-header`}
            className='font-fira dark:text-theme-purple text-theme-violet text-lg md:text-lg mb-4'
          >
            {header}
          </h3>
          <div id={`${component}-main`} className='flex items-center w-full'>
            <h1
              id={`${component}-text`}
              className='w-full font-inter dark:text-white text-black text-4xl md:text-6xl font-bold mb-4'
            >
              {main}
            </h1>
            {/* <span
              id={`${component}-emoji`}
              className='w-1/3 text-4xl md:text-6xl animate-bounce text-left'
            >
              {emoji}
            </span> */}
          </div>
          <h2
            id={`${component}-description`}
            className='h-28 md:h-40 font-inter mb-4 text-theme-violet dark:text-theme-purple text-3xl md:text-3xl'
          >
            {preText}
            <span
              id={`${component}-typewriter`}
              className={`dark:text-theme-pink text-theme-midnight font-inter`}
            >
              <Typewriter
                words={config.words}
                cursor={config.cursor}
                cursorStyle={config.cursorStyle}
                loop={config.loop}
                typeSpeed={config.typeSpeed}
                deleteSpeed={config.deleteSpeed}
                delaySpeed={config.delaySpeed}
              />
            </span>
          </h2>
          <div className='h-28 flex items-center justify-center mb-4'>
            {callToAction?.type === "mail" && (
              <Link passHref href={callToAction?.address}>
                <a className='w-full' target={"_blank"}>
                  <button
                    className='w-full font-bold
                  bg-theme-midnight dark:bg-transparent py-4 px-6 border rounded
                  text-theme-off-white dark:text-theme-pink  
                  dark:border-theme-pink 
                  hover:bg-theme-pink hover:text-theme-darkest  dark:hover:text-theme-darker dark:hover:bg-theme-pink hover:border-transparent'
                  >
                    {callToAction?.text}
                  </button>
                </a>
              </Link>
            )}
          </div>
        </div>
        <div
          id={`${component}-socials`}
          className='max-w-sm sm:max-w-md w-full h-1/4 flex items-start justify-between md:hidden'
        >
          {socials.map((social) => (
            <div
              key={social?.id}
              className='h-12 w-12 rounded-xl text-2xl
              bg-theme-purple dark:bg-theme-dark 
              text-theme-midnight even:text-theme-darker dark:text-theme-pink dark:even:text-theme-cyan 
              hover:bg-theme-pink even:hover:bg-theme-cyan 
              hover:text-theme-darkest'
            >
              <Link passHref href={social?.url}>
                <a
                  className='z-0 h-full w-ful flex items-center justify-center'
                  target={"_blank"}
                >
                  <SocialIcon content={social} key={social.id} variant='fill' />
                </a>
              </Link>
            </div>
          ))}
        </div>
        <div
          id={`${component}-image`}
          className='hidden w-4/5 h-1/2 md:w-1/2 md:h-full md:flex items-center justify-center'
        >
          <HeroImg className='h-full mb-20 md:mt-40 fill-theme-dark dark:fill-theme-purple' />
        </div>
      </div>
    </div>
  )
}

export default Hero
