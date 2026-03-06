import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Chat = () => {
  const [prompt, setPrompt] = useState('');
  const [fetchData, setFetchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(null);
  const navigate = useNavigate();
  const bottomRef = useRef(null);

  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/post/getpost`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setFetchData(response.data);
      } catch (error) {
        console.error('Error fetching chat history:', error);
      }
    };
    fetchChatHistory();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [fetchData]);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/post/generate`,
        { userPrompt: prompt },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response) {
        setFetchData((prev) => [...prev, response.data]);
        setPrompt('');
      }
    } catch (error) {
      if (error.response?.status === 401) alert('Failed to generate code');
      console.error('Generation error:', error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleLogout = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/user/logout`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (response) {
      localStorage.removeItem('token');
      navigate('/');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      handleGenerate();
    }
  };

  return (
    <div className="min-h-screen bg-[#050508] font-mono text-white flex flex-col">
      {/* Grid background */}
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(0,255,200,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,200,0.02) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Navbar */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-cyan-900/30 bg-[#050508]/90 backdrop-blur-md"
      >
        <div className="flex items-center gap-3">
          <span className="text-xl font-black text-cyan-400 tracking-widest">UWU<span className="text-white">_LANG</span></span>
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-900/40 bg-cyan-900/10 text-cyan-500 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Session Active
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 border border-red-900/40 text-red-400 text-xs rounded hover:bg-red-900/10 hover:border-red-500/50 transition-all"
        >
          Logout <span>⏻</span>
        </motion.button>
      </motion.header>

      {/* Chat area */}
      <main className="flex-1 overflow-y-auto pt-24 pb-52 px-4 max-w-3xl mx-auto w-full">
        {fetchData.length === 0 && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center min-h-[50vh] text-center"
          >
            <div className="text-5xl mb-4">🌸</div>
            <h2 className="text-xl font-black text-white mb-2">No generations yet</h2>
            <p className="text-gray-600 text-sm">Type a prompt below and hit Generate to start.</p>
          </motion.div>
        )}

        <AnimatePresence>
          {fetchData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              {/* User prompt */}
              <div className="flex justify-end mb-2">
                <div className="bg-cyan-500/10 border border-cyan-900/50 text-cyan-300 px-4 py-2.5 rounded-xl rounded-tr-sm max-w-md text-sm">
                  {item.input}
                </div>
              </div>

              {/* AI response */}
              <div className="bg-[#0a0a10] border border-cyan-900/30 rounded-xl rounded-tl-sm overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-cyan-900/30 bg-[#0d0d15]">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-2 h-2 rounded-full bg-cyan-500" />
                    uwu_generator.py
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => copyToClipboard(item.content, index)}
                    className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-cyan-400 transition-colors px-2 py-1 rounded border border-transparent hover:border-cyan-900/40"
                    style={{ background: 'none' }}
                  >
                    {copied === index ? (
                      <><span>✓</span> Copied!</>
                    ) : (
                      <><span>⧉</span> Copy</>
                    )}
                  </motion.button>
                </div>
                <SyntaxHighlighter
                  language="python"
                  style={atomOneDark}
                  customStyle={{ margin: 0, background: 'transparent', fontSize: '13px', padding: '16px' }}
                >
                  {item.content}
                </SyntaxHighlighter>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Loading indicator */}
        <AnimatePresence>
          {loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex gap-2 items-center text-cyan-500 text-sm px-4 py-3 bg-cyan-900/10 border border-cyan-900/30 rounded-xl"
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="text-lg"
              >⚙</motion.span>
              Generating UwU code...
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={bottomRef} />
      </main>

      {/* Input bar */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-6 pt-4 bg-gradient-to-t from-[#050508] via-[#050508] to-transparent"
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex items-end gap-3 bg-[#0a0a10] border border-cyan-900/50 rounded-2xl p-3 focus-within:border-cyan-700/60 transition-colors shadow-2xl shadow-cyan-900/20">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Describe what code you want to UwU-ify... (Ctrl+Enter to send)"
              rows={2}
              className="flex-1 bg-transparent text-white text-sm resize-none focus:outline-none placeholder-gray-700 leading-relaxed"
              style={{ border: 'none', padding: '4px 8px' }}
            />
            <motion.button
              onClick={handleGenerate}
              disabled={loading || !prompt.trim()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 bg-cyan-500 text-black font-black text-sm px-5 py-2.5 rounded-xl hover:bg-cyan-400 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? '...' : 'Generate →'}
            </motion.button>
          </div>
          <p className="text-center text-gray-700 text-xs mt-2">Ctrl+Enter to send</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Chat;