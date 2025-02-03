import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const [fname, setFirstName] = useState('');
    const [lname, setLastName] = useState('');
    const [mname, setMName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async() => {
        const userData = {fname,mname,lname,email,password};

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/user/signup`, userData);

        if(response.status == 201){
        navigate('/login');
        }else{
            console.log(response);
        }
    };

    return (
        <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
            <div className="bg-gray-100 text-gray-500  rounded-3xl border-black shadow-xl w-full overflow-hidden" style={{ maxWidth: '1000px' }}>
                <div className="md:flex w-full">
                    <div className="hidden md:block w-1/2 bg-black py-50 px-10  " 
                > <div className="h-3/4 w-96 mt-16 object-scale-down bg-no-repeat" style={{
                    backgroundImage: "url(https://cdn3d.iconscout.com/3d/premium/thumb/login-page-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--businessman-submit-form-business-pack-people-illustrations-4165667.png?f=webp)",
                  }}>

                </div>
                        </div>
                    <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                        <div className="text-center mb-10">
                            <h1 className="font-bold text-3xl text-gray-900">SignUp</h1>
                            <p>Enter your information to Signup</p>
                        </div>
                        <div>
                            <div className="flex -mx-3">
                                <div className="w-1/2 px-3 mb-5">
                                    <label className="text-xs font-semibold px-1">First name</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                                        </div>
                                        <input
                                            type="text"
                                            className="w-full -ml-10 pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="John"
                                            value={fname}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                
                                <div className="w-1/2 px-3 mb-5">
                                    <label className="text-xs font-semibold px-1">Last name</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                                        </div>
                                        <input
                                            type="text"
                                            className="w-full -ml-10 pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="Smith"
                                            value={lname}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 mb-5">
                                    <label className="text-xs font-semibold px-1">Middle name</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                                        </div>
                                        <input
                                            type="text"
                                            className="w-full -ml-10 pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="Not Mandatory"
                                            value={mname}
                                            onChange={(e) => setMName(e.target.value)}
                                        />
                                    </div>
                                </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <label className="text-xs font-semibold px-1">Email</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                                        </div>
                                        <input
                                            type="email"
                                            className="w-full -ml-10 pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="johnsmith@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-12">
                                    <label className="text-xs font-semibold px-1">Password</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                                        </div>
                                        <input
                                            type="password"
                                            className="w-full -ml-10 pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="************"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <button
                                        onClick={handleRegister}
                                        className="block w-full max-w-xs mx-auto bg-gray-800 hover:bg-black focus:bg-black text-white rounded-lg px-3 py-3 font-semibold"
                                    >
                                        REGISTER NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Buy Me a Beer Button */}
            <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                <div>
                    <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" rel="noopener noreferrer" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                        <img className="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg" alt="Buy me a beer" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Signup;