import React from "react";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>
          About | Code with Ajoy Das — Frontend Developer & UI Engineer
        </title>
        <meta
          name="description"
          content="Learn more about Ajoy Das, a passionate frontend developer who crafts fast, beautiful, and accessible websites using HTML, CSS, JavaScript, React, and modern UI tools."
        />

        <meta
          property="og:title"
          content="About Ajoy Das — Web Developer & UI Enthusiast"
        />
        <meta
          property="og:description"
          content="Discover Ajoy's background, journey, and coding mission."
        />
        <meta
          property="og:image"
          content="https://codewithajoy.live/assets/og-about.jpg"
        />
        <meta property="og:url" content="https://codewithajoy.live/about" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div>
        <h1>About Page</h1>
        <p>This is the about page of the application.</p>
      </div>
    </>
  );
};

export default About;
