


import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, signinWithGoogle } = UserAuth();

  const handleLogin = async () => {
    try {
      await signinWithGoogle();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (currentUser) {
      navigate("/chat");
    }
  }, [currentUser]);

  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://media.istockphoto.com/id/1371705013/photo/3d-illustration-of-smart-farming-concept-tractor-on-a-smartphone-farm-online-management-ads.jpg?b=1&s=612x612&w=0&k=20&c=iQR1jbNXvAFSc8_hFAUO1p2pPoso0Hq_3cPU5NGGXWo=)'}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to AgriChat 👋🏻</h1>
          <p className="mb-5">Join the conversation, meet new people, and make connections in one shared room.</p>
          <button onClick={handleLogin} className="btn">Login With Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
