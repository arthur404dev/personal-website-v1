import React, { useEffect, useState } from "react"
import HeroImg from "../../assets/images/logo.svg"
import { Typewriter, useTypewriter } from "react-simple-typewriter"

const Hero = ({ content }) => {
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
      className='w-screen h-screen dark:bg-theme-darkest bg-theme-purple'
      id={slug}
    >
      <div className='w-3/5 h-full m-auto flex items-center'>
        <div className='w-1/2 text-left'>
          <h3 className='font-fira dark:text-theme-cyan text-theme-dark text-s mb-4'>
            {header}
          </h3>
          <div className='flex'>
            <h1 className='font-inter dark:text-theme-purple text-theme-dark text-6xl font-bold mb-8'>
              {main}
            </h1>
            <span className='text-6xl animate-bounce ml-4'>{emoji}</span>
          </div>
          <h2 className='font-inter dark:text-white text-3xl'>
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
        <div className='w-1/2 h-full'>
          <HeroImg className='h-3/4 mt-40 fill-theme-dark dark:fill-theme-purple' />
        </div>
      </div>
    </div>
  )
}

export default Hero
