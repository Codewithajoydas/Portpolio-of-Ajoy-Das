import React from "react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Code with Ajoy Das — Get in Touch</title>
        <meta
          name="description"
          content="Want to collaborate with Ajoy Das? Reach out for freelance frontend work, projects, or developer talks."
        />

        <meta
          property="og:title"
          content="Contact Ajoy Das — Let's Build Together"
        />
        <meta
          property="og:description"
          content="Open to frontend projects, mentorship, or collaborations."
        />
        <meta
          property="og:image"
          content="https://codewithajoy.live/assets/og-contact.jpg"
        />
        <meta property="og:url" content="https://codewithajoy.live/contact" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div>
        <h1>Contact Page</h1>
        <p>This is the contact page.</p>
      </div>
    </>
  );
};

export default Contact;
