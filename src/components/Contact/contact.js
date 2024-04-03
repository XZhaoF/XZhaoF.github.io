import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser'

export const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_cdbqvz5', 'template_wyl2tpt', form.current, 'eZZik_wNNeXcp0gto')
        .then(() => {
            console.log('SUCCESS!');
            e.target.reset()
            alert("Sent!")
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    };
    

    return (
        <section id="contactPage">
            <div className="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Reach out by filling out the form below!</span>

                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="from_name" />
                    <input type="email" className="email" placeholder="Your Email" name="from_email"/>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type="submit" value= "Send" className="submitButton" >Send</button>
                </form>

                
            </div>
        </section>
    )
}

export default Contact
