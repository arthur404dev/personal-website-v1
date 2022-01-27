import { useEffect, useState } from "react"
import HeroImg from "../../assets/images/logo.svg"
import { Typewriter, useTypewriter } from "react-simple-typewriter"
import { HeroSection, Social } from "../../types"
import SocialIcon from "../Common/SocialIcon"

export interface HeroProps {
  content: HeroSection
  socials: Social[]
}

const Hero = ({ content, socials }: HeroProps) => {
  const component = "hero"
  const { header, emojiList, preText, textList, slug, main } = content
  const config = {
    words: textList,
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
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
      className='content-base sm:content-sm md:content-md lg:content-lg xl:content-xl dark:bg-theme-darkest bg-theme-purple flex flex-col md:flex-row '
    >
      <div
        id={`${component}-container`}
        className='w-full md:w-3/5 h-full md:h-full md:m-auto flex flex-col md:flex-row items-center justify-center p-8'
      >
        <div
          id={`${component}-heading`}
          className='max-w-sm sm:max-w-md w-full h-1/2 md:w-1/2 md:h-full text-left flex flex-col justify-end'
        >
          <h3
            id={`${component}-header`}
            className='font-fira dark:text-theme-cyan text-theme-dark text-sm md:text-lg mb-4'
          >
            {header}
          </h3>
          <div
            id={`${component}-main`}
            className='flex items-center h-1/3 w-full '
          >
            <h1
              id={`${component}-text`}
              className='w-2/3 font-inter dark:text-theme-purple text-theme-dark text-4xl md:text-6xl font-bold mb-8'
            >
              {main}
            </h1>
            <span
              id={`${component}-emoji`}
              className='w-1/3 text-4xl md:text-6xl animate-bounce text-left'
            >
              {emoji}
            </span>
          </div>
          <h2
            id={`${component}-description`}
            className='h-16 md:h-40 font-inter dark:text-white text-lg md:text-3xl'
          >
            {preText}
            <span
              id={`${component}-typewriter`}
              className='dark:text-theme-cyan text-theme-dark font-inter'
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
        </div>
        <div
          id={`${component}-socials`}
          className='max-w-sm sm:max-w-md w-full h-1/2 flex items-center justify-between md:hidden'
        >
          {socials.map((social) => (
            <div className='h-12 w-12 rounded-xl bg-theme-dark text-theme-pink even:text-theme-cyan text-2xl hover:bg-theme-pink even:hover:bg-theme-cyan hover:text-theme-darkest'>
              <a
                href={social.url}
                className='z-0 h-full w-ful flex items-center justify-center'
                target={"_blank"}
              >
                <SocialIcon content={social} key={social.id} variant='fill' />
              </a>
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
