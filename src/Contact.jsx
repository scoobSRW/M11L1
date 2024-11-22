import React from 'react';

const phone = "718-598-7446";
const email = "peter.parker@thedailybugle.com";

function Contact() {
    return (
        <div>
            <h1>How to Reach Out:</h1>
            <p>Feel free to contact me on my mobile: <br /> {phone} <br />
            Or contact me via email: <br /> {email}</p>
        </div>
    );
}

export default Contact;