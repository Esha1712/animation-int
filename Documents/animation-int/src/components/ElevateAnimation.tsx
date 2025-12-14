import { useState } from "react";
import styles from './ElevateAnimation.module.css';

const ElevateAnimation = () => {
    const [key, setKey] = useState(0);
    return (
        <div className={styles.animationContainer}>
            <div key={key} className={styles.shapeWrapper}>
                <div className={styles.star}></div>
                <div>FUNNEL</div>
                <h1>E L E V A T E</h1>
            </div>
        </div>
    )
}

export default ElevateAnimation
