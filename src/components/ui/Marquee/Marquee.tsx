import * as React from "react";
import styles from './marquee.module.css'

function Marquee({children}: {children: React.ReactNode}) {
    return <div className={styles.marqueeContainer}>
        <div className={styles.marqueeContent}>
            {children}
            {children}
        </div>
    </div>
}

export default Marquee;