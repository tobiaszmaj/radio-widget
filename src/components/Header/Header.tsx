import React from 'react';
import styles from './Header.module.scss';

const backArrow = window.location.origin + "/back-arrow.png";
const switchOn = window.location.origin + "/switch.png";

export const Header: React.FC = () => {
    return (
        <div className={styles.HeaderSection}>
            <img className={styles.BackArrow} src={backArrow} alt="left arrow" />
            <h1 className={styles.Title}>stations</h1>
            <img className={styles.Switch} src={switchOn} alt="close button" />
        </div>
    )
}
