import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "animate.css";

const Success = () => {
  const location = useLocation();
  const locker = location.state?.locker || 0;
  const vehicle = location.state?.vehicle;
  const { language, t } = useLanguage();

  return (
    <div 
      className="min-vh-100 d-flex align-items-center justify-content-center py-5" 
      style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)" }}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div
        className="glass-card text-center p-5 animate__animated animate__zoomIn"
        style={{
          maxWidth: "500px",
          background: "white",
          borderRadius: "28px",
          boxShadow: "var(--shadow-luxury)",
        }}
      >
        {/* Success Icon */}
        <div className="mb-4 float-animation">
          <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: "120px", height: "120px" }}>
            <span className="text-success display-1">✅</span>
          </div>
        </div>

        <h2 className="text-success mb-3 fw-bold display-6">{t.success}</h2>
        
        <p className="fs-5 text-dark mb-4">
          {language === 'ar' ? 'رحلتك الفاخرة جاهزة! تقدم إلى' : 'Your luxury ride is ready! Proceed to'}
        </p>

        {/* Locker Display */}
        <div className="bg-success bg-opacity-10 rounded-3 p-4 mb-4 mx-auto" style={{ maxWidth: "200px" }}>
          <div className="text-muted small">
            {language === 'ar' ? 'رقم الخزانة' : 'Locker Number'}
          </div>
          <div className="display-3 fw-bold text-success">{locker}</div>
        </div>

        <p className="text-muted mb-4">
          {language === 'ar' ? `لجمع ${vehicle?.name}` : `to collect your ${vehicle?.name}`}
        </p>

        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Link
            to="/"
            className="btn-luxury px-4 py-3 text-decoration-none"
          >
            🏠 {t.backHome}
          </Link>
          <button className="btn-gold px-4 py-3">
            📱 {language === 'ar' ? 'عرض في التطبيق' : 'View in App'}
          </button>
        </div>

        <div className="mt-4 p-3 bg-light rounded-3">
          <small className="text-muted">
            📞 {language === 'ar' ? 'تحتاج مساعدة؟ اتصل بالدعم:' : 'Need help? Contact support:'} <strong>+966 123 456 789</strong>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Success;