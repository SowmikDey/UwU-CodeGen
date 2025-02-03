import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Chat from './pages/Chat';
import Landing from './pages/Landing';
import SignIn from './pages/SignIn';
import Signup from './pages/Signup';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/login" element={<SignIn />}/>
      <Route path="/signup" element={<Signup/>} />
       
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
