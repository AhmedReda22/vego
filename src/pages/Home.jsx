import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "animate.css";

// استيراد الصور المحلية
import bikeImage from "../imgs/bike.png";
import scooterImage from "../imgs/scooter1.png";

const Home = () => {
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.parentNode.style.background = 'linear-gradient(135deg, #00c853 0%, #00e676 100%)';
  };

  return (
    <div 
      className="min-vh-100 d-flex align-items-center justify-content-center position-relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Background Pattern */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(0, 200, 83, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 200, 83, 0.03) 0%, transparent 50%),
            linear-gradient(135deg, rgba(248, 249, 250, 0.8) 0%, rgba(233, 236, 239, 0.8) 100%)
          `,
          opacity: 0.8
        }}
      ></div>

      {/* Main Container */}
      <div 
        className="professional-container text-center position-relative mx-3"
        style={{
          width: "95%",
          maxWidth: "1400px",
          minHeight: "90vh",
          padding: "50px 30px",
          borderRadius: "24px",
          background: "rgba(255, 255, 255, 0.95)",
          border: "1px solid rgba(0, 200, 83, 0.1)",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 200, 83, 0.05)",
          overflow: "hidden"
        }}
      >
        {/* Header Section */}
        <div className="mb-6 animate__animated animate__fadeInDown">
          <div className="logo-brand mb-4">
            <div 
              className="brand-icon mx-auto mb-3 d-flex align-items-center justify-content-center"
              style={{
                width: "80px",
                height: "80px",
                background: "linear-gradient(135deg, #00c853 0%, #00e676 100%)",
                borderRadius: "20px",
                boxShadow: "0 10px 30px rgba(0, 200, 83, 0.3)"
              }}
            >
              <span className="text-white fw-bold fs-3">V</span>
            </div>
          </div>
          
          <h1 className="fw-bold display-4 mb-3 text-dark">
            {t.welcome} <span className="text-success">VEGO</span>
          </h1>
          
          <p className="lead mb-3 fs-3 text-muted fw-light">
            {t.tagline}
          </p>
          
          <p className="mb-0 fs-5 text-muted opacity-75">
            {t.subtitle}
          </p>
        </div>

        {/* Vehicle Selection Cards */}
        <div className="row justify-content-center align-items-stretch g-4 mt-2">
          {/* Scooter Card */}
          <div className="col-xl-5 col-lg-6 col-md-10">
            <div 
              className="professional-card h-100 position-relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                borderRadius: "20px",
                cursor: "pointer",
                minHeight: "420px",
                border: "2px solid rgba(0, 200, 83, 0.1)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.06)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 200, 83, 0.15), 0 0 0 1px rgba(0, 200, 83, 0.1)";
                e.currentTarget.style.borderColor = "rgba(0, 200, 83, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.06)";
                e.currentTarget.style.borderColor = "rgba(0, 200, 83, 0.1)";
              }}
              onClick={() => navigate("/select/scooter")}
            >
              <div className="card-body d-flex flex-column p-4 position-relative z-2">
                {/* Header */}
                <div className="flex-grow-1 mb-3">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h3 className="fw-bold mb-0 fs-2 text-dark">
                      <span className="text-success me-2">🛴</span>
                      {language === 'ar' ? "سكوتر" : "Scooter"}
                    </h3>
                    <div 
                      className="status-badge"
                      style={{
                        background: "rgba(0, 200, 83, 0.1)",
                        color: "#00c853",
                        padding: "4px 12px",
                        borderRadius: "12px",
                        fontSize: "12px",
                        fontWeight: "600",
                        border: "1px solid rgba(0, 200, 83, 0.2)"
                      }}
                    >
                      {language === 'ar' ? "متاح" : "Available"}
                    </div>
                  </div>
                  <p className="text-muted fs-6 mb-0">
                    {language === 'ar' 
                      ? "تنقل حضري سريع وفعال مع أحدث تقنيات السكوتر الكهربائي" 
                      : "Fast and efficient urban mobility with the latest electric scooter technology"}
                  </p>
                </div>
                
                {/* Image Container - Fixed Size */}
                <div 
                  className="image-container position-relative overflow-hidden mx-auto"
                  style={{ 
                    width: "100%",
                    height: "200px",
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                    border: "1px solid rgba(0, 200, 83, 0.1)"
                  }}
                >
                  <img 
                    src={scooterImage}
                    alt="Premium Scooter"
                    className="w-100 h-100 object-fit-contain p-3"
                    style={{ 
                      transition: "transform 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)";
                    }}
                    onError={handleImageError}
                  />
                </div>
                
                {/* Action Button */}
                <button 
                  className="btn-professional w-100 mt-4 py-3 fs-6 fw-semibold"
                  style={{
                    background: "linear-gradient(135deg, #00c853 0%, #00e676 100%)",
                    color: "white",
                    borderRadius: "12px",
                    border: "none",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 15px rgba(0, 200, 83, 0.3)"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 8px 25px rgba(0, 200, 83, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 4px 15px rgba(0, 200, 83, 0.3)";
                  }}
                >
                  {language === 'ar' ? "اختر السكوتر" : "Choose Scooter"} →
                </button>
              </div>
            </div>
          </div>

          {/* Bike Card */}
          <div className="col-xl-5 col-lg-6 col-md-10">
            <div 
              className="professional-card h-100 position-relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                borderRadius: "20px",
                cursor: "pointer",
                minHeight: "420px",
                border: "2px solid rgba(0, 200, 83, 0.1)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.06)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 200, 83, 0.15), 0 0 0 1px rgba(0, 200, 83, 0.1)";
                e.currentTarget.style.borderColor = "rgba(0, 200, 83, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.06)";
                e.currentTarget.style.borderColor = "rgba(0, 200, 83, 0.1)";
              }}
              onClick={() => navigate("/select/bike")}
            >
              <div className="card-body d-flex flex-column p-4 position-relative z-2">
                {/* Header */}
                <div className="flex-grow-1 mb-3">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h3 className="fw-bold mb-0 fs-2 text-dark">
                      <span className="text-success me-2">🚲</span>
                      {language === 'ar' ? "دراجة" : "Bike"}
                    </h3>
                    <div 
                      className="status-badge"
                      style={{
                        background: "rgba(0, 200, 83, 0.1)",
                        color: "#00c853",
                        padding: "4px 12px",
                        borderRadius: "12px",
                        fontSize: "12px",
                        fontWeight: "600",
                        border: "1px solid rgba(0, 200, 83, 0.2)"
                      }}
                    >
                      {language === 'ar' ? "متاح" : "Available"}
                    </div>
                  </div>
                  <p className="text-muted fs-6 mb-0">
                    {language === 'ar'
                      ? "دراجات كهربائية قابلة للطي بتصميم أنيق وتقنيات متطورة"
                      : "Foldable electric bikes with elegant design and advanced features"}
                  </p>
                </div>
                
                {/* Image Container - Fixed Size (Same as Scooter) */}
                <div 
                  className="image-container position-relative overflow-hidden mx-auto"
                  style={{ 
                    width: "100%",
                    height: "200px",
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                    border: "1px solid rgba(0, 200, 83, 0.1)"
                  }}
                >
                  <img 
                    src={bikeImage}
                    alt="Premium Bike"
                    className="w-100 h-100 object-fit-contain p-3"
                    style={{ 
                      transition: "transform 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)";
                    }}
                    onError={handleImageError}
                  />
                </div>
                
                {/* Action Button */}
                <button 
                  className="btn-professional w-100 mt-4 py-3 fs-6 fw-semibold"
                  style={{
                    background: "linear-gradient(135deg, #00c853 0%, #00e676 100%)",
                    color: "white",
                    borderRadius: "12px",
                    border: "none",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 15px rgba(0, 200, 83, 0.3)"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 8px 25px rgba(0, 200, 83, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 4px 15px rgba(0, 200, 83, 0.3)";
                  }}
                >
                  {language === 'ar' ? "اختر الدراجة" : "Choose Bike"} →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="row mt-6 pt-5 justify-content-center">
          {Object.entries(t.features).map(([key, feature], index) => (
            <div 
              key={key} 
              className="col-xl-2 col-lg-3 col-md-4 col-sm-6 text-center mb-4"
            >
              <div 
                className="feature-card rounded-3 p-4 h-100 position-relative"
                style={{
                  background: "rgba(255, 255, 255, 0.8)",
                  border: "1px solid rgba(0, 200, 83, 0.1)",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 1)";
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 200, 83, 0.1)";
                  e.currentTarget.style.borderColor = "rgba(0, 200, 83, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.8)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "rgba(0, 200, 83, 0.1)";
                }}
              >
                <div 
                  className="feature-icon mx-auto mb-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "linear-gradient(135deg, rgba(0, 200, 83, 0.1) 0%, rgba(0, 200, 83, 0.05) 100%)",
                    borderRadius: "16px",
                    fontSize: "24px"
                  }}
                >
                  {getFeatureIcon(key)}
                </div>
                <h6 className="fw-semibold mb-0 fs-6 text-dark">{feature}</h6>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="row mt-6 pt-4">
          <div className="col-12 text-center">
            <p className="text-muted fs-6 mb-0">
              {language === 'ar' 
                ? "انضم إلى آلاف العملاء الراضين عن خدماتنا" 
                : "Join thousands of satisfied customers enjoying our services"}
            </p>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .professional-container {
          backdrop-filter: blur(20px);
        }
        
        .brand-icon {
          transition: transform 0.3s ease;
        }
        
        .brand-icon:hover {
          transform: rotate(5deg) scale(1.05);
        }
        
        .feature-icon {
          transition: all 0.3s ease;
        }
        
        .feature-card:hover .feature-icon {
          background: linear-gradient(135deg, rgba(0, 200, 83, 0.15) 0%, rgba(0, 200, 83, 0.1) 100%) !important;
          transform: scale(1.1);
        }
        
        @media (max-width: 768px) {
          .professional-container {
            padding: 30px 20px !important;
            min-height: auto !important;
          }
          
          .display-4 {
            font-size: 2rem !important;
          }
          
          .fs-3 {
            font-size: 1.25rem !important;
          }
          
          .image-container {
            height: 180px !important;
          }
        }
        
        @media (max-width: 576px) {
          .image-container {
            height: 160px !important;
          }
        }
      `}</style>
    </div>
  );
};

// دالة مساعدة للرموز
const getFeatureIcon = (featureKey) => {
  const icons = {
    instant: "⚡",
    charged: "🔋",
    insurance: "🛡️",
    smart: "📱"
  };
  return icons[featureKey] || "✨";
};

export default Home;