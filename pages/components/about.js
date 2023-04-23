import { Component } from "react";

class About extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <section id='about' className="section items-center p-12">
                    <h2 className="text-5xl text-center m-10">ABOUT ME</h2>
                    <div className="text-center">
                        <p>
                            Hello, this is about me Hello, this is about me Hello, this is about me Hello, this is about me Hello, this is about me
                            Hello, this is about me Hello, this is about me Hello, this is about me Hello, this is about me
                        </p>
                    </div>
            </section>
        );
    }
}

export default About;