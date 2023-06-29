import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from '../../redux/selectors';
import authOperations from '../../redux/auth/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  console.log(userName);
  return (
    <div>
      <p>Welcome {userName}</p>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
