import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login1.css'; // Import CSS file

const Login1 = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/login1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        setSuccessMsg("✅ Login successful!");
        setErrorMsg('');
        setTimeout(() => {
          navigate('/front1');
        }, 1500); // Navigate after 1.5 seconds
      } else {
        setErrorMsg(`❌ ${data.error}`);
        setSuccessMsg('');
      }
    } catch (err) {
      console.error("❌ Fetch error:", err.message);
      setErrorMsg("❌ Failed to connect to server");
      setSuccessMsg('');
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>

        {successMsg && <p className="success-message">{successMsg}</p>}
        {errorMsg && <p className="error-message">{errorMsg}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>

        <p className="register-link">
          Don't have an account? <Link to="/register1">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login1;
