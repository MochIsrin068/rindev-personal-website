import React from "react";
import Photo from "../../assets/images/person.jpg";
import {
  GithubOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  MediumOutlined,
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
          marginTop: 8,
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
            marginTop: 20,
          }}
        >
          I'm a creative, full stack + frontend engineer. I merge technical
          skills with design knowledge to create innovative products that drive
          business. And I also a fast learner to doing new things and build good
          teamwork either. Can become a project leader/manager and using tools
          like Trello to manage project and task.
        </p>
      </div>

      <div className="center">
        <div className="social-media">
          <center>
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
                  color: "#ddd",
                }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/rindev/"
              target="_blank"
              rel="noopener"
            >
              <LinkedinOutlined
                style={{
                  margin: 10,
                  fontSize: 30,
                  fontWeight: "bold",
                  color: "#ddd",
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
                  color: "#ddd",
                }}
              />
            </a>
            <a
              href="https://medium.com/@isrin068"
              target="_blank"
              rel="noopener"
            >
              <MediumOutlined
                style={{
                  margin: 10,
                  fontSize: 30,
                  fontWeight: "bold",
                  color: "#ddd",
                }}
              />
            </a>
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
