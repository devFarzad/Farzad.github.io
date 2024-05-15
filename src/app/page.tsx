import { Metadata } from "next";
import Link from "next/link";
import { CSSProperties } from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";

export const metadata: Metadata = {
  title: "devFarzad",
  description: "Hi! I'm Farzad. A Full Stack Developer.",
  creator: "Farzad",
};

export default function Home() {
  const fadeInAnimation: CSSProperties = {
    animationName: "fadeIn",
    animationDuration: "2s",
    animationTimingFunction: "ease-in-out",
    animationFillMode: "forwards",
  };

  // Adding a paddingBottom to the main container that equals the footer's height
  // ensures content is not hidden behind the fixed footer.
  const mainContainerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100%",
    minWidth: "100%",
    paddingTop: "1%",
    paddingBottom: "4%",
    // marginTop:'50px'
    // ,  border:'4px dashed #fff',
    backgroundImage: 'url("/assets/image/bg.jpg")',
    backgroundSize: "cover",
    // backgroundPosition: "center",
    // padding: "20px",
    // paddingBottom: "70px", // Adjust this value based on your footer's height
  };

  const iconContainerStyle: CSSProperties = {
    display: "flex",
    // justifyContent: 'center',
    position: "absolute",
    // bottom: "70px", // Position above the footer, adjust based on your footer's height
    // left: 0,
    // right: 0,
    // padding: "10px",
  };

  return (
    <>
      <header>
        <div>
          <div style={iconContainerStyle}>
            <a
              href="mailto:farzad.un1990@hotmail.com"
              style={{ margin: "0 10px" }}
            >
              <FaEnvelope size={30} color="#fff" />
            </a>
            <a href="https://github.com/devFarzad" style={{ margin: "0 10px" }}>
              <FaGithub size={30} color="#fff" />
            </a>
          </div>
        </div>
        <h1>Farzad</h1>
        <p>Full Stack Developer</p>
      </header>

      <main>
        <div style={mainContainerStyle}>
          <div
            style={{
              //   fontSize: "30px",
              //   fontWeight: 700,
              //   color: '#fff',
              overflowY: "auto",

              borderRadius: 5,
              padding: "0 20%",
              //   padding: "20px 40px",
              // background: "linear-gradient(rgba(46, 83, 52, 0.85), rgba(26, 36, 47, 0.85))",
              ...fadeInAnimation,
            }}
          >
            <section>
              <div className="section-header">About Me</div>
              <p
                style={{
                  padding: "2%",
                  borderRadius: 5,
                  background: "#333333",
                }}
              >
                lead developer at datacode, who likes coding.
              </p>
            </section>
            <section>
              <div className="section-header" style={{ paddingTop: "1%" }}>
                Skills
              </div>
              <ul className="skills">
                <li className="skill">
                  <Link href={"https://www.javascript.com/"}>
                    {"JavaScript"}
                  </Link>
                </li>
                <li className="skill">
                  <Link href={"https://www.typescriptlang.org/"}>
                    {"Typescript"}
                  </Link>
                </li>
                <li className="skill">
                  <Link href={"https://react.dev/"}>{"React"}</Link>
                </li>
                <li className="skill">
                  <Link href={"https://nextjs.org/"}>{"NextJs"}</Link>
                </li>
                <li className="skill">
                  <Link href={"https://expressjs.com/"}>{"ExpressJs"}</Link>
                </li>
                <li className="skill">
                  <Link href={"https://nestjs.com/"}>{"NestJs"}</Link>
                </li>
                <br />
                <hr />
                <li className="skill">
                  <Link href={"#"}>{"Node.Js"}</Link>
                </li>

                <li className="skill">
                  <Link
                    href={"https://learn.microsoft.com/en-us/dotnet/csharp/"}
                  >
                    {"C#"}
                  </Link>
                </li>

                <li className="skill">
                  <Link href={"https://www.mongodb.com/"}>{"MongoDB"}</Link>
                </li>
                <li className="skill">
                  <Link href={"https://www.mysql.com/"}>{"MySQL"}</Link>
                </li>
                <li className="skill">
                  <Link href={"https://www.Postgresql.org/"}>
                    {"Postgresql"}
                  </Link>
                </li>
                <li className="skill">
                  <Link href={"https://www.firebase.com/"}>{"Firebase"}</Link>
                </li>
                <li className="skill">
                  <Link href={"https://www.prisma.io/"}>{"Prisma"}</Link>
                </li>
                <li className="skill">
                  <Link href={"https://www.supabase.com/"}>{"Supabase"}</Link>
                </li>
              </ul>
            </section>
            <section>
              <div className="section-header" style={{ paddingTop: "1%" }}>
                Portfolio
              </div>
              <div className="projects">
                <div className="project">
                  <div className="project-title">
                    <h1
                      style={{
                        padding: "1%",
                        fontSize: "14px",
                        fontWeight: "700",
                      }}
                    >
                      Portfolio Update Coming Soon 1
                    </h1>
                  </div>
                  <div className="project-description">
                    My portfolio section is currently being updated to showcase
                    my latest projects and skills. Stay tuned for the refreshed
                    portfolio, coming soon!
                  </div>
                </div>
                <div className="project">
                  <div className="project-title">
                    <h1
                      style={{
                        padding: "1%",
                        fontSize: "14px",
                        fontWeight: "700",
                      }}
                    >
                      Portfolio Update Coming Soon 2
                    </h1>
                  </div>
                  <div className="project-description">
                    My portfolio section is currently being updated to showcase
                    my latest projects and skills. Stay tuned for the refreshed
                    portfolio, coming soon!
                  </div>
                </div>
                <div className="project">
                  <div className="project-title">
                    <h1
                      style={{
                        padding: "1%",
                        fontSize: "14px",
                        fontWeight: "700",
                      }}
                    >
                      Portfolio Update Coming Soon 3
                    </h1>
                  </div>
                  <div className="project-description">
                    My portfolio section is currently being updated to showcase
                    my latest projects and skills. Stay tuned for the refreshed
                    portfolio, coming soon!
                  </div>
                </div>
                <div className="project">
                  <div className="project-title">
                    <h1
                      style={{
                        padding: "1%",
                        fontSize: "14px",
                        fontWeight: "700",
                      }}
                    >
                      Portfolio Update Coming Soon 4
                    </h1>
                  </div>
                  <div className="project-description">
                    My portfolio section is currently being updated to showcase
                    my latest projects and skills. Stay tuned for the refreshed
                    portfolio, coming soon!
                  </div>
                </div>
                <div className="project">
                  <div className="project-title">
                    <h1
                      style={{
                        padding: "1%",
                        fontSize: "14px",
                        fontWeight: "700",
                      }}
                    >
                      Portfolio Update Coming Soon 5
                    </h1>
                  </div>
                  <div className="project-description">
                    My portfolio section is currently being updated to showcase
                    my latest projects and skills. Stay tuned for the refreshed
                    portfolio, coming soon!
                  </div>
                </div>
                <div className="project">
                  <div className="project-title">
                    <h1
                      style={{
                        padding: "1%",
                        fontSize: "14px",
                        fontWeight: "700",
                      }}
                    >
                      Portfolio Update Coming Soon 6
                    </h1>
                  </div>
                  <div className="project-description">
                    My portfolio section is currently being updated to showcase
                    my latest projects and skills. Stay tuned for the refreshed
                    portfolio, coming soon!
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer
        style={{
          background:
            "linear-gradient(rgba(46, 83, 52, 0.85), rgba(26, 36, 47, 0.85))",
          padding: "20px",
          textAlign: "center",
          width: "100%",
          position: "fixed",
          bottom: "0",
          left: "0",
          height: "60px", // Define your footer's height here for consistency
        }}
      >
        <p style={{ color: "#fff" }}>© 2024 devFarzad. All rights reserved.</p>
      </footer>
    </>
  );
}
