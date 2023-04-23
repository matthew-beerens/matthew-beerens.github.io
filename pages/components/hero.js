import { Component } from "react";

class Hero extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <header id="home" className="section flex gap-4 flex-col h-screen justify-center items-center">
                <h1 className="text-9xl text-center m-10">Hi. I'm Matt.</h1>
                <h3 className="text-xl text-center">Computer Science Graduate Majoring in Networked Systems, Cybersecurity.</h3>
            </header>
        );
    }
}

export default Hero;