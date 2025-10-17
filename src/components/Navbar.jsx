import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import logo from "../imgs/logo.png";

const Navbar = () => {
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav 
      className="navbar navbar-expand-lg navbar-light sticky-top"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)',
        borderBottom: '2px solid rgba(0, 200, 83, 0.3)',
        boxShadow: '0 8px 32px rgba(0, 200, 83, 0.15)',
        backdropFilter: 'blur(10px)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        padding: '0.5rem 0',
        minHeight: '70px'
      }}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container position-relative">
        {/* Brand Logo - Centered and Enhanced */}
        <Link 
          to="/" 
          className="navbar-brand mx-auto d-flex align-items-center text-decoration-none position-absolute"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="logo-container position-relative">
            <div 
              className="logo-glow"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '65px',
                height: '65px',
                background: 'radial-gradient(circle, rgba(0, 200, 83, 0.3) 0%, rgba(0, 200, 83, 0) 70%)',
                borderRadius: '50%',
                filter: 'blur(6px)',
                opacity: isHovered ? 1 : 0.6,
                transition: 'all 0.4s ease'
              }}
            />
            <img 
              src={logo}
              alt="VEGO Logo"
              className="logo-image"
              style={{
                width: '55px',
                height: '55px',
                objectFit: 'contain',
                filter: isHovered 
                  ? 'drop-shadow(0 6px 20px rgba(0, 200, 83, 0.6)) brightness(1.1)' 
                  : 'drop-shadow(0 3px 12px rgba(0, 200, 83, 0.4))',
                transform: isHovered ? 'scale(1.08) rotate(3deg)' : 'scale(1)',
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                position: 'relative',
                zIndex: 2
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>
        </Link>

        {/* Language Switch Button - Positioned on the right */}
        <div 
          className="language-button-container"
          style={{
            position: 'absolute',
            right: language === 'ar' ? 'auto' : '15px',
            left: language === 'ar' ? '15px' : 'auto',
            top: '50%',
            transform: 'translateY(-50%)'
          }}
        >
          <button 
            className="language-switch position-relative"
            onClick={toggleLanguage}
            style={{
              background: 'linear-gradient(135deg, #00c853 0%, #00e676 100%)',
              border: 'none',
              color: 'white',
              borderRadius: '50px',
              padding: '8px 20px',
              fontWeight: '700',
              transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
              cursor: 'pointer',
              fontSize: '14px',
              overflow: 'hidden',
              boxShadow: '0 4px 15px rgba(0, 200, 83, 0.3)',
              position: 'relative',
              zIndex: 1,
              minWidth: '80px',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px) scale(1.05)';
              e.target.style.boxShadow = '0 8px 25px rgba(0, 200, 83, 0.5)';
              e.target.style.background = 'linear-gradient(135deg, #00e676 0%, #00c853 100%)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 4px 15px rgba(0, 200, 83, 0.3)';
              e.target.style.background = 'linear-gradient(135deg, #00c853 0%, #00e676 100%)';
            }}
          >
            <span 
              style={{ 
                position: 'relative',
                zIndex: 2,
                textShadow: '0 1px 3px rgba(0,0,0,0.2)',
                fontSize: '13px'
              }}
            >
              {language === 'ar' ? 'EN' : 'العربية'}
            </span>
          </button>
        </div>

        {/* Back to Home - Custom Arrow Icon */}
        {location.pathname !== "/" && (
          <div 
            className="back-button-container"
            style={{
              position: 'absolute',
              left: language === 'ar' ? 'auto' : '15px',
              right: language === 'ar' ? '15px' : 'auto',
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          >
            <Link 
              to="/" 
              className="back-icon d-flex align-items-center justify-content-center"
              style={{
                color: '#00c853', // Changed to green
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                textDecoration: 'none',
                border: '2px solid #00c853', // Green border
                background: '#ffffff',
                fontWeight: 'bold',
                fontSize: '20px',
                boxShadow: '0 2px 10px rgba(0, 200, 83, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#00c853';
                e.target.style.color = '#ffffff';
                e.target.style.transform = 'translateY(-2px) scale(1.1)';
                e.target.style.boxShadow = '0 6px 20px rgba(0, 200, 83, 0.4)';
                e.target.style.borderColor = '#00c853';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#ffffff';
                e.target.style.color = '#00c853';
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 2px 10px rgba(0, 200, 83, 0.2)';
                e.target.style.borderColor = '#00c853';
              }}
            >
              {/* Custom Arrow SVG */}
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                style={{
                  transform: language === 'ar' ? 'scaleX(-1)' : 'scaleX(1)',
                  transition: 'transform 0.3s ease'
                }}
              >
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </Link>
          </div>
        )}

        {/* Animated Border Bottom */}
        <div 
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, #00c853 50%, transparent 100%)',
            opacity: 0.7
          }}
        />
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .navbar {
            min-height: 60px !important;
            padding: 0.4rem 0 !important;
          }
          
          .logo-image {
            width: 45px !important;
            height: 45px !important;
          }
          
          .logo-glow {
            width: 55px !important;
            height: 55px !important;
          }
          
          .language-switch {
            padding: 6px 16px !important;
            min-width: 70px !important;
            font-size: 12px !important;
          }
          
          .back-icon {
            width: 40px !important;
            height: 40px !important;
          }
          
          .back-icon svg {
            width: 18px !important;
            height: 18px !important;
          }
        }
        
        @media (max-width: 480px) {
          .navbar {
            min-height: 55px !important;
          }
          
          .logo-image {
            width: 40px !important;
            height: 40px !important;
          }
          
          .logo-glow {
            width: 50px !important;
            height: 50px !important;
          }
          
          .back-icon {
            width: 35px !important;
            height: 35px !important;
          }
          
          .back-icon svg {
            width: 16px !important;
            height: 16px !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;