import React from "react";
import * as emailjs from "emailjs-com";
export default function emailSender() {
  function sendEmail(e) {
    emailjs
      .sendForm(
        "default_service",
        "decentralized_voting_platform",
        e.target,
        "lb9GeK9CH5WP2u1U7wCuO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
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
