import React from 'react';
import styles from './SearchField.module.scss';
import iconSearch from '../../assets/images/icon-search.svg';

export interface SearchFieldProps {
  value: string;
  placeholder: string;
  className: string;
  onEntered(search: string): void;
}

export function SearchField({ value, onEntered, placeholder, className}: SearchFieldProps): JSX.Element {

  const handleChange = (enteredValue: string) => {
    onEntered(enteredValue);
  };

  return (
    <section className={className} id={styles.wrapper}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(event) => handleChange(event.target.value)}
      />
      <img id={styles['search-icon']} src={iconSearch} alt="" />
    </section>
  );
}
