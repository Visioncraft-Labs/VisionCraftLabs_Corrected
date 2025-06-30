import React from 'react';

export default function Contact() {
  return (
    <form name="contact" method="POST" data-netlify="true" netlify>
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required />
      <button type="submit">Send</button>
    </form>
  );
}
