import { useState } from "react";
import "./Login.css"; // Import the CSS file
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: formData.email, password: formData.password })
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Invalid email or password!");
      }
  
      alert("Login successful!");
  
      if (data.token) {
        localStorage.setItem("authToken", data.token);
      }
  
     navigate('/')
  
    } catch (error) {
      console.error("Login Error:", error);
      alert(error.message);
    }
  };
  

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back 🍕</h2>
        <p>Login to access your pizza orders!</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <p>
            <Link to={'/signup'}>Don't have an account</Link>
            </p>
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
