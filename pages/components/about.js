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
            <section id='about' className="section items-center ">
                <div className="flex flex-col h-screen w-screen justify-center items-center p-12">
                    <h2 className="text-5xl text-center m-10">ABOUT ME</h2>
                    <p className="text-center w-2/3">
                        I'm a computer science graduate from WSU in Sydney, passionate about web and software development, as well as cyber security. With a strong foundation in programming, I create functional and visually appealing applications that solve real-world problems. I also have experience in ethical hacking and penetration testing, ensuring that the software I build is secure. In my free time, I enjoy reading about and learning new technologies. Feel free to reach out and say hello!    
                    </p>
                </div>
            </section>
        );
    }
}

export default About;