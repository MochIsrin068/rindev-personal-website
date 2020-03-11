import React from "react";
import Photo from "../../assets/images/photo.png";
import {
  GithubOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  TwitterOutlined
} from "@ant-design/icons";
import ReactTypingEffect from "react-typing-effect";
import "../../index.css";
import { Helmet } from "react-helmet";

const index = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>RINDEV</title>
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
      <div className="avatar-wrapper">
        <img src={Photo} className="avatar" />
      </div>
      <h1
        style={{
          fontWeight: "bold",
          color: "#707070",
          fontSize: 31,
          marginTop: 8
        }}
      >
        MOCH ISRIN
      </h1>
      <h1 className="developer">
        I'M&nbsp;
        <ReactTypingEffect text={["WEB", "MOBILE"]} />
        &nbsp;DEVELOPER
      </h1>
      {/* <div className="mini-info"> */}
      {/* <hr className="main-line" /> */}
      <div className="desc">
        <p
          style={{
            fontWeight: "bold",
            color: "#707070",
            textAlign: "center",
            marginTop: 20
          }}
        >
          A Fullstack Developer who passionate about modern mobile and web
          technology using Node JS, React JS, React Native, and Flutter. AnFd
          would be a fast learner to doing new things and build good teamwork
          either. Can become a project leader/manager and using tools like
          Trello to manage project and task.
        </p>
      </div>

      <div className="center">
        <div className="social-media">
          <center>
            <div className="social-media2">
              <a
                href="https://github.com/MochIsrin068"
                target="_blank"
                rel="noopener"
              >
                <GithubOutlined
                  style={{
                    margin: 10,
                    fontSize: 30,
                    fontWeight: "bold",
                    color: "#fff"
                  }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-isrim-yambi-b-31171016a/"
                target="_blank"
                rel="noopener"
              >
                <LinkedinOutlined
                  style={{
                    margin: 10,
                    fontSize: 30,
                    fontWeight: "bold",
                    color: "#fff"
                  }}
                />
              </a>
              <a
                href="https://instagram.com/is.rin98"
                target="_blank"
                rel="noopener"
              >
                <InstagramOutlined
                  style={{
                    margin: 10,
                    fontSize: 30,
                    fontWeight: "bold",
                    color: "#fff"
                  }}
                />
              </a>
              <a href="#" target="_blank" rel="noopener">
                <TwitterOutlined
                  style={{
                    margin: 10,
                    fontSize: 30,
                    fontWeight: "bold",
                    color: "#fff"
                  }}
                />
              </a>
            </div>
          </center>
          <h3 style={{ fontWeight: "bold", color: "#707070" }}>
            isrin068@gmail.com
          </h3>
        </div>
      </div>
    </>
  );
};

export default index;
