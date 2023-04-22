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
            <header className="flex gap-4 flex-col h-screen justify-center items-center">
                <h1 className="text-9xl">Hi. I'm Matt.</h1>
                <h3 className="text-xl">Computer Science Graduate Majoring in Networked Systems, Cybersecurity.</h3>
            </header>
        );
    }
}

export default Hero;