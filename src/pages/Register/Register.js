import RegisterForm from '../../components/RegisterForm/RegisterForm';
import css from './Register.module.css';

const Register = () => {
  return (
    <div className={css.register__section}>
      <h1 className={css.register__title}>Are you new here? Please Register</h1>
      <RegisterForm />
    </div>
  );
};

export default Register;
