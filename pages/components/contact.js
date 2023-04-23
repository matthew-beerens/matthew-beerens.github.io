import { Component } from "react";

class Contact extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <section id="contact" className="section items-center p-12">
                    <h2 className="text-5xl text-center m-10">CONTACT ME</h2>
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

export default Contact;