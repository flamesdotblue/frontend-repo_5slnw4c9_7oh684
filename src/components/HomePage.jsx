import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Star, Rocket, Sparkles } from 'lucide-react';

const Section = ({ id, children }) => (
  <section id={id} className="relative py-20 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
);

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight"
        >
          Igniters Club – RCPIT
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 text-xl sm:text-2xl text-white/80 max-w-2xl"
        >
          Igniting Ideas. Inspiring Minds.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#about" className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-medium shadow-lg hover:shadow-xl transition">
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition">
            Join Us
            <Users className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

const About = () => (
  <Section id="about">
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid gap-10 md:grid-cols-2">
      <div>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">About Us</h2>
        <p className="mt-4 text-white/80 leading-relaxed">
          Igniters Club at RCPIT is a community of passionate students who come together to innovate, create and grow through technology, leadership and teamwork.
        </p>
        <div className="mt-6 grid gap-3">
          <div className="flex items-start gap-3">
            <Star className="h-5 w-5 text-rose-400 mt-0.5" />
            <p className="text-white/80">Workshops, events, and hackathons</p>
          </div>
          <div className="flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-orange-400 mt-0.5" />
            <p className="text-white/80">Personal growth and leadership</p>
          </div>
          <div className="flex items-start gap-3">
            <Rocket className="h-5 w-5 text-pink-400 mt-0.5" />
            <p className="text-white/80">Social impact and innovation projects</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-tr from-rose-500/30 to-orange-500/30 blur-2xl rounded-3xl" />
        <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-white font-medium text-lg">Vision</h3>
          <ul className="mt-3 text-white/80 list-disc list-inside space-y-2">
            <li>Build a culture of innovation and leadership.</li>
            <li>Empower young minds with real-world skills.</li>
          </ul>
          <h3 className="mt-6 text-white font-medium text-lg">Mission</h3>
          <ul className="mt-3 text-white/80 list-disc list-inside space-y-2">
            <li>Organize technical and creative events for skill development.</li>
            <li>Encourage teamwork, problem-solving, and leadership.</li>
            <li>Provide mentorship and resources for projects and research.</li>
            <li>Build a supportive community to share knowledge and grow together.</li>
          </ul>
        </div>
      </div>
    </motion.div>
  </Section>
);

const Team = () => {
  const groups = [
    { title: 'Founders', members: [
      { name: 'Member One', role: 'Founder' },
      { name: 'Member Two', role: 'Co-Founder' },
    ]},
    { title: 'President & Vice-President', members: [
      { name: 'Alex Smith', role: 'President' },
      { name: 'Priya Patel', role: 'Vice-President' },
    ]},
    { title: 'Core Team', members: [
      { name: 'Rahul Kumar', role: 'Lead, Technical' },
      { name: 'Sara Khan', role: 'Lead, Design' },
      { name: 'John Doe', role: 'Lead, Management' },
      { name: 'Emily Chen', role: 'Lead, Media' },
    ]},
    { title: 'Other Teams', members: [
      { name: 'Tech Squad', role: 'Technical Team' },
      { name: 'Ops Crew', role: 'Management Team' },
      { name: 'Design Hub', role: 'Design Team' },
      { name: 'Media Unit', role: 'Media & PR' },
    ]},
  ];

  return (
    <Section id="team">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-2xl sm:text-3xl font-semibold text-white mb-8">
        Igniters Team
      </motion.h2>
      <div className="grid gap-10">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="text-white/90 font-medium mb-4">{group.title}</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {group.members.map((m) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition overflow-hidden"
                >
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 mb-4 grid place-items-center">
                    <div className="h-14 w-14 rounded-full bg-gradient-to-br from-rose-500 to-orange-500 shadow-lg" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">{m.name}</p>
                      <p className="text-white/70 text-sm">{m.role}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-white/50 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const Contact = () => (
  <Section id="contact">
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid gap-8 md:grid-cols-2">
      <div>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Contact Us</h2>
        <p className="mt-3 text-white/80">Have questions or want to collaborate? Reach out to us.</p>
        <div className="mt-6 p-6 rounded-2xl border border-white/10 bg-white/5">
          <form onSubmit={(e) => e.preventDefault()} className="grid gap-4">
            <input type="text" name="name" placeholder="Name" className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-rose-400/40" required />
            <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-rose-400/40" required />
            <textarea name="message" placeholder="Message" rows={5} className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-rose-400/40" required />
            <button className="inline-flex justify-center items-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-medium hover:shadow-xl transition">
              Send Message
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
      <div className="grid gap-4 content-start">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-white/80 text-sm">R. C. Patel Institute of Technology (RCPIT)</p>
          <p className="text-white/60 text-sm mt-1">Shirpur, Maharashtra</p>
          <div className="mt-4 h-48 w-full rounded-xl bg-gradient-to-br from-rose-500/20 to-orange-500/20 border border-white/10" />
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-white/80 text-sm">Follow us for updates</p>
          <div className="mt-3 flex items-center gap-3">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm">LinkedIn</a>
          </div>
        </div>
      </div>
    </motion.div>
  </Section>
);

const HomePage = () => {
  return (
    <main className="bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.06),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.06),transparent_40%)] min-h-screen">
      <Hero />
      <About />
      <Team />
      <Contact />
    </main>
  );
};

export default HomePage;
