import React from 'react';
import styles from './loader.module.css';

function Loader() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.loader} />
        </div>
    );
}

export default Loader;
