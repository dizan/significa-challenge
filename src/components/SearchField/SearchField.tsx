import React from 'react';
import styles from './SearchField.module.scss';
import iconSearch from '../../assets/images/icon-search.svg';

export interface SearchFieldProps {
}

export function SearchField({}: SearchFieldProps): JSX.Element {
    return (
        <div id={styles.wrapper}>
            <img id={styles['search-icon']} src={iconSearch} alt="" />
            <input type="text" placeholder="Search movies..."/>
        </div>
    );
}
