// src/pages/NotFound.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/NotFound.scss";
const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Code with Ajoy Das</title>
        <meta
          name="description"
          content="Sorry, this page does not exist. You may have entered an incorrect URL or the page was moved."
        />
      </Helmet>

      <div className="not-found-page">
        <h1>404</h1>
        <p>
          <a href="/" className="back-home-link">
            ← Page Not Found{" "}
          </a>
        </p>
      </div>
    </>
  );
};

export default NotFound;
