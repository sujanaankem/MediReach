import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const demoUser = {
  email: 'admin@medireach.com',
  password: 'admin123',
};

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(demoUser.email);
  const [password, setPassword] = useState(demoUser.password);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.trim() === demoUser.email && password === demoUser.password) {
      localStorage.setItem('medireach-user', JSON.stringify({ email, rememberMe }));
      setError('');
      navigate('/dashboard');
      return;
    }

    setError('Invalid email or password. Please use admin@medireach.com / admin123.');
  };

  return (
    <div className="login-page">
      <div className="login-panel">
        <div className="login-brand">
          <div className="login-logo">M</div>
          <div>
            <p className="login-kicker">Diagnostic Marketing & Lead Management System</p>
            <h1>MediReach</h1>
          </div>
        </div>

        <div className="brand-tagline">
          <span>Connect</span>
          <span>•</span>
          <span>Visit</span>
          <span>•</span>
          <span>Grow</span>
        </div>
      </div>

      <div className="login-card">
        <div className="login-copy">
          <p className="eyebrow">Welcome back</p>
          <h2>Sign in to your workspace</h2>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email / Username</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="admin@medireach.com"
            autoComplete="email"
          />

          <label htmlFor="password">Password</label>
          <div className="password-field">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter password"
              autoComplete="current-password"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword((value) => !value)}
              aria-label="Toggle password visibility"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <div className="login-meta">
            <label className="remember-row">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.target.checked)}
              />
              Remember me
            </label>
            <a href="/login">Forgot password?</a>
          </div>

          {error && <div className="login-error">{error}</div>}

          <button className="login-button" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
