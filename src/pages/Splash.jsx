import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "animate.css";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center text-center min-vh-100"
      style={{
        background: "var(--primary-gradient)",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Background Elements */}
      <div className="position-absolute w-100 h-100" style={{
        background: `radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.2) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
      }} />
      
      <div className="position-relative z-2">
        {/* Animated Logo */}
        <div 
          className="animate__animated animate__fadeInDown animate__delay-0.5s mb-4 float-animation"
          style={{ animationDuration: '3s' }}
        >
          <div 
            className="bg-white bg-opacity-20 rounded-circle d-inline-flex align-items-center justify-content-center pulse-glow"
            style={{ width: "120px", height: "120px", backdropFilter: 'blur(10px)' }}
          >
            <span className="text-white fw-bold display-4">V</span>
          </div>
        </div>

        <h1
          className="mt-4 fw-bold display-4 animate__animated animate__fadeInUp"
          style={{ 
            letterSpacing: "3px",
            background: "var(--gold-gradient)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          VEGO
        </h1>
        
        <p className="animate__animated animate__fadeInUp animate__delay-1s mt-3 fs-5 opacity-75">
          Premium Urban Mobility
        </p>
        
        {/* Loading Dots */}
        <div className="animate__animated animate__fadeInUp animate__delay-2s mt-4">
          <div className="d-flex justify-content-center gap-2">
            {[1, 2, 3].map((dot) => (
              <div
                key={dot}
                className="bg-white rounded-circle"
                style={{
                  width: "10px",
                  height: "10px",
                  animation: `pulse 1.5s ease-in-out ${dot * 0.2}s infinite`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;