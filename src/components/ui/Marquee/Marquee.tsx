import * as React from "react";
import styles from './marquee.module.css'

interface IProps {
    direction?: 'left' | 'right';
    children: React.ReactNode
}

function Marquee({children, direction = 'left'}: IProps) {
    return (
        <div className={styles.marqueeContainer}>
            <div 
                className={`${styles.marqueeContent} 
                            ${direction === 'left' ? styles.marqueeLeft : styles.marqueeRight}`}
            >
                {Array.from({length: 5}).map(() => children)}
            </div>
        </div>
    );
}

export default Marquee;
