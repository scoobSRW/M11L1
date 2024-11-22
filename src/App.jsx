import React from 'react';
import GreetingAndAbout from './GreetingAndAbout';
import Contact from './Contact';
import './styles.css';

function App() {
    return (
        <div>
            <h1>Hello, Queens!</h1>
            <GreetingAndAbout />
            <Contact />
        </div>
    );
}
export default App