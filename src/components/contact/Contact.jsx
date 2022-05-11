import React, {useRef} from "react";
import './contact.css'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
   e.preventDefault();

   emailjs.sendForm('service_9v2gipl', 'template_rxc8sbg', form.current, 'jysvNywN0d2HeSXN1')
     .then((result) => {
         console.log(result.text);
     }, (error) => {
         console.log(error.text);
     });

     e.target.reset()
 };

    return (
      <div className="contact-container">
        
          <form ref={form} onSubmit={sendEmail}>
            <h1>Contact Form</h1>
            <input className="user-input" type="text" name='name' placeholder='Your Full Name' required />
            <input className="user-input" type="text" name='email' placeholder='Your Email' required />
            <textarea className="user-input email-input" name="message" rows="4" placeholder="Your Message" required ></textarea>
            <div className="submit-btn">
            <button type='submit' className="btn-modal btn btn-primary">Send Message</button>
            </div>
          </form>
      </div>
    )
}



export default Contact