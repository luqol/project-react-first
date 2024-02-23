import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button'
import styles from './SearchForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchPhrase } from '../../redux/store';

const SearchForm = () => {
  const [searchedPhrase, setSearchedPhrase] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch( updateSearchPhrase(searchedPhrase));
  };

  return(
    <form className={styles.searchForm} onSubmit={handleSubmit}>
        <TextInput placeholder="Search…" value={searchedPhrase} onChange={ e=> setSearchedPhrase(e.target.value)} />
        <Button>
        <span className="fa fa-search" />
        </Button>
      </form>
  );
};

export default SearchForm;