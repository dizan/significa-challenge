import React from 'react';
import styles from './BlueText.module.scss';

export function BlueText({ children }: {children:any}) {
    return (
        <p className={styles.blueText}>{children}</p>
    );
}

