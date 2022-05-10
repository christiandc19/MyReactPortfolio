import React from "react";
import './contact.css'
import emailjs from 'emailjs-com'

const Contact = ()  => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_9v2gipl', 
    'template_6sicgx7', 
    e.target, 
    'jysvNywN0d2HeSXN1'
    ).then(res => {
      console.log(res);
    }).catch((err) => console.log('Failed', err));
  }

    return (
      <div className="container border"
      style={{marginTop: "10%",
      width: "50%"
    }}
      >
        <h1 style={{marginTop: "50px"}}>Contact Form</h1>
        <form className="row" style={{margin:"25px 85px 75px 100px"}} 
        onSubmit={{sendEmail}}>
            
            <label>Name</label>
            <input type="text" name="name" className="form-control" />

            <label>Email</label>
            <input type="email" name="user_email" className="form-control"/>
            
            <label>Message</label>
            <textarea name="message" rows="4" className="form-control" />
            
            <input 
            type="submit" 
            value="Send" 
            className="form-control btn btn-primary" 
            style={{marginTop:"30px", width:"20rem"}}/>
        </form>
      </div>
    )
}

export default Contact