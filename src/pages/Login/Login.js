import LoginForm from '../../components/LoginForm/LoginForm';
import css from './Login.module.css';

const Login = () => {
  return (
    <div className={css.login__section}>
      <h1 className={css.login__title}>Please Log In</h1>

      <LoginForm />
    </div>
  );
};

export default Login;
