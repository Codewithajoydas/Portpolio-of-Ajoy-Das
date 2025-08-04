import React from "react";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Frontend Tips & Web Dev Insights by Ajoy Das</title>
        <meta
          name="description"
          content="Read frontend articles, UI/UX tricks, JavaScript hacks, and real-world coding insights by Ajoy Das — creator of CodeWithAjoy.live."
        />

        <meta
          property="og:title"
          content="Ajoy Das Blog — Frontend Tips & Dev Thoughts"
        />
        <meta
          property="og:description"
          content="Explore blog posts focused on React, UI design, and productivity for developers."
        />
        <meta
          property="og:image"
          content="https://codewithajoy.live/assets/og-blog.jpg"
        />
        <meta property="og:url" content="https://codewithajoy.live/blog" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div>
        <h1>Blog Page</h1>
        <p>Welcome to the blog! Stay tuned for updates.</p>
      </div>
    </>
  );
};

export default Blog;
