import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "animate.css";

// استيراد الصور المحلية
import bikeImage from "../imgs/bike.png";
import scooterImage from "../imgs/scooter1.png";
import cabineImage from "../imgs/cabine.jpeg";

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
          padding: "60px 40px",
          borderRadius: "24px",
          background: "rgba(255, 255, 255, 0.97)",
          border: "1px solid rgba(0, 200, 83, 0.15)",
          boxShadow: "0 25px 70px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 200, 83, 0.08)",
          overflow: "hidden"
        }}
      >
        {/* Header Section */}
        <div className="mb-8 animate__animated animate__fadeInDown">
          <h1 className="fw-bold display-4 mb-4 text-dark" style={{ 
            fontFamily: 'system-ui, -apple-system, sans-serif',
            lineHeight: '1.2'
          }}>
            {language === 'ar' ? "مستقبل التنقل الذكي بين يديك" : "Smart Mobility Future in Your Hands"}
          </h1>
          
          <p className="mb-4 fs-2 text-success fw-light" style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            lineHeight: '1.4'
          }}>
            {language === 'ar' 
              ? "حلول متكاملة للتنقل الحضري المستدام" 
              : "Integrated Solutions for Sustainable Urban Mobility"}
          </p>
          
          <p className="mb-0 fs-5 text-muted" style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            {language === 'ar' 
              ? "تجربة تنقل استثنائية تجمع بين الابتكار التقني والاستدامة البيئية"
              : "An exceptional mobility experience combining technical innovation and environmental sustainability"}
          </p>

          {/* White Space Below Description */}
          <div style={{ height: '40px' }}></div>
        </div>

        {/* Cabin Section - Responsive Layout */}
        <div className={`row justify-content-center align-items-center mb-8 animate__animated animate__fadeInUp ${language === 'ar' ? '' : 'flex-row-reverse'}`}>
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div 
              className="cabin-image-container rounded-4 overflow-hidden position-relative"
              style={{
                height: "320px",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.12)",
                border: "2px solid rgba(0, 200, 83, 0.2)"
              }}
            >
              <img 
                src={cabineImage}
                alt={language === 'ar' ? "خزانات موبيليتي لايف الذكية" : "Mobility Life Smart Cabinets"}
                className="w-100 h-100 object-fit-cover"
                onError={handleImageError}
              />
              <div 
                className="position-absolute bottom-0 start-0 end-0 text-white p-4"
                style={{
                  background: "linear-gradient(transparent 0%, rgba(0, 0, 0, 0.8) 100%)"
                }}
              >
                <small className="fw-semibold fs-6">
                  {language === 'ar' ? "منظومة الخزانات الذكية المتكاملة" : "Integrated Smart Cabinet System"}
                </small>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className={`text-${language === 'ar' ? 'end' : 'start'}`}>
              <h3 className="fw-bold text-dark mb-4 fs-3">
                {language === 'ar' ? "نظام الاستلام الذكي" : "Smart Pickup System"}
              </h3>
              <p className="text-muted fs-5 mb-4 lh-lg">
                {language === 'ar' 
                  ? "طورنا نظام الخزانات الذكية لتقديم تجربة استلام سلسة وآمنة. احصل على مركبتك في دقائق مع أعلى معايير الأمان والتكنولوجيا."
                  : "We've developed smart cabinet systems to provide a seamless and secure pickup experience. Get your vehicle in minutes with the highest standards of security and technology."}
              </p>
              
              <div className="row mt-4">
                <div className="col-4 text-center">
                  <div className="bg-success bg-opacity-10 rounded-3 p-3">
                    <div className="fs-3 mb-2">⚡</div>
                    <small className="text-dark fw-semibold d-block">
                      {language === 'ar' ? "فوري" : "Instant"}
                    </small>
                  </div>
                </div>
                <div className="col-4 text-center">
                  <div className="bg-success bg-opacity-10 rounded-3 p-3">
                    <div className="fs-3 mb-2">🛡️</div>
                    <small className="text-dark fw-semibold d-block">
                      {language === 'ar' ? "آمن" : "Secure"}
                    </small>
                  </div>
                </div>
                <div className="col-4 text-center">
                  <div className="bg-success bg-opacity-10 rounded-3 p-3">
                    <div className="fs-3 mb-2">📱</div>
                    <small className="text-dark fw-semibold d-block">
                      {language === 'ar' ? "ذكي" : "Smart"}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vehicle Selection Cards */}
        <div className="row justify-content-center align-items-stretch g-4 mt-4">
          {/* Scooter Card */}
          <div className="col-xl-5 col-lg-6 col-md-10">
            <div 
              className="professional-card h-100 position-relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                borderRadius: "20px",
                cursor: "pointer",
                minHeight: "380px",
                border: "2px solid rgba(0, 200, 83, 0.1)",
                boxShadow: "0 12px 40px rgba(0, 0, 0, 0.08)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 25px 50px rgba(0, 200, 83, 0.15), 0 0 0 1px rgba(0, 200, 83, 0.1)";
                e.currentTarget.style.borderColor = "rgba(0, 200, 83, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.08)";
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
                      {language === 'ar' ? "سكوتر كهربائي" : "Electric Scooter"}
                    </h3>
                    <div 
                      className="status-badge"
                      style={{
                        background: "rgba(0, 200, 83, 0.1)",
                        color: "#00c853",
                        padding: "6px 14px",
                        borderRadius: "12px",
                        fontSize: "12px",
                        fontWeight: "700",
                        border: "1px solid rgba(0, 200, 83, 0.2)"
                      }}
                    >
                      {language === 'ar' ? "متوفر" : "Available"}
                    </div>
                  </div>
                  <p className="text-muted fs-6 mb-0 lh-base">
                    {language === 'ar' 
                      ? "تصميم عصري مع تقنيات متقدمة للتنقل السريع في المناطق الحضرية" 
                      : "Modern design with advanced technologies for fast urban mobility"}
                  </p>
                </div>
                
                {/* Image Container */}
                <div 
                  className="image-container position-relative overflow-hidden mx-auto"
                  style={{ 
                    width: "100%",
                    height: "180px",
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                    border: "1px solid rgba(0, 200, 83, 0.1)"
                  }}
                >
                  <img 
                    src={scooterImage}
                    alt={language === 'ar' ? "سكوتر موبيليتي لايف" : "Mobility Life Scooter"}
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
                    boxShadow: "0 6px 20px rgba(0, 200, 83, 0.3)"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 10px 30px rgba(0, 200, 83, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 6px 20px rgba(0, 200, 83, 0.3)";
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
                minHeight: "380px",
                border: "2px solid rgba(0, 200, 83, 0.1)",
                boxShadow: "0 12px 40px rgba(0, 0, 0, 0.08)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 25px 50px rgba(0, 200, 83, 0.15), 0 0 0 1px rgba(0, 200, 83, 0.1)";
                e.currentTarget.style.borderColor = "rgba(0, 200, 83, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.08)";
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
                      {language === 'ar' ? "دراجة كهربائية" : "Electric Bike"}
                    </h3>
                    <div 
                      className="status-badge"
                      style={{
                        background: "rgba(0, 200, 83, 0.1)",
                        color: "#00c853",
                        padding: "6px 14px",
                        borderRadius: "12px",
                        fontSize: "12px",
                        fontWeight: "700",
                        border: "1px solid rgba(0, 200, 83, 0.2)"
                      }}
                    >
                      {language === 'ar' ? "متوفر" : "Available"}
                    </div>
                  </div>
                  <p className="text-muted fs-6 mb-0 lh-base">
                    {language === 'ar'
                      ? "دراجة قابلة للطي بتصميم مبتكر وتقنيات ذكية للتنقل اليومي"
                      : "Foldable bike with innovative design and smart technologies for daily commuting"}
                  </p>
                </div>
                
                {/* Image Container */}
                <div 
                  className="image-container position-relative overflow-hidden mx-auto"
                  style={{ 
                    width: "100%",
                    height: "180px",
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                    border: "1px solid rgba(0, 200, 83, 0.1)"
                  }}
                >
                  <img 
                    src={bikeImage}
                    alt={language === 'ar' ? "دراجة موبيليتي لايف" : "Mobility Life Bike"}
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
                    boxShadow: "0 6px 20px rgba(0, 200, 83, 0.3)"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 10px 30px rgba(0, 200, 83, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 6px 20px rgba(0, 200, 83, 0.3)";
                  }}
                >
                  {language === 'ar' ? "اختر الدراجة" : "Choose Bike"} →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="row mt-8 pt-6 justify-content-center">
          <div className="col-lg-10 text-center">
            <h3 className="fw-bold text-dark mb-5 fs-2">
              {language === 'ar' ? "رؤيتنا نحو مستقبل أفضل" : "Our Vision for a Better Future"}
            </h3>
            
            <div className="row g-4">
              <div className="col-md-6">
                <div 
                  className="vision-card rounded-4 p-5 h-100"
                  style={{
                    background: "rgba(0, 200, 83, 0.05)",
                    border: "1px solid rgba(0, 200, 83, 0.15)",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.background = "rgba(0, 200, 83, 0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.background = "rgba(0, 200, 83, 0.05)";
                  }}
                >
                  <div className="fs-1 mb-3">🎯</div>
                  <h5 className="fw-semibold text-dark mb-3 fs-4">
                    {language === 'ar' ? "الرؤية الاستراتيجية" : "Strategic Vision"}
                  </h5>
                  <p className="text-muted mb-0 lh-lg">
                    {language === 'ar' 
                      ? "نسعى لقيادة تحول قطاع التنقل نحو الاستدامة والذكاء التقني، من خلال حلول مبتكرة تلبي احتياجات المستقبل"
                      : "We strive to lead the transformation of the mobility sector towards sustainability and technical intelligence through innovative solutions that meet future needs"}
                  </p>
                </div>
              </div>
              
              <div className="col-md-6">
                <div 
                  className="mission-card rounded-4 p-5 h-100"
                  style={{
                    background: "rgba(0, 200, 83, 0.05)",
                    border: "1px solid rgba(0, 200, 83, 0.15)",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.background = "rgba(0, 200, 83, 0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.background = "rgba(0, 200, 83, 0.05)";
                  }}
                >
                  <div className="fs-1 mb-3">🚀</div>
                  <h5 className="fw-semibold text-dark mb-3 fs-4">
                    {language === 'ar' ? "الالتزام بالتميز" : "Commitment to Excellence"}
                  </h5>
                  <p className="text-muted mb-0 lh-lg">
                    {language === 'ar' 
                      ? "نلتزم بتقديم تجارب تنقل استثنائية تجمع بين أحدث التقنيات وأعلى معايير الجودة والاستدامة البيئية"
                      : "We are committed to delivering exceptional mobility experiences that combine the latest technologies with the highest standards of quality and environmental sustainability"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="row mt-8 pt-6 justify-content-center">
          {Object.entries(t.features).map(([key, feature], index) => (
            <div 
              key={key} 
              className="col-xl-2 col-lg-3 col-md-4 col-sm-6 text-center mb-4"
            >
              <div 
                className="feature-card rounded-3 p-4 h-100 position-relative"
                style={{
                  background: "rgba(255, 255, 255, 0.9)",
                  border: "1px solid rgba(0, 200, 83, 0.1)",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 1)";
                  e.currentTarget.style.boxShadow = "0 12px 30px rgba(0, 200, 83, 0.12)";
                  e.currentTarget.style.borderColor = "rgba(0, 200, 83, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.9)";
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
                <h6 className="fw-semibold mb-0 fs-6 text-dark lh-base">{feature}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .professional-container {
          backdrop-filter: blur(20px);
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
            padding: 40px 25px !important;
            min-height: auto !important;
          }
          
          .display-4 {
            font-size: 2.2rem !important;
          }
          
          .fs-2 {
            font-size: 1.4rem !important;
          }
          
          .image-container {
            height: 160px !important;
          }
          
          .cabin-image-container {
            height: 250px !important;
          }
        }
        
        @media (max-width: 576px) {
          .image-container {
            height: 140px !important;
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