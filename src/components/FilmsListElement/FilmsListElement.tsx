import React from 'react';
import { Film } from '../../model/film';
import styles from './FilmsListElement.module.scss';

export interface FilmsListElementProps {
  film: Film;
}

export function FilmsListElement({ film }: FilmsListElementProps): JSX.Element {
  return (
    <div
      className={styles.filmElementWrapper}
      style={{
        backgroundImage: `url(${film.Poster})`,
        backgroundSize: 'cover',
      }}
    >
      <div className={styles.overlay}>
        <header>
          <h3>{film.Title}</h3>
          <span>{film.Year}</span>
        </header>
      </div>
      {/* <img src={film.Poster} alt="" /> */}
    </div>
  );
}
