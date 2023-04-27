import { Component } from "react";
import ProjectCard from './projectCard';
import Carousel from "./carousel";

class Projects extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            'projects': [<ProjectCard title="project 1" />, <ProjectCard title="project 2"/>, <ProjectCard title="project 3"/>],
        }
    }

    render()
    {
        return (
            <section id="projects" className="section items-center p-12">
                    <h2 className="text-5xl text-center m-10">PROJECT SHOWCASE</h2>
                    <div className="text-center">
                        <p>
                            This is a collection of projects that I have worked on, both personal and at school. You can find all my projects on my github.
                        </p>
                        <section className="flex justify-center items-center p-4 pt-10 h-500 gap-4">
                            <Carousel projects={this.state.projects}/>
                        </section>
                    </div>
            </section>
        );
    }
}

export default Projects;