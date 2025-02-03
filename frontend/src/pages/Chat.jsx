import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Chat = () => {
  const [prompt, setPrompt] = useState('');
  const [uwuCode, setUwuCode] = useState('');
  const [fetchData, setFetchData] = useState([]);
  const navigate = useNavigate();

  // Fetch chat history when the component mounts
  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/post/getpost`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFetchData(response.data);
      } catch (error) {
        console.error('Error fetching chat history:', error);
      }
    };

    fetchChatHistory();
  }, []);

  // Update handleGenerate function
  const handleGenerate = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/post/generate`, 
        { userPrompt: prompt },
        { headers: {
          Authorization: `Bearer ${token}`,
        }}
      );

      if (response) {
        setFetchData(prevData => [...prevData, response.data]); // Add new response to chat history
        setPrompt('');
      }

      setUwuCode(response.data.uwuCode);

      // Handle code extraction from markers
      const codeBlock = response.data.content
        .split('=== Begin UwU Code ===')[1]
        ?.split('=== End UwU Code ===')[0]
        ?.trim();

      setUwuCode(codeBlock || response.data.uwuCode);
      
    } catch (error) {
      if (error.response?.status === 401) {
        alert('Failed to generate code');
      }
      console.error('Generation error:', error);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  const handleLogout = async()=>{
    const token = localStorage.getItem("token"); 
  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/user/logout`,{},{headers: {
    Authorization: `Bearer ${token}`,
  },})
  if(response){
    localStorage.removeItem("token");
    navigate("/");
  }
  }

  return (
    <div className="generator-container">
      <button 
        onClick={handleLogout} 
        className="absolute top-4 right-4 bg-[#ffea2c] text-black px-4 py-2 rounded-2xl text-sm hover:bg-[#f4c237]"
      >
        Logout<i className="fa-solid fa-right-from-bracket ml-2"></i>
      </button>

      {/* {uwuCode && (
        <SyntaxHighlighter language="python" style={atomOneDark}>
          {uwuCode.split('=== Begin UwU Code ===')[1]?.split('=== End UwU Code ===')[0] || uwuCode}
        </SyntaxHighlighter>
      )} */}

      
<div className="chat-history mt-[80px] text-black ">
        {fetchData.map((item, index) => (
          <div key={index} className="chat-item mb-4 p-4 border border-gray-300 bg-slate-100/35 rounded border-2">
            <h3 className="font-bold text-xl">Input:</h3>
            <p className='italic text-xl'>{item.input}</p>
            <h3 className="font-bold text-xl">Content:</h3>
            <div className="relative">
              <button 
                onClick={() => copyToClipboard(item.content)} 
                className="absolute top-2 right-2 z-10 bg-gray-400/50 text-white p-3 rounded"
              >
                <i className="fa-regular fa-copy"></i>
              </button>
              <SyntaxHighlighter language="python" style={atomOneDark}>
                {item.content}
              </SyntaxHighlighter>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here..."
      />
      
      <button onClick={handleGenerate}>
        Generate Code
      </button>
    </div>
  );
};

export default Chat;