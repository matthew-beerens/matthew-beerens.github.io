import {Component}  from 'react'

// componentes
import Hero from './components/hero'
import About from './components/about'
import Projects from './components/project'
import Expertise from './components/expertise'
import Nav from './components/nav'
import Contact from './components/contact'

class Home extends Component
{
  constructor(props)
  {
    super(props)
  }

  render()
  {
    return(
      <main className="flex-cl">
        <Nav />
        <Hero />
        <About />
        <Expertise/>
        <Projects />
        <Contact />
      </main>
    );
  }
}

export default Home;
