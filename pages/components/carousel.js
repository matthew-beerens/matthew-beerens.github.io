import { Component } from "react";
import ProjectCard from "./projectCard";

class Carousel extends Component
{
    constructor(props)
    {
        super(props);
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
        this.state = {
            "projects": this.props.projects,
        } 
    }

    next()
    {
        const card = this.state.projects.shift();
        this.state.projects.push(card);
        this.setState({
            'projects': this.state.projects,
        });
    }

    previous()
    {
        const card = this.state.projects.pop()
        this.state.projects.unshift(card);
        this.setState({
            'projects': this.state.projects,
        });
    }

    render()
    {
        return (
            <section className="flex p-4 gap-4 justify-center items-center">
                <aside id="left-arrow" className="flex  grow justify-center" onClick={this.previous}>
                    <div className="w-0 h-0 
                            border-t-[20px] border-t-transparent
                            border-r-[35px] border-r-neutral-500
                            border-b-[20px] border-b-transparent rounded-sm"></div>                                    
                </aside>

                <main id="slider" className="flex p-4 gap-3 overflow-hidden w-full">
                    {this.state.projects[0]}
                </main>

                <aside id="right-arrow" className="flex grow justify-center" onClick={this.next}>   
                    <div className="w-0 h-0 
                        border-t-[20px] border-t-transparent
                        border-l-[35px] border-l-neutral-500
                        border-b-[20px] border-b-transparent rounded-sm"></div>                             
                </aside>
            </section>
        );
    }
}

export default Carousel;