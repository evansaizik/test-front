import { useState } from 'react';

const Login = ({requestLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailInput = (e) => {
    setEmail(e.target.value);
  };

  const passwordInput = (e) => {
    setPassword(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    requestLogin({email, password})
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={submitForm}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" value={email} onChange={emailInput} />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={passwordInput}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
