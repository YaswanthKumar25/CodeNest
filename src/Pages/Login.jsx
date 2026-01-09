import { useState } from "react";
import "../styles1/Login.css";
function AuthLogin() {
  const [isloggedIn, setIsLoggedIn] = useState(true);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const [submittedData, setSubmittedData] = useState(null);
  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedData(formData);

    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
  }
  return (
    <div className="loginpage">
      <div className="left">
        <div className="titlebox">
          <p className="login-title">
            Code<span>Nest</span>
          </p>
          <p className="login-subtitle">Your Gateway to Coding Excellence</p>
        </div>
      </div>
      <div className="right">
        <div className="loginbox">
          {isloggedIn ? (
            <h2>Welcome Back</h2>
          ) : (
            <h2>Create your Codenest account</h2>
          )}
          <form onSubmit={handleSubmit}>
            {!isloggedIn && (
              <>
                <input
                  type="text"
                  placeholder="First Name"
                  className="input"
                  name="firstname"
                  onChange={handleChange}
                  value={formData.firstname}
                  required
                />
                <input
                  type="text"
                  placeholder="last Name"
                  className="input"
                  name="lastname"
                  onChange={handleChange}
                  value={formData.lastname}
                  required
                />
              </>
            )}
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input"
              onChange={handleChange}
              value={formData.email}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input"
              onChange={handleChange}
              value={formData.password}
              required
            />
            <button type="submit">
              {isloggedIn ? "Login" : "Join CodeNest"}
            </button>
            <p onClick={() => setIsLoggedIn(!isloggedIn)}>
              {isloggedIn
                ? "Don't have an account? Sign Up"
                : "Already have an account? Login"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default AuthLogin;
