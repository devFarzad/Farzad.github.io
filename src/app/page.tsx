import { FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  const fadeInAnimation = {
    animationName: 'fadeIn',
    animationDuration: '2s',
    animationTimingFunction: 'ease-in-out',
    animationFillMode: 'forwards'
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
          backgroundImage: 'url("/assets/image/bg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1
          style={{
            fontSize: "30px",
            fontWeight: 700,
            color: '#fff',
            borderRadius: 5,
            padding: "20px 40px",
            backgroundColor: "rgba(0, 123, 255, 0.5)",
            ...fadeInAnimation
          }}
        >
          COMING SOON...
        </h1>
        <div  style={{display:'flex',paddingTop:10}}>
          <a href="mailto:farzad.un1990@hotmail.com" style={{ margin: "0 10px" }}>
            <FaEnvelope size={30} color="#fff" />
          </a>
          <a href="https://github.com/devFarzad" style={{ margin: "0 10px" }}>
            <FaGithub size={30} color="#fff" />
          </a>
        </div>
      </div>
    </>
  );
}
