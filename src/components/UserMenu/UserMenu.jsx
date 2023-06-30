import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from '../../redux/selectors';
import authOperations from '../../redux/auth/authOperations';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  if (!name) {
    return null;
  }

  return (
    <div className={css.userMenu}>
      <p className={css.userGreeting}>
        Welcome&nbsp;
        <span className={css.userName}>{name}</span>
      </p>
      <button
        className={css.logOutBtn}
        type="button"
        onClick={() => {
          dispatch(authOperations.logOut());
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
