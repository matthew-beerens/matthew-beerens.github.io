import { Component } from "react";
import Image from "next/image";
import img from "./cyberblog.PNG";

class ProjectCard extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <figure className='flex flex-col bg-neutral-200 rounded-sm shadow-md h-500 justify-center items-center min-w-full'>
                <Image width={600} alt="thumbnail image" src={img}/>
                <figcaption className="p-4 bg-white w-full">
                    {this.props.title}
                </figcaption>
            </figure>
        );
    }
}

export default ProjectCard;