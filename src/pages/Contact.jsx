import React, { useState } from "react";
import gmail from "../photos/gmail.png";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "d4f2cb48-a0d9-4573-97ec-b5de66e52fbd");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully ✅");
        event.target.reset();
      } else {
        setResult("Something went wrong ❌");
      }
    } catch (error) {
      setResult("Error submitting form ❌");
    }
  };

  return (
    <>
      {/* Heading */}
      <div className="flex flex-col items-center mt-30">
        <h1 className="text-gray-300 text-lg">Get in Touch</h1>
        <h1 className="text-blue-600 text-4xl font-bold">Contact Me</h1>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10 mb-5">
        
        {/* Left Card */}
        <div className="h-50 w-90 bg-black rounded-xl flex flex-col items-center p-6 shadow-lg">
          <img src={gmail} alt="Gmail" className="h-12 mb-4" />
          <div className="text-white text-lg font-semibold">Email</div>
          <div className="text-gray-300 mb-2">
            kvijayramareddy@gmail.com
          </div>
          <a
            href="mailto:kvijayramareddy@gmail.com"
            className="text-blue-600 font-medium hover:underline"
          >
            Send a Message
          </a>
        </div>

        {/* Right Form */}
        <div className="bg-black rounded-xl p-6 shadow-lg h-100 w-90">
          <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              className="border-2 border-gray-600 bg-transparent text-white rounded-xl p-4 focus:outline-none focus:border-blue-600"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="border-2 border-gray-600 bg-transparent text-white rounded-xl p-4 focus:outline-none focus:border-blue-600"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="border-2 border-gray-600 bg-transparent text-white rounded-xl p-4 h-32 resize-none focus:outline-none focus:border-blue-600"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 text-white rounded-xl py-2 hover:bg-blue-700 transition"
            >
              Send
            </button>

            {result && (
              <p className="text-center text-sm text-gray-300 ">
                {result}
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
