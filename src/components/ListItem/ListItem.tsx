import React from 'react';
import styles from './ListItem.module.scss';

const plusImg = window.location.origin + "/plus.png";
const minusImg = window.location.origin + "/minus.png";

export interface ListItemsProps {
    title: string,
    activeStation: boolean;
    frequency: number;
    image: string;
    onToggle(): any;
}

export const ListItems: React.FC<ListItemsProps> = ({ title, frequency, image, activeStation, onToggle }) => {
    return (
        <div className={styles.ListSection}>
            <div className={activeStation ? (`${styles.FlipPanel} ${styles.FlipPanelShow}`) : styles.FlipPanel}>
                <img src={minusImg} className={styles.Minus} alt="" />
                <img src={image} className={styles.FmImage} alt="" />
                <img src={plusImg} className={styles.Plus} alt="" />
            </div>
            <div className={styles.StationInfo} onClick={onToggle}>
                <p className={styles.TitleName}>{title}</p>
                <p className={styles.TitleFrequency}>{frequency}</p>
            </div>
        </div>
    )
}