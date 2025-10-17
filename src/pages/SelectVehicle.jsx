import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "animate.css";

// استيراد الصور المحلية
import bike1 from "../imgs/bike.png";
import bike2 from "../imgs/bike3.png";
import bike3 from "../imgs/bike3.png";
import scooter1 from "../imgs/scooter1.png";
import scooter2 from "../imgs/scooter1.png";
import scooter3 from "../imgs/scooter1.png";

const scooterVehicles = [
  { 
    id: 1, 
    charge: 95, 
    name: "VEGO-S1", 
    range: "45 km", 
    topSpeed: "25 km/h",
    time: "4.5 hours",
    weight: "15 kg",
    image: scooter1,
    status: "excellent"
  },
  { 
    id: 2, 
    charge: 80, 
    name: "VEGO-S2", 
    range: "38 km", 
    topSpeed: "25 km/h",
    time: "3.8 hours",
    weight: "15 kg",
    image: scooter2,
    status: "good"
  },
  { 
    id: 3, 
    charge: 60, 
    name: "VEGO-S3", 
    range: "28 km", 
    topSpeed: "25 km/h",
    time: "2.8 hours",
    weight: "15 kg",
    image: scooter3,
    status: "fair"
  },
];

const bikeVehicles = [
  { 
    id: 1, 
    charge: 95, 
    name: "VEGO-B1", 
    range: "45 km", 
    topSpeed: "25 km/h",
    time: "4.5 hours",
    weight: "12 kg",
    image: bike1,
    status: "excellent"
  },
  { 
    id: 2, 
    charge: 80, 
    name: "VEGO-B2", 
    range: "38 km", 
    topSpeed: "25 km/h",
    time: "3.8 hours",
    weight: "12 kg",
    image: bike2,
    status: "good"
  },
  { 
    id: 3, 
    charge: 60, 
    name: "VEGO-B3", 
    range: "28 km", 
    topSpeed: "25 km/h",
    time: "2.8 hours",
    weight: "12 kg",
    image: bike3,
    status: "fair"
  },
];

const SelectVehicle = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  const vehicles = type === "scooter" ? scooterVehicles : bikeVehicles;

  const handleImageError = (e) => {
    e.target.style.display = 'none';
    const icon = e.target.nextSibling;
    icon.style.display = 'block';
  };

  const getVehicleIcon = () => {
    return type === "scooter" ? "🛴" : "🚲";
  };

  const getVehicleTitle = () => {
    return type === "scooter" 
      ? (language === 'ar' ? "سكوتر كهربائي" : "Electric Scooter")
      : (language === 'ar' ? "دراجة كهربائية" : "Electric Bike");
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'excellent': return '#00c853';
      case 'good': return '#ff9800';
      case 'fair': return '#f44336';
      default: return '#00c853';
    }
  };

  const getStatusText = (status) => {
    if (language === 'ar') {
      switch (status) {
        case 'excellent': return 'ممتاز';
        case 'good': return 'جيد';
        case 'fair': return 'متوسط';
        default: return 'ممتاز';
      }
    } else {
      switch (status) {
        case 'excellent': return 'Excellent';
        case 'good': return 'Good';
        case 'fair': return 'Fair';
        default: return 'Excellent';
      }
    }
  };

  return (
    <div 
      className="min-vh-100 py-5" 
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
            radial-gradient(circle at 80% 20%, rgba(0, 200, 83, 0.03) 0%, transparent 50%)
          `,
          opacity: 0.6
        }}
      ></div>

      <div className="container position-relative z-2">
        {/* Header Section */}
        <div className="text-center mb-6 animate__animated animate__fadeInDown">
          <div className="header-icon mb-4">
            <div 
              className="icon-container mx-auto d-flex align-items-center justify-content-center"
              style={{
                width: "100px",
                height: "100px",
                background: "linear-gradient(135deg, #00c853 0%, #00e676 100%)",
                borderRadius: "25px",
                boxShadow: "0 15px 35px rgba(0, 200, 83, 0.3)"
              }}
            >
              <span className="text-white fw-bold display-6">{getVehicleIcon()}</span>
            </div>
          </div>
          
          <h1 className="fw-bold display-5 mb-3 text-dark">
            {getVehicleTitle()}
          </h1>
          <p className="text-muted fs-5 mb-0">
            {language === 'ar' 
              ? "اختر المركبة المناسبة لرحلتك" 
              : "Choose the perfect vehicle for your journey"}
          </p>
        </div>

        {/* Vehicles Grid */}
        <div className="row justify-content-center g-5">
          {vehicles.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className="col-xl-4 col-lg-6 col-md-8"
            >
              <div
                className="luxury-vehicle-card position-relative overflow-hidden animate__animated animate__fadeInUp"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                  borderRadius: "25px",
                  cursor: "pointer",
                  border: "2px solid rgba(0, 200, 83, 0.1)",
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.08)",
                  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  animationDelay: `${index * 0.2}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-12px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 25px 50px rgba(0, 200, 83, 0.15), 0 0 0 1px rgba(0, 200, 83, 0.2)";
                  e.currentTarget.style.borderColor = "rgba(0, 200, 83, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.08)";
                  e.currentTarget.style.borderColor = "rgba(0, 200, 83, 0.1)";
                }}
                onClick={() => navigate("/payment", { state: { vehicle, type } })}
              >
                {/* Status Badge */}
                <div 
                  className="position-absolute top-3 end-3 z-3"
                  style={{
                    background: getStatusColor(vehicle.status),
                    color: "white",
                    padding: "6px 16px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "700",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  {getStatusText(vehicle.status)}
                </div>

                {/* Vehicle Image */}
                <div 
                  className="image-container position-relative overflow-hidden"
                  style={{ 
                    height: "220px",
                    background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                    borderBottom: "1px solid rgba(0, 200, 83, 0.1)"
                  }}
                >
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-100 h-100 object-fit-contain p-4"
                    style={{ 
                      transition: "transform 0.4s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)";
                    }}
                    onError={handleImageError}
                  />
                </div>

                {/* Card Content */}
                <div className="card-content p-4">
                  {/* Vehicle Header */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="fw-bold text-dark mb-0">{vehicle.name}</h4>
                    <span className="fs-3 text-success">{getVehicleIcon()}</span>
                  </div>

                  {/* Battery Indicator */}
                  <div className="battery-section mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="text-muted fw-semibold">
                        {language === 'ar' ? "شحن البطارية" : "Battery Charge"}
                      </span>
                      <span 
                        className="fw-bold" 
                        style={{ 
                          color: vehicle.charge > 70 ? "#00c853" : vehicle.charge > 40 ? "#ff9800" : "#f44336" 
                        }}
                      >
                        {vehicle.charge}% 🔋
                      </span>
                    </div>
                    <div 
                      className="battery-bar"
                      style={{ 
                        height: "12px", 
                        background: "rgba(0, 200, 83, 0.1)",
                        borderRadius: "10px",
                        overflow: "hidden"
                      }}
                    >
                      <div
                        style={{ 
                          height: "100%",
                          background: vehicle.charge > 70 ? 
                            "linear-gradient(135deg, #00c853 0%, #00e676 100%)" : 
                            vehicle.charge > 40 ? 
                            "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)" :
                            "linear-gradient(135deg, #f44336 0%, #ef5350 100%)",
                          borderRadius: "10px",
                          width: `${vehicle.charge}%`,
                          transition: "all 0.3s ease"
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Vehicle Specs */}
                  <div className="specs-grid mb-4">
                    <div className="row g-2 text-center">
                      <div className="col-6">
                        <div 
                          className="spec-item rounded-3 p-3"
                          style={{
                            background: "rgba(0, 200, 83, 0.05)",
                            border: "1px solid rgba(0, 200, 83, 0.1)"
                          }}
                        >
                          <div className="text-muted small mb-1">
                            {language === 'ar' ? "المسافة" : "Range"}
                          </div>
                          <strong className="text-dark">{vehicle.range}</strong>
                        </div>
                      </div>
                      <div className="col-6">
                        <div 
                          className="spec-item rounded-3 p-3"
                          style={{
                            background: "rgba(0, 200, 83, 0.05)",
                            border: "1px solid rgba(0, 200, 83, 0.1)"
                          }}
                        >
                          <div className="text-muted small mb-1">
                            {language === 'ar' ? "السرعة" : "Top Speed"}
                          </div>
                          <strong className="text-dark">{vehicle.topSpeed}</strong>
                        </div>
                      </div>
                      <div className="col-6">
                        <div 
                          className="spec-item rounded-3 p-3"
                          style={{
                            background: "rgba(0, 200, 83, 0.05)",
                            border: "1px solid rgba(0, 200, 83, 0.1)"
                          }}
                        >
                          <div className="text-muted small mb-1">
                            {language === 'ar' ? "الوقت" : "Ride Time"}
                          </div>
                          <strong className="text-dark">{vehicle.time}</strong>
                        </div>
                      </div>
                      <div className="col-6">
                        <div 
                          className="spec-item rounded-3 p-3"
                          style={{
                            background: "rgba(0, 200, 83, 0.05)",
                            border: "1px solid rgba(0, 200, 83, 0.1)"
                          }}
                        >
                          <div className="text-muted small mb-1">
                            {language === 'ar' ? "الوزن" : "Weight"}
                          </div>
                          <strong className="text-dark">{vehicle.weight}</strong>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Select Button */}
                  <button 
                    className="select-btn w-100 py-3 fw-semibold border-0"
                    style={{
                      background: "linear-gradient(135deg, #00c853 0%, #00e676 100%)",
                      color: "white",
                      borderRadius: "15px",
                      transition: "all 0.3s ease",
                      boxShadow: "0 6px 20px rgba(0, 200, 83, 0.3)"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateY(-3px)";
                      e.target.style.boxShadow = "0 10px 30px rgba(0, 200, 83, 0.5)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "0 6px 20px rgba(0, 200, 83, 0.3)";
                    }}
                  >
                    {language === 'ar' ? `اختر ${vehicle.name}` : `Select ${vehicle.name}`}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .luxury-vehicle-card {
          backdrop-filter: blur(10px);
        }
        
        .icon-container {
          transition: transform 0.3s ease;
        }
        
        .icon-container:hover {
          transform: rotate(5deg) scale(1.05);
        }
        
        .spec-item {
          transition: all 0.3s ease;
        }
        
        .luxury-vehicle-card:hover .spec-item {
          background: rgba(0, 200, 83, 0.08) !important;
          border-color: rgba(0, 200, 83, 0.2) !important;
        }
        
        @media (max-width: 768px) {
          .display-5 {
            font-size: 2rem !important;
          }
          
          .image-container {
            height: 200px !important;
          }
        }
        
        @media (max-width: 576px) {
          .image-container {
            height: 180px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default SelectVehicle;