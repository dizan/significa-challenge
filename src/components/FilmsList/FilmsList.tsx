import React from 'react';
import { Film } from '../../model/film';
import { FilmsListElement } from '../FilmsListElement/FilmsListElement';
import styles from './FilmsList.module.scss';

export interface FilmsListProps {
  films: Film[];
}

export function FilmsList({ films }: FilmsListProps): JSX.Element {
  return (
    <section id={styles.filmsListWrapper}>
      {
        films.map((film) => <FilmsListElement key={film.imdbID} film={film} />)
      }
    </section>
  );
}
