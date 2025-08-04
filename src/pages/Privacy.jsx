import React from "react";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Code with Ajoy Das</title>
        <meta
          name="description"
          content="Review the privacy policy of Code with Ajoy Das. Learn how your data is handled securely on this website."
        />

        <meta
          property="og:title"
          content="Privacy Policy — Code with Ajoy Das"
        />
        <meta
          property="og:description"
          content="Transparency about data collection and protection."
        />
        <meta
          property="og:image"
          content="https://codewithajoy.live/assets/og-privacy.jpg"
        />
        <meta property="og:url" content="https://codewithajoy.live/privacy" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div style={{ padding: "2rem" }}>
        <h1>Privacy Policy</h1>
        <p>
          Your privacy is important to us. This page describes how we handle
          your personal information and data.
        </p>
        <ul>
          <li>We do not share your information with third parties.</li>
          <li>All data is stored securely.</li>
          <li>You can contact us for any privacy-related concerns.</li>
        </ul>
      </div>
    </>
  );
};

export default Privacy;
