import { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Hero from './components/hero';
import Nav from './components/nav';
import About from './components/about';
import Expertise from './components/expertise';
import Projects from './components/project';
import Contact from './components/contact';

class Home extends Component
{
  constructor(props)
  {
    super(props);
  }
  
  render()
  {
    return(
      <main>
        <Nav />
        <ReactFullpage
        scrollingSpeed = {1000} /* Options here */
        render={({ state, fullpageApi }) => 
        {
          return (
          <ReactFullpage.Wrapper>
            <Hero />
            <About />
            <Expertise />
            <Projects />
            <Contact />
          </ReactFullpage.Wrapper>
      );
    }}
  />
      </main>
      
    );
  }
}

export default Home;