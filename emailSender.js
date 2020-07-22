import React from "react";
import * as emailjs from "emailjs-com";
export default function emailSender() {
  var params = {
    to_email: email, //the email you want to send the mail
                     //On email.js where the require  the to_email you just write {{to_email}} 
                     //if you are still confuse just check helper.jpg
                     //You can add more params that you want 
  }
    var service_id = "default_service";
    var user_id = "Your User Id Here";

    // var service_id = "default_service";
    var template_id = "Your templete id here"; 
    emailjs.send(service_id, template_id, params, user_id)
  
  return (
    <div>
      <form className="contact-form" /*onSubmit={sendEmail}*/>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
