import React from 'react';
import { motion } from 'framer-motion';

const Feature = ({ title, desc }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
    <h4 className="text-white font-medium">{title}</h4>
    <p className="text-white/70 text-sm mt-1">{desc}</p>
  </motion.div>
);

const StudyCafePage = () => {
  return (
    <main className="min-h-screen bg-black text-white pb-20">
      <div className="relative h-[56vh] grid place-items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(244,63,94,0.35),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(249,115,22,0.3),transparent_40%)]" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Igniters Study Café</h1>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">A calm, collaborative space for focused study, open discussions and mentorship — designed to help you grow every day.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Feature title="High-speed Wi‑Fi" desc="Stay connected and productive with reliable internet access." />
          <Feature title="Open Discussions" desc="Collaborate with peers, brainstorm ideas, and share knowledge." />
          <Feature title="Mentorship Support" desc="Guidance from seniors and mentors for projects and careers." />
          <Feature title="Web Dev Zone" desc="Hands-on resources for HTML, CSS, JS, React and beyond." />
          <Feature title="Focus Pods" desc="Quiet corners designed for deep work and concentration." />
          <Feature title="Refresh & Recharge" desc="Light refreshments and a chill vibe to keep you energized." />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-medium text-lg">How to Join</h3>
            <p className="text-white/70 mt-2 text-sm">Bring your student ID and register with the club desk. Regular meets are announced on our social channels.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-medium text-lg">Timings</h3>
            <p className="text-white/70 mt-2 text-sm">Open on weekdays after lectures. Weekend hack sessions and study sprints are hosted frequently.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StudyCafePage;
