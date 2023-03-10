import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import { BsSearch } from 'react-icons/bs';
import { FilterName, FilterStyle, FilterWrap } from './Filter.styled';
import { change } from '../../redux/filter/filterSlice';

export const Filter = () => {
  const nameInputIdThird = shortid.generate();
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(change(e.target.value));
  };

  return (
    <FilterWrap>
      <FilterStyle htmlFor={nameInputIdThird}>
        <BsSearch size={18} style={{ marginRight: '5px', marginLeft: '1px' }} /> Find contacts by name
      </FilterStyle>
      <FilterName id={nameInputIdThird} type="text" value={filter} onChange={changeFilter} />
    </FilterWrap>
  );
};