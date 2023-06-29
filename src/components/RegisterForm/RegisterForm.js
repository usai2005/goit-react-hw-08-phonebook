import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';
import css from './RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'username':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));

    stateReset();
  };

  const stateReset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="form-Username">Username</label>
      <input
        type="text"
        name="username"
        value={name}
        onChange={handleChange}
        id="form-Username"
        required
      />

      <label htmlFor="form-email">Email</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        id="form-email"
        required
      />

      <label htmlFor="form-password">Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        id="form-password"
        required
      />

      <button className={css.form__button} type="submit">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
