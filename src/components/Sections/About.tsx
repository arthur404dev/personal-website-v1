import Profile from "../../assets/images/hero.svg"

const About = () => {
  return (
    <div
      className='content-base sm:content-sm md:content-md lg:content-lg xl:content-xl dark:bg-theme-dark-tone bg-theme-purple'
      id='about'
    >
      <div className='w-7/12 h-full m-auto flex flex-col justify-center'>
        <h1 className='text-2xl md:text-6xl font-fira text-theme-cyan mb-12'>{`< about >`}</h1>
        <div className='flex flex-col md:flex-row'>
          <p className='text-xs md:text-3xl h-2/3 w-full md:w-2/3'>
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non ."
          </p>
          <div className='h-2/3 w-full md:w-1/3 ml-12'>
            <Profile className='rounded-full w-96 h-96 bg-theme-dark self-center' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
