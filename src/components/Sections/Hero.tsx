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
          className='w-4/5 h-3/4 md:w-1/2 md:h-full text-left flex flex-col justify-center'
        >
          <h3
            id={`${component}-header`}
            className='font-fira dark:text-theme-cyan text-theme-dark text-sm md:text-lg mb-4'
          >
            {header}
          </h3>
          <div id={`${component}-main`} className='flex'>
            <h1
              id={`${component}-text`}
              className='font-inter dark:text-theme-purple text-theme-dark text-3xl md:text-6xl font-bold mb-8'
            >
              {main}
            </h1>
            <span
              id={`${component}-emoji`}
              className='text-3xl md:text-6xl animate-bounce ml-4'
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
          className='w-11/12 h-1/4 flex justify-center items-start md:hidden'
        >
          {socials.map((social) => (
            <div className='h-12 w-12 flex items-center justify-center rounded-xl bg-theme-dark text-theme-pink m-2 text-2xl hover:bg-theme-pink hover:text-theme-darkest'>
              <a href={social.url} className='z-0' target={"_blank"}>
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
