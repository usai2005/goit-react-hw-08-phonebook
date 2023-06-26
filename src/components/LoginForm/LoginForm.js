import { useState } from 'react';
import {
  // useSelector,
  useDispatch,
} from 'react-redux';
import authOperations from '../../redux/auth/authOperations';
// import { selectContacts } from '../../redux/selectors';
// import { addContact } from '../../redux/operations';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //   const contacts = useSelector(selectContacts);
  //   const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
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
    // if (contacts.find(contact => contact.name === name)) {
    //   onNameExists();
    // } else {
    dispatch(authOperations({ email, password }));

    stateReset();
    // }
  };

  //   const onNameExists = () => {
  //     alert(`${name} is already in contacts list`);

  //     setName(name);
  //     setPhone(phone);
  //   };

  const stateReset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
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
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
