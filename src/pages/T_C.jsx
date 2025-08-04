import React from "react";

const T_C = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Code with Ajoy Das</title>
        <meta
          name="description"
          content="Understand the terms and conditions before using Code with Ajoy Das."
        />

        <meta
          property="og:title"
          content="Terms & Conditions — Code with Ajoy Das"
        />
        <meta
          property="og:description"
          content="Legal terms and fair usage rules of this platform."
        />
        <meta
          property="og:image"
          content="https://codewithajoy.live/assets/og-terms.jpg"
        />
        <meta property="og:url" content="https://codewithajoy.live/t&c" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div>
        <h1>Terms & Conditions</h1>
        <p>
          Please read these terms and conditions carefully before using this
          site.
        </p>
        {/* Add more terms and conditions content here */}
      </div>
    </>
  );
};

export default T_C;
