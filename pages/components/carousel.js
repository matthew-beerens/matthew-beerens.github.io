import { Component } from "react";
import ProjectCard from "./projectCard";

class Carousel extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <section className="flex p-4 gap-4 justify-center items-center">
                <aside id="left-arrow" className="flex  grow justify-center" >
                    <div className="w-0 h-0 
                            border-t-[20px] border-t-transparent
                            border-r-[35px] border-r-neutral-500
                            border-b-[20px] border-b-transparent rounded-sm"></div>                                    
                </aside>

                <main id="slider" className="flex p-4 gap-3 overflow-hidden w-1/2">
                    <ProjectCard title="project 1"/>
                    <ProjectCard title="project 2"/>
                    <ProjectCard title="project 3"/>
                </main>

                <aside id="right-arrow" className="flex grow justify-center">   
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