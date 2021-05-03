import { useState } from 'react';
import { signUp } from '../../utilities/users-service';

export default function SignUpForm({ setUser }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: '',

  })

  function handleChange(evt) {
    const newFormData = {...formData, [evt.target.name]: evt.target.value,  error: '' }
    setFormData(newFormData);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const newFormData = {...formData};
      delete newFormData.error;
      delete newFormData.confirm;
      const user = await signUp(newFormData);
      // console.log(user);
      setUser(user);
      
    } catch {
      setFormData({error: 'Sign Up Failed - Try Again'})
    }
  }

  const disable = formData.password !== formData.confirm;

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          <label>Confirm</label>
          <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
          <button type="submit" disabled={disable}>SIGN UP</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{formData.error}</p>
    </div>
    );
  }