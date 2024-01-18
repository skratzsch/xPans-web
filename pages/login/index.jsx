import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './LoginPage.module.css';
import Logo from '../../components/logo/Logo';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Einloggen mit:', username, password);
    router.push('/main');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <Logo />
        <div>
          <label htmlFor="username">Benutzername:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Passwort:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">xPans!</button>
        <div className="navigation-links">
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
