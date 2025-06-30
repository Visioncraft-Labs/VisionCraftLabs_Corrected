import React from 'react';

export default function Contact() {
  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h2>Contact Us</h2>
      <form name="contact" method="POST" data-netlify="true" netlify>
        <input type="text" name="name" placeholder="Your Name" required style={{ display: "block", margin: "10px 0", padding: "8px", width: "100%" }} />
        <input type="email" name="email" placeholder="Your Email" required style={{ display: "block", margin: "10px 0", padding: "8px", width: "100%" }} />
        <textarea name="message" placeholder="Your Message" required style={{ display: "block", margin: "10px 0", padding: "8px", width: "100%", height: "100px" }} />
        <button type="submit" style={{ padding: "10px 20px", marginTop: "10px" }}>Send</button>
      </form>
    </div>
  );
}
