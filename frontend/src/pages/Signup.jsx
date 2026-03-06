import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Signup = () => {
  const [fname, setFirstName] = useState('');
  const [lname, setLastName] = useState('');
  const [mname, setMName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    setError('');
    setLoading(true);
    try {
      const userData = { fname, mname, lname, email, password };
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/user/signup`, userData);
      if (response.status === 201) {
        navigate('/login');
      }
    } catch (err) {
      setError('Registration failed. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    { label: 'First Name', placeholder: 'John', value: fname, setter: setFirstName, half: true },
    { label: 'Last Name', placeholder: 'Smith', value: lname, setter: setLastName, half: true },
    { label: 'Middle Name', placeholder: 'Optional', value: mname, setter: setMName, half: false, optional: true },
    { label: 'Email', placeholder: 'you@example.com', value: email, setter: setEmail, type: 'email', half: false },
    { label: 'Password', placeholder: '••••••••••••', value: password, setter: setPassword, type: 'password', half: false },
  ];

  return (
    <div className="min-h-screen bg-[#050508] font-mono flex items-center justify-center px-4 py-10 relative overflow-hidden">
      {/* Grid bg */}
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(0,255,200,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,200,0.025) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-lg"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-black text-cyan-400 tracking-widest mb-2"
          >
            UWU_LANG
          </motion.div>
          <h1 className="text-3xl font-black text-white">Create Account</h1>
          <p className="text-gray-500 text-sm mt-2">
            Already a coder?{' '}
            <Link to="/login" className="text-cyan-400 hover:text-cyan-300 transition-colors">Sign In →</Link>
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl border border-cyan-900/40 bg-[#07070d] p-8 shadow-2xl shadow-cyan-900/10">
          <div className="grid grid-cols-2 gap-4">
            {fields.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
                className={f.half ? 'col-span-1' : 'col-span-2'}
              >
                <label className="text-xs text-gray-500 tracking-widest uppercase block mb-1.5">
                  {f.label}
                  {f.optional && <span className="ml-1 text-gray-700 normal-case">(optional)</span>}
                </label>
                <input
                  type={f.type || 'text'}
                  placeholder={f.placeholder}
                  value={f.value}
                  onChange={(e) => f.setter(e.target.value)}
                  className="w-full bg-[#0a0a10] border border-cyan-900/30 text-white text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors placeholder-gray-700"
                />
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 text-red-400 text-xs p-3 rounded border border-red-900/40 bg-red-900/10"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            onClick={handleRegister}
            disabled={loading}
            whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(0,255,200,0.2)' }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 w-full bg-cyan-500 text-black font-black py-3 rounded-lg text-sm tracking-wider hover:bg-cyan-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>⚙</motion.span>
                Creating account...
              </span>
            ) : (
              'REGISTER NOW →'
            )}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;