import { useEffect, useState } from "react"
import HeroImg from "../../assets/images/logo.svg"
import { Typewriter, useTypewriter } from "react-simple-typewriter"
import { HeroSection } from "../../types"

export interface HeroProps {
  content: HeroSection
}

const Hero = ({ content }: HeroProps) => {
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
      className='content-base sm:content-sm md:content-md lg:content-lg xl:content-xl dark:bg-theme-darkest bg-theme-purple flex flex-col md:flex-row '
      id={slug}
    >
      <div className='w-full md:w-3/5 h-full md:h-full md:m-auto flex flex-col md:flex-row items-center justify-center p-8'>
        <div className='w-4/5 h-2/3 md:w-1/2 md:h-full text-left flex flex-col justify-center'>
          <h3 className='font-fira dark:text-theme-cyan text-theme-dark text-sm md:text-lg mb-4'>
            {header}
          </h3>
          <div className='flex'>
            <h1 className='font-inter dark:text-theme-purple text-theme-dark text-3xl md:text-6xl font-bold mb-8'>
              {main}
            </h1>
            <span className='text-3xl md:text-6xl animate-bounce ml-4'>
              {emoji}
            </span>
          </div>
          <h2 className='font-inter dark:text-white text-lg md:text-3xl'>
            {preText}
            <span className='dark:text-theme-cyan text-theme-dark font-inter'>
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
        <div className='w-11/12 h-1/3 flex justify-center items-start'>
          <button className='border-4 font-bold border-theme-pink p-6 rounded-full w-2/3 text-theme-pink uppercase hover:bg-theme-pink hover:text-theme-darker'>
            this is a placeholder for socials
          </button>
        </div>
        <div className='hidden w-4/5 h-1/2 md:w-1/2 md:h-full md:flex items-center justify-center'>
          <HeroImg className='h-full mb-20 md:mt-40 fill-theme-dark dark:fill-theme-purple' />
        </div>
      </div>
    </div>
  )
}

export default Hero
