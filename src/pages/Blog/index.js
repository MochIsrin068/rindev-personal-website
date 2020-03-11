import React from "react";
import { Helmet } from "react-helmet";

const index = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>RINDEV - Blog</title>
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
            href="http://medium.com/@mochisrin"
            target="_blank"
            rel="noopener"
          >
            Moch Isrin - Medium
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
