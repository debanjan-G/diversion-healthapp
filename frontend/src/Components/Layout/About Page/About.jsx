import "./About.css";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const NewAbout = () => {
  return (
    <>
      <center className="aboutUs-header">Our Team</center>
      <div className="aboutUs-container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img
                  className="img-fluid"
                  src="https://media.licdn.com/dms/image/D4D03AQG6tl9mVZ9TCw/profile-displayphoto-shrink_800_800/0/1671552881794?e=1712793600&v=beta&t=zGj0SpjaMGSCfjryuyV3i-kJFISeFGZraurZAqsyxMk"
                />
              </div>
              <div className="team-content">
                <h3 className="name">Samanyu Roy</h3>
                <h4 className="title">Backend Developer</h4>
              </div>
              <ul className="social">
                <li>
                  <a href="https://github.com/sama-004">
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-twitter"
                  >
                    <FaXTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/samanyu-roy/"
                    className="fa fa-twitter"
                  >
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img
                  className="img-fluid"
                  src="https://scontent-ccu1-1.xx.fbcdn.net/v/t39.30808-6/406161286_1020341332362690_8499907593147031348_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=J__HnyVpOmoAX98K5PV&_nc_oc=AQmItCpWVRQY3dgVX35XkizJZR6wABem2uUhoq9aYLXn8h3Oi-Ujg008HixkUxlqQdo&_nc_ht=scontent-ccu1-1.xx&cb_e2o_trans=q&oh=00_AfB5RwjYQJ2Z-P68i36PCOK-WJJiDhpPw2qbobd0LWMhXw&oe=65C3E5D2"
                />
              </div>
              <div className="team-content">
                <h3 className="name">Prithiwis Das</h3>
                <h4 className="title">Frontend Developer</h4>
              </div>
              <ul className="social">
                <li>
                  <a href="https://github.com/prithiwis">
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/PrithiwisDas"
                    className="fa fa-twitter"
                  >
                    <FaXTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/prithiwis-das-837a90285/"
                    className="fa fa-twitter"
                  >
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img
                  className="img-fluid"
                  src="https://avatars.githubusercontent.com/u/130127260?v=4"
                />
              </div>
              <div className="team-content">
                <h3 className="name">Debanjan Ghosal</h3>
                <h4 className="title">Frontend Developer</h4>
              </div>
              <ul className="social">
                <li>
                  <a href="https://github.com/debanjan-G">
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/DevDebanjann "
                    className="fa fa-twitter"
                  >
                    <FaXTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/debanjan-ghosal-89a04b253/"
                    className="fa fa-twitter"
                  >
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img
                  className="img-fluid"
                  src="https://avatars.githubusercontent.com/u/129976210?v=4"
                />
              </div>
              <div className="team-content">
                <h3 className="name">Ayan Maity</h3>
                <h4 className="title">Backend Developer</h4>
              </div>
              <ul className="social">
                <li>
                  <a href="https://github.com/Ayan564">
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/maity4949"
                    className="fa fa-twitter"
                  >
                    <FaXTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ayan-maity-557a14253/"
                    className="fa fa-twitter"
                  >
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewAbout;
