import { Component } from "react";
import ProjectCard from './projectCard';

class Projects extends Component
{
    constructor(props)
    {
        super(props);
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
                            <ProjectCard />
                            <ProjectCard />
                        </section>
                    </div>
            </section>
        );
    }
}

export default Projects;