import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const userData = { password, email };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/user/login`, userData);
      if (response.status === 200) {
        const data = response.data;
        localStorage.setItem('token', data.token);
        navigate('/chat');
      }
    } catch (err) {
      setError('Invalid credentials. Please try again.');
      console.error('Login failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050508] font-mono flex items-center justify-center px-4 relative overflow-hidden">
      {/* Grid bg */}
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(0,255,200,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,200,0.03) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Glow blobs */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-4xl grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-cyan-900/40 shadow-2xl shadow-cyan-900/20">
        {/* Left panel */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden md:flex flex-col justify-center p-12 bg-[#0a0a10] border-r border-cyan-900/30"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-2xl font-black text-cyan-400 tracking-widest mb-8">UWU_LANG</div>
            <h2 className="text-3xl font-black text-white mb-4 leading-tight">
              Welcome<br />back,<br /><span className="text-cyan-400">coder.</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Your esolang generations are waiting. Sign in to continue crafting chaos.
            </p>

            {/* Terminal decoration */}
            <div className="mt-10 p-4 rounded-lg border border-cyan-900/40 bg-[#050508]">
              <div className="flex gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                <div className="w-2 h-2 rounded-full bg-green-500/60" />
              </div>
              <p className="text-xs text-gray-600">$ uwu_auth --login</p>
              <p className="text-xs text-cyan-500 mt-1">{'>'} Authenticating user...</p>
              <motion.p
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="text-xs text-emerald-400 mt-1"
              >▊</motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right panel - form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center p-10 bg-[#07070d]"
        >
          <div className="mb-8">
            <div className="text-xl font-black text-cyan-400 tracking-widest mb-1 md:hidden">UWU_LANG</div>
            <h3 className="text-2xl font-black text-white">Sign In</h3>
            <p className="text-gray-500 text-sm mt-1">
              No account?{' '}
              <Link to="/signup" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Sign Up →
              </Link>
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="text-xs text-gray-500 tracking-widest uppercase block mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#0a0a10] border border-cyan-900/40 text-white text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors placeholder-gray-700"
              />
            </div>

            <div>
              <label className="text-xs text-gray-500 tracking-widest uppercase block mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#0a0a10] border border-cyan-900/40 text-white text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors placeholder-gray-700 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-cyan-400 transition-colors"
                  style={{ background: 'none', padding: '4px', fontSize: '14px' }}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              <div className="text-right mt-2">
                <a href="#" className="text-xs text-cyan-700 hover:text-cyan-400 transition-colors">Forgot password?</a>
              </div>
            </div>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-red-400 text-xs p-3 rounded border border-red-900/40 bg-red-900/10"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(0,255,200,0.2)' }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-cyan-500 text-black font-black py-3 rounded-lg text-sm tracking-wider hover:bg-cyan-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>⚙</motion.span>
                  Authenticating...
                </span>
              ) : (
                'SIGN IN →'
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SignIn;