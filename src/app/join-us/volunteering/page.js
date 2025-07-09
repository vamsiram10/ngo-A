"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Counter from "@/components/Counter";

// --- Animation Variants ---
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

// --- Local Components ---

const Stat = ({ to, suffix, label }) => (
    <div className="text-center">
        <Counter to={to} suffix={suffix} />
        <p className="font-serif text-xs text-neutral-400 tracking-widest mt-2 uppercase">{label}</p>
    </div>
);

const FeaturePoint = ({ number, title, children }) => (
    <motion.div variants={itemVariants} className="relative pl-12">
        <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-pink-900/50 border border-pink-700/60 text-pink-400 font-semibold">{number}</div>
        <h3 className="font-semibold text-lg text-white mb-2">{title}</h3>
        <p className="text-neutral-400 leading-relaxed">{children}</p>
    </motion.div>
);

const RegistrationModal = ({ isOpen, onClose, opportunity }) => {
    // This modal's code remains unchanged.
    const [view, setView] = useState('details'); const handleClose = () => { onClose(); setTimeout(() => { setView('details'); }, 300); }; const handleSubmit = (e) => { e.preventDefault(); setView('success'); }; if (!opportunity) return null;
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={handleClose} className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }} transition={{ type: "spring", stiffness: 300, damping: 30 }} onClick={(e) => e.stopPropagation()} className="bg-neutral-900 border border-neutral-700 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden">
                        <AnimatePresence mode="wait">
                            {view === 'details' && ( <motion.div key="details" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-0"><Image src={opportunity.img} alt={opportunity.title} width={800} height={400} className="w-full h-56 object-cover" /><div className="p-8"><h2 className="text-3xl font-bold text-pink-500 mb-2">{opportunity.title}</h2><p className="text-neutral-400 mb-4">Commitment: {opportunity.time}</p><p className="text-neutral-300 leading-relaxed mb-6">{opportunity.longDesc}</p><h3 className="font-semibold text-white mb-2">Key Responsibilities:</h3><ul className="list-disc list-inside text-neutral-400 space-y-1 mb-6">{opportunity.responsibilities.map(res => <li key={res}>{res}</li>)}</ul><div className="flex justify-end"><button onClick={() => setView('form')} className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full transition-all">Register Now</button></div></div></motion.div>)}
                            {view === 'form' && ( <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-8"><div className="mb-6"><h2 className="text-2xl font-bold text-pink-500">{opportunity.title}</h2><p className="text-neutral-400">Register your interest.</p></div><form onSubmit={handleSubmit} className="space-y-4"><div className="grid grid-cols-1 md:grid-cols-2 gap-4"><input className="w-full bg-neutral-800 border border-neutral-600 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-pink-500" type="text" placeholder="Full Name" required /><input className="w-full bg-neutral-800 border border-neutral-600 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-pink-500" type="email" placeholder="Email Address" required /></div><input className="w-full bg-neutral-800 border border-neutral-600 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-pink-500" type="tel" placeholder="Phone Number" required /><div><label className="block text-sm font-medium text-neutral-400 mb-2">Areas of Interest:</label><div className="grid grid-cols-2 md:grid-cols-3 gap-2">{['Design & Media', 'Outreach', 'Research'].map(interest => (<label key={interest} className="flex items-center space-x-2 bg-neutral-800 border border-neutral-600 rounded-lg px-3 py-2 text-white cursor-pointer hover:bg-neutral-700 has-[:checked]:bg-pink-900/50 has-[:checked]:border-pink-700"><input type="checkbox" name="interests" value={interest} className="h-4 w-4 rounded-sm bg-neutral-700 border-neutral-500 text-pink-600 focus:ring-pink-500" /><span>{interest}</span></label>))}</div></div><div className="flex justify-between items-center pt-2"><button type="button" onClick={() => setView('details')} className="text-neutral-400 hover:text-white transition">← Back to Details</button><button type="submit" className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-full transition-all">Submit</button></div></form></motion.div>)}
                            {view === 'success' && ( <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-8 text-center"><motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-green-500 mx-auto mb-4 h-16 w-16"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></motion.div><h2 className="text-2xl font-bold text-white mb-2">Registration Received!</h2><p className="text-neutral-300 mb-6">Thank you for your interest in "{opportunity.title}". We'll be in touch soon.</p><button onClick={handleClose} className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-full transition-all">Close</button></motion.div>)}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// --- Main Volunteering Page Component ---

export default function VolunteeringPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedOpp, setSelectedOpp] = useState(null);
    const openModal = (opportunity) => { setSelectedOpp(opportunity); setModalOpen(true); };
    const closeModal = () => { setModalOpen(false); };

    const opportunities = [
        { id: 1, img: "/images/volunteer1.jpg", title: "Design & Media", desc: "Craft compelling visuals and social content that tells our story.", time: "5-10 hrs/week", longDesc: "As a Design & Media volunteer, you will be the creative force behind our public communications. You'll work with our team to produce engaging content that captures the hearts and minds of our audience, driving awareness and support for our cause.", responsibilities: ["Creating graphics for social media campaigns.", "Editing short promotional videos.", "Designing presentations and reports."] },
        { id: 2, img: "/images/volunteer2.jpg", title: "Community Outreach", desc: "Be the face of our mission. Plan and lead campaigns and awareness drives.", time: "Flexible", longDesc: "Join our outreach team to connect directly with the communities we serve. You'll be instrumental in organizing events, running fundraising drives, and representing our foundation to the public, building relationships that form the backbone of our work.", responsibilities: ["Assisting in event planning and execution.", "Engaging with the public at events.", "Distributing informational materials."] },
        { id: 3, img: "/images/volunteer3.jpg", title: "Research & Impact", desc: "Help us measure what matters. Conduct surveys and analyze our social impact.", time: "8-12 hrs/week", longDesc: "In this data-driven role, you will help us quantify the change we create. You'll be involved in conducting surveys, analyzing results, and compiling impact reports that guide our strategy and demonstrate our effectiveness to stakeholders.", responsibilities: ["Collecting and organizing survey data.", "Analyzing qualitative and quantitative feedback.", "Contributing to impact assessment reports."] },
    ];

  return (
    <>
      <main className="bg-black text-white">
        <section className="relative min-h-[90vh] flex items-center justify-center text-center p-4">
            <Image src="/images/volunteer-hero.jpg" alt="A group of smiling volunteers" layout="fill" objectFit="cover" className="z-0 opacity-40" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
            <motion.div initial="hidden" animate="visible" variants={containerVariants} className="relative z-20"><motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-white mb-6">Become a <span className="text-pink-500">Changemaker</span></motion.h1><motion.p variants={itemVariants} className="text-lg md:text-xl text-neutral-200 mx-auto max-w-3xl mb-10 leading-relaxed">Join a passionate community dedicated to creating tangible, lasting impact. Your time and skills can change lives.</motion.p><motion.div variants={itemVariants}><Link href="#opportunities"><motion.button whileHover={{ scale: 1.05 }} className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg shadow-pink-800/60">View Opportunities</motion.button></Link></motion.div></motion.div>
        </section>

        <section className="relative -mt-20 z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl py-12"><div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12"><Stat to={100} suffix="+" label="Volunteers Engaged" /><Stat to={8} label="Active Projects" /><Stat to={2000} suffix="+" label="Lives Impacted" /></div></div></div>
            
            <div className="bg-black pt-28 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative bg-neutral-900 border border-neutral-800 rounded-3xl p-8 md:p-16 overflow-hidden">
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(107,33,168,0.08),_transparent_40%)]"></div>
                        <div className="absolute inset-0 -z-20 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] bg-cover bg-[url('https://tailwindcss.com/_next/static/media/docs@tinypng.61f4d333_1x.png')] opacity-20"></div>
                        <h2 className="text-4xl font-bold text-pink-500 mb-16 text-center">Why Your Help Matters</h2>
                        <motion.div initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, amount: 0.2 }} className="grid lg:grid-cols-3 gap-12 md:gap-16 items-center">
                            <div className="lg:col-span-1 space-y-12 text-right"><FeaturePoint number="01" title="Make a Real Impact">Your work directly contributes to improving lives and strengthening communities.</FeaturePoint><FeaturePoint number="02" title="Develop New Skills">Gain valuable experience in leadership, communication, and project management.</FeaturePoint></div>
                            <motion.div variants={itemVariants} className="lg:col-span-1 flex justify-center items-center order-first lg:order-none"><div className="relative w-full max-w-xs aspect-square rounded-full overflow-hidden border-4 border-neutral-800 shadow-2xl"><Image src="/images/volunteer2.jpg" alt="A volunteer helping the community" layout="fill" objectFit="cover" /></div></motion.div>
                            <div className="lg:col-span-1 space-y-12 text-left"><FeaturePoint number="03" title="Join a Community">Connect with like-minded individuals who share your passion for social good.</FeaturePoint><FeaturePoint number="04" title="Flexible Commitment">Find roles that fit your schedule, from one-day events to ongoing projects.</FeaturePoint></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>

        <section id="opportunities" className="bg-neutral-950 py-24 border-t border-neutral-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-pink-500 mb-12 text-center">Current Opportunities</h2>
                <motion.div initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, amount: 0.1 }} className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {opportunities.map((item) => (
                        <motion.div key={item.id} variants={itemVariants} className="bg-neutral-900 rounded-xl flex flex-col border border-neutral-800 transition-all duration-300 hover:border-pink-500/80 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-900/40 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.08),_transparent_40%)]">
                            <div className="relative h-48 w-full rounded-t-xl overflow-hidden cursor-pointer" onClick={() => openModal(item)}><Image src={item.img} alt={item.title} layout="fill" objectFit="cover" /></div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-semibold text-pink-400 mb-3 cursor-pointer" onClick={() => openModal(item)}>{item.title}</h3>
                                <p className="text-neutral-300 text-base mb-4 flex-grow leading-relaxed">{item.desc}</p>
                                <p className="text-sm text-neutral-400 font-semibold mb-6">Commitment: <span className="text-neutral-200">{item.time}</span></p>
                                {/* --- THIS IS THE SURGICAL FIX --- */}
                                <div className="mt-auto pt-4">
                                    <motion.button onClick={() => openModal(item)} whileHover={{ scale: 1.05 }} className="w-full bg-gradient-to-r from-pink-600 to-violet-600 hover:from-pink-500 hover:to-violet-500 text-white font-bold py-3 rounded-lg transition-all duration-300">View & Register</motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
      </main>
      <RegistrationModal isOpen={modalOpen} onClose={closeModal} opportunity={selectedOpp} />
    </>
  );
}