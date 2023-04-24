import { Component } from "react";

class Expertise extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <section id="expertise" className="section items-center">
                <div className="h-screen w-screen flex flex-col justify-center items-center">
                <h2 className="text-5xl text-center m-10">EXPERTISE</h2>
                    <div className="flex w-4/5 gap-12 justify-center">
                        <section className="text-left p-4 w-1/2">
                            <p>
                                I have spent the last decade exploring a range of technologies which include
                                web (frontend, backend), desktop and mobile applications, command-line tools, databases and operating systems.
                            </p>
                            <br/>                            
                            <p>
                                I've spent time learning and understanding the principles and practices of cybersecruity.
                            </p>
                            <br/>
                            <p>
                            I have learnt how to build and implement a plethora of network designs and have an indepth understanding of how they work.
                            </p>
                        </section>
                        
                        <ul className="text-left p-4 w-1/2 space-y-2">
                            <li>Linux operating system and distributions (Redhat, Fedora, centOS, Kali)</li>
                            <li>Scripting and automating tasks with Python/Bash</li>
                            <li>Systems programming with C</li>
                            <li>Web development with Django, React/Express, PHP</li>
                            <li>Software Development using C++, C, Java, Python</li>
                            <li>Database design and development</li>                                <li>Penetration testing using industry standard tools</li>
                        </ul>
                        
                    </div>
                    <br/>
                    <p className="text-neutral-400">I made this website using Next.js, Tailwind CSS and fullPage.js</p>
                </div>
                    
            </section>
        );
    }
}

export default Expertise;