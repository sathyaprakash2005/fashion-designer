import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // for navigation
import { useNavigate } from 'react-router-dom';
import './Admin.css'; // Import CSS file

const Admin = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
      alert("✅ Login successful!");
       navigate('/combine'); // Navigate or show dashboard
    } else {
      alert(`❌ ${data.error}`);
    }
  } catch (err) {
    console.error("❌ Fetch error:", err.message);
    alert("❌ Failed to connect to server");
  }
};


  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
        <p className="register-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Admin;
