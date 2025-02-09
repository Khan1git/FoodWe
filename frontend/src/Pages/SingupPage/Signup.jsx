import { useState } from "react";
import "./Signup.css"; // Import the CSS file
import { Link, useNavigate } from "react-router-dom";



const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    code: ""
  });

  const naviage = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/user/sign-up", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }

      naviage('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Join the Pizza Club 🍕</h2>
        <p>Sign up and get exclusive pizza deals!</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
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
          </div>
          <div className="input-group">
            <label>Admin Code</label>
            <input
              type="code"
              name="code"
              placeholder="Enter your code"
              value={formData.code}
              onChange={handleChange}
              required
            />
          </div>
          <p>
            <Link to={"/login"}>Already have an account</Link>
          </p>

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
