import {useState} from 'react';
import SignUpForm from '../../../components/SignUpForm/SignUpForm';
import LoginForm from '../../../components/LoginForm/LoginForm';


export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main>
      <h1>AuthPage</h1>
      {showLogin ?
      <SignUpForm setUser={setUser} />
      :
      <LoginForm setUser={setUser}  />
      }
      <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'sign up' : 'log in'}</button>
    </main>
  );
}