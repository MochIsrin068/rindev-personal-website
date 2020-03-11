import React from "react";
import { Helmet } from "react-helmet";

const index = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>RINDEV - About</title>
        <link
          rel="icon"
          href="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
        ></link>
        <script
          async
          src="https://cdn.embedly.com/widgets/platform.js"
          charset="UTF-8"
        ></script>
      </Helmet>
      <div className="center">
        <div className="social-media">
          <a
            className="embedly-card"
            data-card-controls="0"
            data-card-theme="dark"
            href="https://www.linkedin.com/in/muhammad-isrim-yambi-b-31171016a/"
            target="_blank"
            rel="noopener"
            style={{ width: "20%" }}
          >
            Muhammad Isrim Yambi B. - Frontend Developer - DOOgether | LinkedIn
          </a>
          <a
            className="embedly-card"
            data-card-controls="0"
            data-card-theme="dark"
            target="_blank"
            rel="noopener"
            href="https://github.com/MochIsrin068"
          >
            MochIsrin068 - Overview
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
