import React, { useRef } from "react";
import emailjs from "emailjs-com";
import contactUsBackgroundpage from "../utils/contactUsBackgroundpage.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_3uvdo9i',
      'template_7xm363m',     
      form.current,
      'J50deZfGlAtTVzLP3'          
    )
    .then(() => {
        alert("Message sent successfully ✅");
        form.current.reset();
      })
    .catch((error) => {
        alert("Failed to send the message ❌");
        console.error(error);
      });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{
        backgroundImage: `url(${contactUsBackgroundpage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="backdrop-blur-sm bg-white/50 border-2 border-gray-600 shadow-2xl rounded-2xl w-full max-w-4xl p-8">
        <div className="w-full">
          <h1 className="text-4xl font-bold text-black mb-2">Contact Us</h1>
          <p className="text-black mb-6">
            We'd love to hear from you! Please fill out the form below.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-5 border border-gray-400 p-6 rounded-xl bg-white/30 shadow-md">
            <div>
              <label className="block text-black mb-1 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                className="w-full border border-black bg-white/70 text-black px-4 py-2 rounded-md focus:outline-none"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block text-black mb-1 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="w-full border border-black bg-white/70 text-black px-4 py-2 rounded-md focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-black mb-1 font-semibold">Message</label>
              <textarea
                name="message"
                className="w-full border border-black bg-white/70 text-black px-4 py-2 h-28 rounded-md focus:outline-none"
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-md transition-all"
            >
              Send Message
            </button>
          </form>

          <div className="mt-6 text-sm text-black text-center">
            Or email us directly at{" "}
            <a
              href="mailto:sonammourya7683@gmail.com"
              className="text-red-600 font-semibold underline"
            >
              OurFoodHouse123@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
