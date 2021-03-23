import React, { useEffect, useState } from 'react';
import { SearchField } from '../../components/SearchField';
import styles from './SearchPage.module.scss';
import { api } from '../../utils/api';
import { useDebounce } from '../../utils/hooks/debounce';
import { EmptyListPlaceholder } from '../../components/EmptyListPlaceholder/EmptyListPlaceholder';
import { FilmsList } from '../../components/FilmsList/FilmsList';

export function SearchPage() {
  const [search, setSearch] = useState('');
  const [films, setFilms] = useState([]);
  const debounceRequest = useDebounce(2000);

  useEffect(() => {
    console.log(films);
  }, [films]);

  const handleSearch = (value: string) => {
    setSearch(value);
    debounceRequest(() => api.search(value.trim(), 1).then((result) => {
      setFilms(result.Search);
    }));
  };

  return (
    <section id={styles['page-wrapper']}>
      <SearchField
        className={styles.searchField}
        onEntered={handleSearch}
        value={search}
        placeholder="Search movies..."
      />
      {
        films.length === 0 ? <EmptyListPlaceholder /> : <FilmsList films={films} />
      }
    </section>
  );
}
