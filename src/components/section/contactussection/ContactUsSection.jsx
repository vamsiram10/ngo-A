import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        formRef.current,
        "your_user_id_or_public_key"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section className="relative z-10 overflow-hidden bg-gradient-to-br from-[#1f1f1f] to-[#2e2e2e] py-20 lg:py-[120px] font-sans">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div className="w-full lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px]">
              <span className="mb-4 inline-block rounded bg-pink-600/10 px-4 py-1 text-sm font-medium tracking-wide text-pink-500 uppercase">
                Contact Us
              </span>
              <h2 className="mb-6 text-4xl font-bold tracking-tight leading-tight text-white">
                Let’s talk about everything!
              </h2>
              <p className="mb-10 text-base text-gray-300 leading-relaxed">
                Feel free to reach out with any questions or ideas. We’d love to hear from you!
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="mr-4 text-pink-500">
                    {/* Location Icon */}
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10.5C21 16.5 12 22 12 22C12 22 3 16.5 3 10.5C3 8.51088 3.7375 6.60322 5.05025 5.05025C6.36301 3.49728 8.14348 2.5 10 2.5C11.8565 2.5 13.637 3.49728 14.9497 5.05025C16.2625 6.60322 17 8.51088 17 10.5H21Z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1">Our Location</h4>
                    <p className="text-sm text-gray-400">H.no.6-3-1100/A-1, ground floor,near matrika hospital, Thyagaraja nagar, Somajiguda, Hyderabad -500080</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 text-pink-500">
                    {/* Email Icon */}
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20V20H4V4Z" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 6L12 13L2 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1">Email Us</h4>
                    <p className="text-sm text-gray-400">avasafoundation28@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 text-pink-500">
                    {/* LinkedIn Icon */}
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v13h-4V8zm7.5 0h3.8v1.8h.05c.53-1 1.83-2 3.75-2 4 0 4.75 2.6 4.75 6v7h-4v-6.5c0-1.55-.03-3.54-2.25-3.54s-2.6 1.7-2.6 3.43V21h-4V8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1">Linkedin Page:</h4>
                    <p className="text-sm text-gray-400">https://in.linkedin.com/company/the-avasa-foundation</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 text-pink-500">
                    {/* Instagram Icon */}
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.5-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1">Instagram:</h4>
                    <p className="text-sm text-gray-400">@avasa.foundation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full rounded-lg bg-[#1f1f1f] p-8 shadow-lg lg:w-1/2 xl:w-5/12">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="w-full rounded-lg border border-gray-700 bg-[#2b2b2b] p-4 text-sm font-normal text-white placeholder-gray-400 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="w-full rounded-lg border border-gray-700 bg-[#2b2b2b] p-4 text-sm font-normal text-white placeholder-gray-400 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                className="w-full resize-none rounded-lg border border-gray-700 bg-[#2b2b2b] p-4 text-sm font-normal text-white placeholder-gray-400 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
              <button
                type="submit"
                className="w-full rounded-lg bg-pink-600 px-6 py-3 text-center text-white text-sm font-medium tracking-wide uppercase transition duration-300 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
