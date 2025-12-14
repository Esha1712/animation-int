import { useState } from "react";
import styles from './ElevateAnimation.module.css';

const ElevateAnimation = () => {
    const [key, setKey] = useState(0);

    const retriggerAnimation = () => {
        setKey(prevKey => prevKey + 1);
    };

    return (
        <div className={styles.animationContainer}>
            <div key={key} className={styles.shapeWrapper}>
                <div className={styles.star}></div>
                <div className={styles.funnel}></div>
                <h1 className={styles.elevateText}>E L E V A T E</h1>
            </div>
            <button
                onClick={retriggerAnimation}
                style={{
                    marginTop: '50px',
                    padding: '10px 20px',
                    backgroundColor: 'white',
                    border: 'none',
                    cursor: 'pointer'
                }}
            >
                Re-trigger Animation
            </button>
        </div>
    )
}

export default ElevateAnimation
