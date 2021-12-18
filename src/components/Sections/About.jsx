import React from "react"
import Profile from "../../assets/images/hero.svg"

const About = () => {
  return (
    <div
      className='w-screen h-screen dark:bg-theme-dark-tone bg-theme-purple'
      id='about'
    >
      <div className='w-7/12 h-full m-auto flex flex-col justify-center'>
        <h1 className='text-6xl font-fira text-theme-cyan mb-12'>{`< about >`}</h1>
        <div className='flex'>
          <p className='text-3xl w-2/3'>
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat."
          </p>
          <div className='w-1/3 ml-12'>
            <Profile className='rounded-full w-96 h-96 bg-theme-dark self-center' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
