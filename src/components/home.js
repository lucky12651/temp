import React from "react";





export function LandingPage() {
  return (
    
    <>
       
  
      <div className="home">
       
        <div className="home-right">
          <h3>
            <span id="hey">Hey👋</span>
          </h3>
          <h1 id="#h1st">
            I am
            <span id="text1"> Sameer Shrivastava</span>
          </h1>
          <h3 id="hey">Web Developer | UI/UX Designer | Content Writer</h3>
          <p id="home-para">
            "🌐 Web Developer | 🎨 UI/UX Designer | ✍️ Content Writer | 📺
            YouTuber with 49K Subscribers | Crafting Digital Excellence!"
          </p>
          <button className="btn btn-success" id="hire-btn">
            Hire Me
          </button>
          <button className="btn btn-success" id="yt-btn">
            YouTube
          </button>
        </div>
        <div className="sci">
          <ul>
            <a href="https://www.facebook.com/profile.php?id=100089086305391">
              {" "}
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </ul>
          <ul>
            <a href="https://www.linkedin.com/in/sameer-shrivastava01/">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </ul>
          <ul>
            <a href="https://www.youtube.com/channel/UC6SUYy4kMVj6Xtqay0NuNbg">
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
          </ul>
          <ul>
            <a href="https://www.instagram.com/im_samshrivastav/">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </ul>
        </div>
      </div>
      <div className="about" id="about">
        <div className="info-about1">
          <span id="about-span">
            Welcome to my world of creativity and technology! 🌟
          </span>
          <h1>About me</h1>
          <div className="about-intro">
            <p id="a2">
              🚀 I am a passionate and aspiring web developer with a fresh
              perspective on the digital landscape. My journey began with a
              strong foundation in Computer Science and Engineering, having
              earned my B.Tech degree. While I may be a fresher in the field, my
              enthusiasm and dedication to learning are unparalleled.
            </p>
          </div>
          <div
            class="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <button type="button" class="btn btn-success" href="#">
              DOWNLOAD CV
            </button>
          </div>
        </div>
        <div className="me">
          <img src="img/me.jpg" alt="my-img" id="me" />
        </div>
      </div>
      <section id="skills" className="skills">
       
        <div className="skills-main">
          <div className="skills-left">
            <h3>Technical Skills</h3>

            <div className="skills-bar">
              <div className="info">
                <p>HTML</p>
                <p>75%</p>
              </div>
              <div className="bar">
                <span className="html"></span>
              </div>
            </div>
            <div className="skills-bar">
              <div className="info">
                <p>JavaScript</p>
                <p>50%</p>
              </div>
              <div className="bar">
                <span className="javascript"></span>
              </div>
            </div>

            <div className="skills-bar">
              <div className="info">
                <p>Figma</p>
                <p>90%</p>
              </div>
              <div className="bar">
                <span className="figma"></span>
              </div>
            </div>

            <div className="skills-bar">
              <div className="info">
                <p>React.js</p>
                <p>70%</p>
              </div>
              <div className="bar">
                <span className="reactjs"></span>
              </div>
            </div>

            <div className="skills-bar">
              <div className="info">
                <p>CSS</p>
                <p>60%</p>
              </div>
              <div className="bar">
                <span className="css"></span>
              </div>
            </div>
          </div>
          
          <div className="skills-right-main">
                  <h3 id="right-skill">Professional Skills</h3>
            <div className="skills-right">
              <div className="circle">
                <div className="outer">
                  <div className="inner">
                    <div id="number">65%</div>
                  </div>
                </div>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="#e91e63" />
                    <stop offset="100%" stop-color="#673ab7" />
                  </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" stroke-linecap="round" />
              </svg>
              <p className="s1-p">Python</p>
            </div>
            <div className="circle" children='c1' id="skill2">
              <div className="outer">
                <div className="inner">
                  <div id="number">75%</div>
                </div>
              </div>
            </div>

            <svg
              className="svg2"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
            >
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stop-color="#e91e63" />
                  <stop offset="100%" stop-color="#673ab7" />
                </linearGradient>
              </defs>
              <circle cx="80" cy="80" r="70" stroke-linecap="round" />
            </svg>
            <p className="s2-p">SEO</p>
            <div className="circle" id="skill3">
              <div className="outer">
                <div className="inner">
                  <div id="number">90%</div>
                </div>
              </div>
            </div>
            <svg
              className="svg3"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
            >
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stop-color="#e91e63" />
                  <stop offset="100%" stop-color="#673ab7" />
                </linearGradient>
              </defs>
              <circle cx="80" cy="80" r="70" stroke-linecap="round" />
            </svg>
            <p className="s3-p">Photoshop & Premiere pro</p>
            <div className="circle" id="skill4">
              <div className="outer">
                <div className="inner">
                  <div id="number">80%</div>
                </div>
              </div>
            </div>
            <svg
              className="svg4"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
            >
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stop-color="#e91e63" />
                  <stop offset="100%" stop-color="#673ab7" />
                </linearGradient>
              </defs>
              <circle cx="80" cy="80" r="70" stroke-linecap="round" />
            </svg>
            <p className="s4-p">Java</p>
          </div>
        </div>
      </section>
      <section id="contact">
        <div class="container">
          <div class="section-heading">
            <h2>Contact Me</h2>
            <p>
              If you'd like to get in touch with me, please feel free to reach
              out using the following information:
            </p>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="contact-info">
                <h3>Contact Information</h3>
                <p>
                  <strong>Name:</strong> SAMEER SHRIVASTAVA
                </p>
                <p>
                  <strong>Email:</strong> sameersam96544@gmail.com
                </p>
                <p>
                  <strong>Phone:</strong> (+91) 9654435027
                </p>
                <p>
                  <strong>Location:</strong>{" "}
                  <i class="fas fa-map-marker-alt"></i> New Delhi, India
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="contact-form">
                <h3>Contact Form</h3>
                <form id="contact-form" method="post" action="contact.php">
                  <div class="form-group">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <textarea
                      name="message"
                      class="form-control"
                      rows="6"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <button type="submit" class="btn btn-success">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
