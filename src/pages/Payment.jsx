import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "animate.css";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const vehicle = location.state?.vehicle;
  const type = location.state?.type;
  const { language, t } = useLanguage();

  const [days, setDays] = useState(1);
  const pricePerDay = 100;
  const total = days * pricePerDay;

  const handleImageError = (e) => {
    e.target.style.display = 'none';
    const icon = e.target.nextSibling;
    icon.style.display = 'block';
  };

  const handlePay = () => {
    setTimeout(() => {
      navigate("/success", { state: { vehicle, locker: 7 } });
    }, 1500);
  };

  if (!vehicle) return <p>No vehicle selected.</p>;

  return (
    <div 
      className="min-vh-100 d-flex align-items-center justify-content-center py-5" 
      style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)" }}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div
        className="glass-card p-5 animate__animated animate__fadeInUp"
        style={{
          width: "95%",
          maxWidth: "500px",
          background: "white",
          borderRadius: "28px",
          boxShadow: "var(--shadow-luxury)",
        }}
      >
        <div className="text-center mb-4">
          <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "80px", height: "80px" }}>
            <span className="fs-2">💰</span>
          </div>
          <h3 className="fw-bold text-dark mb-2">
            {language === 'ar' ? 'أكمل تأجيرك' : 'Complete Your Rental'}
          </h3>
          <p className="text-muted">
            {language === 'ar' ? `تأجير ${vehicle.name} (${type === 'scooter' ? 'سكوتر' : 'دراجة'})` : `Renting ${vehicle.name} (${type})`}
          </p>
        </div>

        {/* Vehicle Image */}
        <div className="text-center mb-4 position-relative">
          <div 
            className="mx-auto position-relative"
            style={{ 
              width: "200px", 
              height: "120px", 
              background: type === "scooter" ? "var(--primary-gradient)" : "var(--gold-gradient)",
              borderRadius: "15px",
              overflow: "hidden"
            }}
          >
            <img 
              src={vehicle.image}
              alt={vehicle.name}
              className="w-100 h-100 object-fit-cover"
              onError={handleImageError}
            />
            {/* Fallback Icon */}
            <div 
              className="position-absolute top-50 start-50 translate-middle fs-1"
              style={{ display: 'none' }}
            >
              {type === "scooter" ? "🛴" : "🚲"}
            </div>
          </div>
        </div>

        {/* باقي الكود يبقى كما هو */}
        {/* Rental Details */}
        <div className="bg-light rounded-3 p-4 mb-4">
          <div className="row text-center">
            <div className="col-6 border-end">
              <small className="text-muted d-block">
                {language === 'ar' ? 'المركبة' : 'Vehicle'}
              </small>
              <strong className="text-dark">{vehicle.name}</strong>
            </div>
            <div className="col-6">
              <small className="text-muted d-block">
                {language === 'ar' ? 'النوع' : 'Type'}
              </small>
              <strong className="text-dark">
                {type === "scooter" ? (language === 'ar' ? 'سكوتر' : 'Scooter') : (language === 'ar' ? 'دراجة' : 'Bike')}
              </strong>
            </div>
          </div>
        </div>

        {/* Days Selection */}
        <div className="mb-4">
          <label className="form-label fw-semibold text-dark mb-3">
            {language === 'ar' ? 'عدد أيام التأجير' : 'Number of Rental Days'}
          </label>
          <div className="d-flex align-items-center justify-content-center gap-3">
            <button 
              className="btn btn-outline-secondary rounded-circle"
              onClick={() => setDays(Math.max(1, days - 1))}
              disabled={days <= 1}
              style={{ width: "45px", height: "45px" }}
            >
              -
            </button>
            <input
              type="number"
              min="1"
              max="60"
              value={days}
              onChange={(e) => setDays(Math.max(1, Math.min(7, parseInt(e.target.value) || 1)))}
              className="form-control text-center fw-bold fs-5 border-2"
              style={{ width: "100px", borderRadius: "15px", borderColor: "#00c853" }}
            />
            <button 
              className="btn btn-outline-secondary rounded-circle"
              onClick={() => setDays(Math.min(60, days + 1))}
              disabled={days >= 60}
              style={{ width: "45px", height: "45px" }}
            >
              +
            </button>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="bg-light rounded-3 p-4 mb-4">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="text-muted">
              {days} {language === 'ar' ? 'يوم' : 'day'} × {pricePerDay} {language === 'ar' ? 'ريال' : 'SAR'}
            </span>
            <span className="text-dark fw-semibold">{days * pricePerDay} {language === 'ar' ? 'ريال' : 'SAR'}</span>
          </div>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold text-dark">{t.total}</span>
            <span className="fw-bold fs-4 text-success">{total} {language === 'ar' ? 'ريال' : 'SAR'}</span>
          </div>
        </div>

        <button
          className="btn-luxury w-100 py-3 fs-5 pulse-glow"
          onClick={handlePay}
        >
          💳 {t.pay}
        </button>

        <p className="text-center text-muted small mt-3">
          {language === 'ar' ? 'دفع آمن • فتح فوري • دعم 24/7' : 'Secure payment • Instant unlock • 24/7 support'}
        </p>
      </div>
    </div>
  );
};

export default Payment;