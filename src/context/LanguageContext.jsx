import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ar');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const translations = {
    ar: {
      welcome: "مرحباً بك في",
      tagline: "تجربة التنقل الحضري الفاخرة",
      subtitle: "اختر رحلتك الفاخرة في ثوانٍ — فقط امسح، اختر، وانطلق!",
      scooter: "سكوتر",
      bike: "دراجة",
      selectVehicle: "اختر مركبة",
      chooseRide: "اختر المركبة المثالية لرحلتك",
      battery: "البطارية",
      range: "المدى",
      topSpeed: "السرعة القصوى",
      days: "الأيام",
      total: "المجموع",
      pay: "ادفع & افتح القفل",
      success: "✅ تم الدفع بنجاح!",
      collect: "اذهب إلى خزانة رقم",
      backHome: "العودة للرئيسية",
      features: {
        instant: "فتح فوري",
        charged: "مشحون بالكامل",
        insurance: "تأمين فاخر",
        smart: "تطبيق ذكي"
      },
      // New translations added
      chooseScooter: "اختر السكوتر",
      chooseBike: "اختر الدراجة",
      available: "متاح",
      batteryCharge: "شحن البطارية",
      rideTime: "وقت الرحلة",
      weight: "الوزن",
      select: "اختر",
      goToHome: "العودة للرئيسية",
      backToHome: "← العودة للرئيسية",
      // Vehicle status
      excellent: "ممتاز",
      good: "جيد",
      fair: "متوسط",
      // Payment related
      paymentMethod: "طريقة الدفع",
      creditCard: "بطاقة ائتمان",
      digitalWallet: "محفظة رقمية",
      confirmPayment: "تأكيد الدفع",
      processing: "جاري المعالجة",
      // Success messages
      vehicleReady: "المركبة جاهزة",
      pickupInstructions: "تعليمات الاستلام",
      enjoyRide: "استمتع برحلتك"
    },
    en: {
      welcome: "Welcome to",
      tagline: "Experience Premium Urban Mobility",
      subtitle: "Choose your luxury ride in seconds — just scan, select, and glide!",
      scooter: "Scooter",
      bike: "Bike",
      selectVehicle: "Select Vehicle",
      chooseRide: "Choose the perfect vehicle for your journey",
      battery: "Battery",
      range: "Range",
      topSpeed: "Top Speed",
      days: "Days",
      total: "Total",
      pay: "Pay & Unlock",
      success: "✅ Payment Successful!",
      collect: "Go to locker number",
      backHome: "Back to Home",
      features: {
        instant: "Instant Unlock",
        charged: "Fully Charged",
        insurance: "Premium Insurance",
        smart: "Smart App"
      },
      // New translations added
      chooseScooter: "Choose Scooter",
      chooseBike: "Choose Bike",
      available: "Available",
      batteryCharge: "Battery Charge",
      rideTime: "Ride Time",
      weight: "Weight",
      select: "Select",
      goToHome: "Back to Home",
      backToHome: "← Back to Home",
      // Vehicle status
      excellent: "Excellent",
      good: "Good",
      fair: "Fair",
      // Payment related
      paymentMethod: "Payment Method",
      creditCard: "Credit Card",
      digitalWallet: "Digital Wallet",
      confirmPayment: "Confirm Payment",
      processing: "Processing",
      // Success messages
      vehicleReady: "Vehicle Ready",
      pickupInstructions: "Pickup Instructions",
      enjoyRide: "Enjoy Your Ride"
    }
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      toggleLanguage, 
      t: translations[language] 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};