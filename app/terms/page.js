// app/Components/Term.jsx
import React from "react";

const Term = () => {
  return (
    <div className="min-h-screen bg-[#FFF2EB] text-[#511D43] p-8 md:p-16">
      <div className="max-w-4xl mx-auto bg-[#FFDCDC] rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#DA6C6C]">
          Terms & Conditions
        </h1>
        <p className="text-lg md:text-xl mb-4 leading-relaxed">
          Welcome to <span className="font-semibold text-[#AF3E3E]">EverCart</span>. By using our website, you agree to comply with and be bound by the following terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#CD5656]">1. Use of Website</h2>
        <p className="mb-4">
          All content on this website is for general information and shopping purposes only. You agree not to misuse any part of the site.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#CD5656]">2. Orders & Payments</h2>
        <p className="mb-4">
          All purchases made on EverCart are subject to availability and confirmation of the order price. Payment methods and processing are secure and confidential.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#CD5656]">3. Returns & Refunds</h2>
        <p className="mb-4">
          Returns and refunds are subject to our policies. Please check the product page for return eligibility and conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#CD5656]">4. Privacy & Security</h2>
        <p className="mb-4">
          Your privacy and personal information are very important to us. We handle your data securely in accordance with our privacy policy.
        </p>

        <p className="mt-6 text-[#901E3E] font-semibold">
          By continuing to use EverCart, you acknowledge that you have read and agreed to these terms.
        </p>
      </div>
    </div>
  );
};

export default Term;
