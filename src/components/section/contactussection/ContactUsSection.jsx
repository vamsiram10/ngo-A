"use client";

import { BackgroundLines } from "@/components/utils/background/background-lines";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      type: "spring",
      stiffness: 60,
    },
  }),
};

const glowPulse = {
  animate: {
    boxShadow: ["0 0 0px #ec4899", "0 0 10px 2px #ec4899", "0 0 0px #ec4899"],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const paperVariants = {
  initial: { scale: 0.95, opacity: 0, y: 40, filter: "blur(8px)" },
  animate: {
    scale: 1,
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, type: "spring", stiffness: 60 },
  },
};

const ContactUsSection = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [subjectInput, setSubjectInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setError(null);
    setSent(false);

    if (
      !nameInput.trim() ||
      !emailInput.trim() ||
      !subjectInput.trim() ||
      !messageInput.trim()
    ) {
      setError("Please fill in all fields before sending.");
      return;
    }

    if (!emailInput.includes("@")) {
      setError("Please enter a valid email address containing '@'.");
      return;
    }

    setSending(true);

    emailjs
      .send(
        "service_klcih5m",
        "template_jor4rbo",
        {
          name: nameInput,
          user_email: emailInput,
          subject: subjectInput,
          message: messageInput,
        },
        "3myaa1CZDznu2Nkdu"
      )
      .then(
        () => {
          setSent(true);
          setSending(false);
          setNameInput("");
          setEmailInput("");
          setSubjectInput("");
          setMessageInput("");
          if (form.current) form.current.reset();
        },
        (error) => {
          setError("Failed to send message, please try again later.");
          setSending(false);
        }
      );
  };

  return (
    <div className="overflow-hidden relative top-0 flex items-center justify-center py-12 px-4 min-h-[110vh]">
      {/* Animated background lines */}
      <BackgroundLines className="z-0 absolute inset-0" />

      {/* Animated floating pink blobs for extra visual appeal */}
      <motion.div
        className="z-0 absolute w-72 h-72 bg-pink-400/30 rounded-full blur-3xl -top-60 -left-20"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="z-0 absolute w-80 h-80 bg-pink-300/20 rounded-full blur-2xl -bottom-24 -right-24"
        animate={{ y: [0, -20, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        variants={paperVariants}
        initial="initial"
        animate="animate"
        className="z-10 relative top-2 p-10 w-full max-w-md min-h-[500px] bg-white/90 rounded-2xl border-pink-200 shadow-2xl dark:bg-neutral-900/90 backdrop-blur-md border dark:border-pink-900"
        autoComplete="off"
      >
        {/* Animated envelope icon */}
        <motion.div
          initial={{ scale: 0, rotate: -20, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{
            delay: 0.1,
            type: "spring",
            stiffness: 120,
            damping: 8,
          }}
          className="flex justify-center mb-2"
        >
          <motion.div
            className="p-3 bg-pink-100 rounded-full shadow-lg dark:bg-pink-900/40"
            whileHover={{ scale: 1.1, rotate: 8 }}
            whileTap={{ scale: 0.95, rotate: -8 }}
          >
            <svg
              width={36}
              height={36}
              viewBox="0 0 24 24"
              fill="none"
              className="text-pink-500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M2 6.5A2.5 2.5 0 014.5 4h15A2.5 2.5 0 0122 6.5v11A2.5 2.5 0 0119.5 20h-15A2.5 2.5 0 012 17.5v-11z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
              />
              <motion.path
                d="M22 6.5l-10 7-10-7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              />
            </svg>
          </motion.div>
        </motion.div>
        <motion.h2
          className="mb-6 text-3xl font-extrabold text-center text-white tracking-wide drop-shadow"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
        >
          CONTACT US
        </motion.h2>
        <div className="space-y-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            whileHover={{ scale: 1.025, boxShadow: "0 2px 16px 0 #ec4899" }}
            transition={{ type: "spring", stiffness: 80 }}
          >
            <label
              htmlFor="name"
              className="block mb-1 text-sm font-semibold text-neutral-700 dark:text-neutral-200"
            >
              Name
            </label>
            <motion.input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              whileFocus={{ scale: 1.04, boxShadow: "0 0 0 3px #ec4899" }}
              className="px-4 py-2 w-full font-medium bg-neutral-50 rounded-lg border-neutral-300 border dark:border-neutral-700 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              required
            />
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
            whileHover={{ scale: 1.025, boxShadow: "0 2px 16px 0 #ec4899" }}
            transition={{ type: "spring", stiffness: 80 }}
          >
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-semibold text-neutral-700 dark:text-neutral-200"
            >
              Email
            </label>
            <motion.input
              type="email"
              id="email"
              name="user_email"
              placeholder="you@example.com"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              whileFocus={{ scale: 1.04, boxShadow: "0 0 0 3px #ec4899" }}
              className="px-4 py-2 w-full font-medium bg-neutral-50 rounded-lg border-neutral-300 border dark:border-neutral-700 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              required
            />
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={3}
            whileHover={{ scale: 1.025, boxShadow: "0 2px 16px 0 #ec4899" }}
            transition={{ type: "spring", stiffness: 80 }}
          >
            <label
              htmlFor="subject"
              className="block mb-1 text-sm font-semibold text-neutral-700 dark:text-neutral-200"
            >
              Subject
            </label>
            <motion.input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              value={subjectInput}
              onChange={(e) => setSubjectInput(e.target.value)}
              whileFocus={{ scale: 1.04, boxShadow: "0 0 0 3px #ec4899" }}
              className="px-4 py-2 w-full font-medium bg-neutral-50 rounded-lg border-neutral-300 border dark:border-neutral-700 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              required
            />
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={4}
            whileHover={{ scale: 1.025, boxShadow: "0 2px 16px 0 #ec4899" }}
            transition={{ type: "spring", stiffness: 80 }}
          >
            <label
              htmlFor="message"
              className="block mb-1 text-sm font-semibold text-neutral-700 dark:text-neutral-200"
            >
              Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              rows={4}
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              whileFocus={{ scale: 1.04, boxShadow: "0 0 0 3px #ec4899" }}
              className="px-4 py-2 w-full font-medium bg-neutral-50 rounded-lg border-neutral-300 border dark:border-neutral-700 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-pink-400 transition resize-none"
              required
            />
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={5}
            className="relative"
          >
            <motion.button
              type="submit"
              className={`py-2.5 px-4 w-full text-white font-bold bg-gradient-to-r from-pink-500 via-pink-600 to-pink-500 rounded-lg shadow-lg transition-all duration-200 ${
                sending
                  ? "opacity-60 cursor-not-allowed"
                  : "hover:from-pink-600 hover:to-pink-700 hover:shadow-pink-400/40"
              }`}
              whileTap={{ scale: 0.97 }}
              whileHover={
                !sending
                  ? { scale: 1.04, boxShadow: "0 0 16px 2px #ec4899" }
                  : {}
              }
              disabled={sending}
              {...glowPulse}
            >
              {sending ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.svg
                    className="h-5 w-5 text-white animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      ease: "linear",
                    }}
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </motion.svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <motion.svg
                    width={20}
                    height={20}
                    fill="none"
                    viewBox="0 0 24 24"
                    className="text-white"
                    initial={{ x: -8, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                  >
                    <path
                      d="M2 21l21-9-21-9v7l15 2-15 2v7z"
                      fill="currentColor"
                    />
                  </motion.svg>
                  Send
                </span>
              )}
            </motion.button>
            <AnimatePresence>
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 80 }}
                  className="flex items-center justify-center gap-2 mt-4 text-green-600 text-center text-base font-semibold"
                >
                  <motion.span
                    role="img"
                    aria-label="check"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  >
                    ✅
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    Message sent successfully!
                  </motion.span>
                </motion.div>
              )}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 80 }}
                  className="flex items-center justify-center gap-2 mt-4 text-red-600 text-center text-base font-semibold"
                >
                  <motion.span
                    role="img"
                    aria-label="error"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  >
                    ❌
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    {error}
                  </motion.span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.form>
    </div>
  );
};

export default ContactUsSection;
