import { Metadata } from 'next';
import { CSSProperties } from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'devFarzad',
  description: "Hi! I'm Farzad. A Full Stack Developer.",
  creator: 'Farzad'
}

export default function Home() {
  const fadeInAnimation:CSSProperties = {
    animationName: 'fadeIn',
    animationDuration: '2s',
    animationTimingFunction: 'ease-in-out',
    animationFillMode: 'forwards'
  };

  // Adding a paddingBottom to the main container that equals the footer's height
  // ensures content is not hidden behind the fixed footer.
  const mainContainerStyle:CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    textAlign: "center",
    backgroundImage: 'url("/assets/image/bg.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "20px",
    paddingBottom: "70px", // Adjust this value based on your footer's height
  };

  const iconContainerStyle:CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    bottom: "70px", // Position above the footer, adjust based on your footer's height
    left: 0,
    right: 0,
    padding: "10px",
  };

  return (
    <>
      <div style={mainContainerStyle}>
        <h1
          style={{
            fontSize: "30px",
            fontWeight: 700,
            color: '#fff',
            borderRadius: 5,
            padding: "20px 40px",
            background: "linear-gradient(rgba(46, 83, 52, 0.85), rgba(26, 36, 47, 0.85))",
            ...fadeInAnimation
          }}
        >
          COMING SOON...
        </h1>
        {/* Icon Container */}
        <div style={iconContainerStyle}>
          <a href="mailto:farzad.un1990@hotmail.com" style={{ margin: "0 10px" }}>
            <FaEnvelope size={30} color="#fff" />
          </a>
          <a href="https://github.com/devFarzad" style={{ margin: "0 10px" }}>
            <FaGithub size={30} color="#fff" />
          </a>
        </div>
      </div>
      {/* Footer */}
      <footer style={{
        background: "linear-gradient(rgba(46, 83, 52, 0.85), rgba(26, 36, 47, 0.85))",
        padding: "20px",
        textAlign: "center",
        width: "100%",
        position: "fixed",
        bottom: "0",
        left: "0",
        height: "60px", // Define your footer's height here for consistency
      }}>
        <p style={{ color: "#fff" }}>© 2024 devFarzad. All rights reserved.</p>
      </footer>
    </>
  );
}
