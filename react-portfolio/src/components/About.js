import React from "react";

export default function About() {
    return(
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4  font medium text-white">
                        Hello, I'm Darren
                        <br className="hidden lg:inline-block"/>
                        I love building apps!  
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I'm a web developer with a Full Stack Web Development Certificate from SMU. I have a background in Irrigation and Warehousing. Where I learned to work as a team, give a 
                        100% everyday, and stay optimistic no matter what the challenge. I hope to bring that same work ethic to my next career in Full Stack Web Development.
                    </p>
                    <div className="flex justify-center">
                        <a href="#contact" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Contact
                        </a>
                        <a href="#projects" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            My Work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src="./coding.svg"/>
                </div>
            </div>
        </section>
    );
}