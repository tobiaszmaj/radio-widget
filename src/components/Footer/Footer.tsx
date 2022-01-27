import React from 'react';
import styles from './Footer.module.scss';
import { useSelector } from 'react-redux';

import { TStore } from '../../store';

export const Footer: React.FC = () => {
    let { name } = useSelector((state: TStore) => state.RadioSlice);
    return (
        <div className={styles.FooterSection}>
            <p className={styles.TopTitle}>CURRENTLY PLAYING</p>
            <h3 className={styles.Title}>{name}</h3>
        </div>
    )
}
