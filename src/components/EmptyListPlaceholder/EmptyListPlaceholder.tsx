import React from 'react';
import styles from './EmptyListPlaceholder.module.scss';
import emptyPlaceholder from '../../assets/images/empty-list.svg';

export interface EmptyListPlaceholderProps {

}

export function EmptyListPlaceholder({}: EmptyListPlaceholderProps): JSX.Element {
  return (
    <div id={styles.wrapper}>
      <div>
        <img src={emptyPlaceholder} alt="" />
        <header>
          <h2>
            Don`t know what to search?
          </h2>
        </header>
        <p className={styles.description}>
          Here`s an offer you can`t refuse
        </p>
      </div>
    </div>
  );
}
