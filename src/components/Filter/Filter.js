import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/contacts/selectors';
import { filterChanged } from '../../redux/contacts/filterSlice';

import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filterChangeHandler = e => {
    const filterValue = e.currentTarget.value;
    dispatch(filterChanged(filterValue));
  };

  return (
    <div className={css.filter}>
      <label className={css.filter__label} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        type="text"
        id="filter"
        value={filter}
        onChange={filterChangeHandler}
      />
    </div>
  );
};

export default Filter;
