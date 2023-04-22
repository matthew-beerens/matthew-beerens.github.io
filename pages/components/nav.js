import { Component } from "react";

class Nav extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <nav className="flex w-screen justify-between p-4 fixed">
                <div>Matthew Beerens</div>
                <div>
                    <ul className='flex justify-around'>
                        <li className="pr-4 pl-4">Home</li>
                        <li className="pr-4 pl-4">About</li>
                        <li className="pr-4 pl-4">Expertise</li>
                        <li className="pr-4 pl-4">Projects</li>
                        <li className="pr-4 pl-4">Contact</li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;