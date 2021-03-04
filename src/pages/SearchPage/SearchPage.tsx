import React, { useRef, useState } from 'react';
import { BlueText } from '../../components/BlueText/BlueText';
import { SearchField } from '../../components/SearchField';
import { api } from '../../utils/api';
import { useDebounce } from '../../utils/hooks/debounce';

export function SearchPage() {
  const [search, setSearch] = useState('');
  const [films, setFilms] = useState([]);
  const debounceRequest = useDebounce(1000);

  const handleSearch = (value: string) => {
    setSearch(value);
    debounceRequest(() => api.search(value, 1).then((result) => {
      setFilms(result);
    }));
  };

  return (
    <>
      <SearchField onEntered={handleSearch} value={search} placeholder="Search movies..." />
      I`m a search page
      <BlueText>I`m blue text</BlueText>
    </>
  );
}
