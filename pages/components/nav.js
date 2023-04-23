import { Component } from "react";
import ReactFullpage from '@fullpage/react-fullpage';

class Nav extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <nav className="flex w-screen justify-between p-4 fixed z-50">
                <div>Matthew Beerens</div>
                <div>
                    <ul id="myMenu" className='flex justify-around '>
                        <li data-menuanchor="homeAnchor" onClick={(e) => this.props.moveSection('homeAnchor',e)} className="active pr-4 pl-4"><a href="#home">Home</a></li>
                        <li data-menuanchor="aboutAnchor" onClick={(e) => this.props.moveSection('aboutAnchor',e)} className="pr-4 pl-4"><a href="#about">About</a></li>
                        <li data-menuanchor="expertiseAnchor" onClick={(e) => this.props.moveSection('expertiseAnchor',e)} className="pr-4 pl-4"><a href="#expertise">Expertise</a></li>
                        <li data-menuanchor="projectsAnchor" onClick={(e) => this.props.moveSection('projectsAnchor',e)} className="pr-4 pl-4"><a href="#projects">Projects</a></li>
                        <li data-menuanchor="contactAnchor" onClick={(e) => this.props.moveSection('contactAnchor',e)} className="pr-4 pl-4"><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;