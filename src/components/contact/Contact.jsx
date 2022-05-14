import React, {useRef} from "react";
import './contact.css'
import myAvatar from '../../assets/myAvatar.png'
import emailjs from 'emailjs-com'
import HeaderSocials from "../header/HeaderSocials";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

// Popup message after send button is clicked
    const feedbackEl = document.querySelector(".feedback");
    feedbackEl.setAttribute("class", "feedback");
  setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 4000);


                  //    Service Id        Template Id                 Public Key (Account Tab) 
   emailjs.sendForm('service_9v2gipl', 'template_rxc8sbg', form.current, 'jysvNywN0d2HeSXN1')
     .then((result) => {
         console.log(result.text);
     }, (error) => {
         console.log(error.text);
     });

     e.target.reset()
 };

    return (
      <>
      <div class="bg-contact"></div>

      <div className="container contact-container">
        
          <form ref={form} onSubmit={sendEmail}>
            <h1>SEND A MESSAGE</h1>
            <input className="user-input" type="text" name='name' placeholder='Name' required />
            <input className="user-input" type="text" name='email' placeholder='Email' required />
            <textarea className="user-input email-input" name="message" rows="4" placeholder="Message" required ></textarea>
            <div className="submit-btn">
            <button type='submit' className="btn-modal btn btn-primary">Send</button>
            </div>
            
              <div className="feedback hide">
              <img  src= {myAvatar} alt='avatar'/>
              <h5>Message Sent! </h5>
              </div>
          </form>
      </div>


      <div className="contact-quote">
                    “Great web design without functionality is like a sports car with no engine.”
– Paul Cookson
                    </div>
                    <div>
                    <HeaderSocials />
                    </div>
                    <div className="follow">
                    <p>Follow Me</p>
                    </div>

      </>
    )
}



export default Contact