// pages/payment.js
"use client";
import React, { useEffect, useState } from "react";

const PaymentPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [isPaying, setIsPaying] = useState(false);

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {
    if (!name || !phone || !amount) {
      alert("Please fill all the details");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (isNaN(amount) || amount <= 0) {
      alert("Amount must be a number greater than 0.");
      return;
    }

    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded yet. Please try again.");
      return;
    }

    setIsPaying(true);

    try {
      // Create order on backend
      const response = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });

      const data = await response.json();

      if (!data || !data.id) {
        alert("Something went wrong. Try again.");
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Safe to expose in frontend
        amount: data.amount,
        currency: "INR",
        name: "Your Organization",
        description: "Donation",
        order_id: data.id,
        prefill: {
          name: name,
          contact: phone,
        },
        handler: function (response) {
          alert("Payment successful!");
          console.log("Payment details:", response);
        },
        modal: {
          ondismiss: function () {
            alert("Payment popup closed.");
          },
        },
        theme: {
          color: "#f759ab",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Something went wrong. Try again.");
    } finally {
      setIsPaying(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-pink-600">
          Donate Any Amount
        </h2>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-pink-500 text-black placeholder-black"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-pink-500 text-black placeholder-black"
        />
        <input
          type="number"
          placeholder="Amount (INR)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 mb-6 border border-gray-300 rounded focus:outline-pink-500 text-black placeholder-black"
        />
        <button
          onClick={handlePayment}
          disabled={isPaying}
          className={`w-full ${
            isPaying
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-pink-600 hover:bg-pink-700"
          } text-white font-semibold p-3 rounded transition`}
        >
          {isPaying ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
