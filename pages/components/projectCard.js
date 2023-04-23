import { Component } from "react";
import Image from "next/image";
import img from "./GitHub_Logo.png";

class ProjectCard extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <figure className='flex flex-col p-6 bg-neutral-200 rounded-sm shadow-md w-4/5 h-500 justify-center items-center max-w-md'>
                <Image width={400} alt="thumbnail image" src={img}/>
                <p className="w-full mb-5">This is a project card.</p>
                <figcaption className="text-justify">
                    This is the project description.
                    This is the project description.
                    This is the project description.
                </figcaption>
            </figure>
        );
    }
}

export default ProjectCard;