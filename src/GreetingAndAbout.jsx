import React from 'react';
import spidermanImage from './assets/images/spiderman.jpg';

const name = "Peter Parker";
const greeting = <p>I am {name}!</p>;

const sectionStyle = {
    backgroundImage: `url(${spidermanImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    position: 'relative',
    color: 'white',
    padding: '20px',
};

function Greeting() {
    return (
        <div style={sectionStyle}>
            {greeting}
            <div className="about-content">
                <h1>About Me:</h1>
                <p>Hi, I'm Peter Parker, your friendly neighborhood Spider-Man! By day, I'm a photographer and science
                    enthusiast with a passion for uncovering the extraordinary in everyday life. By night, I protect New York City
                    as Spider-Man, using my powers to fight for justice and lend a helping hand wherever I can. Balancing these
                    two worlds isn’t always easy, but I believe with great power comes great responsibility. When I'm not
                    swinging through skyscrapers, you’ll find me geeking out over tech, working on new inventions, or catching
                    up with my Aunt May and friends.</p>
            </div>
        </div>
    );
}

export default Greeting;
