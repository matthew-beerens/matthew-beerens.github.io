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
    this.handleMoveToSection = this.handleMoveToSection.bind(this);
  }
  
  handleMoveToSection(section, e)
  {
    e.preventDefault();
    fullpage_api.moveTo(section);
  }

  render()
  {
    return(
      <main>
        <Nav moveSection={this.handleMoveToSection}/>
        <ReactFullpage
        scrollingSpeed = {700}
        anchors={['homeAnchor', 'aboutAnchor', 'expertiseAnchor', 'projectsAnchor', 'contactAnchor']}
        menu='myMenu'
        navigation
        showActiveTooltip
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