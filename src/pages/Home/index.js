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

const index = () => {
  return (
    <>
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
      <p style={{ fontWeight: "bold", color: "#707070" }}>
        A Fullstack Developer who passionate about modern mobile and web
        <br />
        technology using Node JS, React JS, React Native, and Flutter. And would
        <br />
        be a fast learner to doing new things and build good teamwork either.
        <br />
        Can become a project leader/manager and using tools like Trello to
        <br />
        manage project and task.
      </p>

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
                    color: "#707070"
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
                    color: "#707070"
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
                    color: "#707070"
                  }}
                />
              </a>
              <a href="#" target="_blank" rel="noopener">
                <TwitterOutlined
                  style={{
                    margin: 10,
                    fontSize: 30,
                    fontWeight: "bold",
                    color: "#707070"
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
