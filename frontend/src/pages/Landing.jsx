import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const GlitchText = ({ text, className }) => (
  <span className={`relative inline-block ${className}`} data-text={text}>
    {text}
  </span>
);

const FloatingParticle = ({ delay, x, y, size }) => (
  <motion.div
    className="absolute rounded-full bg-cyan-400 opacity-20"
    style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
    animate={{ y: [0, -30, 0], opacity: [0.1, 0.4, 0.1] }}
    transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
  />
);

const Landing = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const features = [
    { icon: '⚡', title: 'Instant Generation', desc: 'Convert any idea into UwU esolang code in milliseconds.' },
    { icon: '🔮', title: 'AI-Powered', desc: 'Leverages cutting-edge Claude AI for flawless transformations.' },
    { icon: '📜', title: 'Chat History', desc: 'All your generations saved and accessible anytime.' },
    { icon: '🛡️', title: 'Secure Auth', desc: 'JWT-protected sessions keep your work private.' },
  ];

  return (
    <div className="min-h-screen bg-[#050508] text-white font-mono overflow-x-hidden">
      {/* Animated grid background */}
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(0,255,200,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,200,0.03) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Particles */}
      {[...Array(15)].map((_, i) => (
        <FloatingParticle key={i} delay={i * 0.3} x={Math.random() * 100} y={Math.random() * 100} size={Math.random() * 6 + 2} />
      ))}

      {/* Nav */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 border-b border-cyan-900/40 bg-[#050508]/80 backdrop-blur-md"
      >
        <motion.div className="text-xl font-bold tracking-widest text-cyan-400" whileHover={{ scale: 1.05 }}>
          UWU<span className="text-white">_LANG</span>
        </motion.div>
        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05, borderColor: '#00ffe0' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/login')}
            className="px-5 py-2 border border-cyan-800 text-cyan-300 text-sm rounded hover:bg-cyan-900/20 transition-colors"
          >
            Sign In
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/signup')}
            className="px-5 py-2 bg-cyan-500 text-black text-sm font-bold rounded hover:bg-cyan-400 transition-colors"
          >
            Get Started
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero */}
      <motion.section ref={heroRef} style={{ y }} className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1 border border-cyan-800 rounded-full text-cyan-500 text-xs tracking-widest uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          AI-Powered Esolang Generator
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black tracking-tight leading-none mb-6"
        >
          <span className="text-white">Code in</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
            UwU Lang
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed"
        >
          Transform your ideas into esoteric programming art. Fast, AI-driven, and utterly chaotic.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,255,200,0.3)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/signup')}
            className="px-8 py-4 bg-cyan-500 text-black font-bold text-lg rounded hover:bg-cyan-400 transition-all"
          >
            Start Generating →
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/login')}
            className="px-8 py-4 border border-cyan-800 text-cyan-300 font-medium text-lg rounded hover:bg-cyan-900/20 transition-all"
          >
            Sign In
          </motion.button>
        </motion.div>

        {/* Terminal preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 w-full max-w-2xl rounded-xl border border-cyan-900/50 bg-[#0a0a10] overflow-hidden shadow-2xl shadow-cyan-900/20"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-cyan-900/40 bg-[#0d0d15]">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-2 text-xs text-gray-500 tracking-widest">uwu_generator.py</span>
          </div>
          <div className="p-6 text-left text-sm leading-relaxed">
            <p className="text-gray-500"># Input: print("Hello World")</p>
            <p className="text-cyan-400 mt-2">{'>'} Generating UwU code...</p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <p className="text-emerald-400 mt-2">pwint("hewwo wowwd~ (◕‿◕✿)")</p>
              <p className="text-emerald-400">nuzzwe_output(sys.stdout)</p>
              <p className="text-emerald-400">OwO_flush() # ✨ done!</p>
            </motion.div>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-cyan-400"
            >▊</motion.span>
          </div>
        </motion.div>
      </motion.section>

      {/* Features */}
      <section className="py-32 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-500 text-xs tracking-widest uppercase mb-3">Why UwU_Lang</p>
          <h2 className="text-4xl font-black text-white">Built Different</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, borderColor: 'rgba(0,255,200,0.4)' }}
              className="p-6 border border-cyan-900/30 rounded-xl bg-[#0a0a10] hover:bg-[#0d0d18] transition-all cursor-default"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-white mb-2 text-sm tracking-wide">{f.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center border-t border-cyan-900/20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-black mb-4">Ready to go UwU?</h2>
          <p className="text-gray-500 mb-8">Join the chaos. Sign up free.</p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0,255,200,0.3)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/signup')}
            className="px-10 py-4 bg-cyan-500 text-black font-black text-lg rounded hover:bg-cyan-400 transition-all"
          >
            Create Account →
          </motion.button>
        </motion.div>
      </section>

      <footer className="py-8 border-t border-cyan-900/20 text-center text-gray-600 text-xs tracking-widest">
        UWU_LANG © 2025 — AI-Powered Esolang
      </footer>
    </div>
  );
};

export default Landing;