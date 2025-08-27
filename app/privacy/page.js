// app/Components/Privacy.jsx
import React from "react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#FFF2EB] text-[#511D43] p-8 md:p-16">
      <div className="max-w-4xl mx-auto bg-[#FFE8CD] rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#DA6C6C]">
          Privacy Policy
        </h1>
        <p className="text-lg md:text-xl mb-4 leading-relaxed">
          At <span className="font-semibold text-[#AF3E3E]">EverCart</span>, your privacy is our priority. This policy explains how we collect, use, and protect your information.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#CD5656]">1. Information Collection</h2>
        <p className="mb-4">
          We collect personal details such as name, email, shipping address, and payment information to process orders and enhance your shopping experience.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#CD5656]">2. Use of Information</h2>
        <p className="mb-4">
          Your information is used to process orders, communicate promotions, improve services, and provide personalized recommendations.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#CD5656]">3. Data Security</h2>
        <p className="mb-4">
          We implement advanced security measures to protect your data from unauthorized access, disclosure, or misuse.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#CD5656]">4. Sharing Information</h2>
        <p className="mb-4">
          We never sell your personal information. Your data may be shared only with trusted service providers to fulfill orders or enhance services.
        </p>

        <p className="mt-6 text-[#901E3E] font-semibold">
          By using EverCart, you consent to the terms outlined in this privacy policy.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
