import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    cardBackground: {
        backgroundColor: '#FFFFFF',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxHeight: '425px',
        width: '360px',
        margin: '1rem',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        cursor: 'pointer',
    },
    cardImage: {
        width: '100%',
        objectFit: 'cover',
        display: 'block',
        height: '85%',
        padding: '5px',
    },
    cardInfo: {
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        height: '40%',
        boxSizing: 'border-box',
    },
    priceDetails: {
        fontWeight: 600,
        fontSize: '15px',
        fontFamily: 'Inter',
        color: '#000000',
    },
})

const Cards = ({ dressData }) => {
    const { img, price, dressCode, id } = dressData;
    const classes = useStyles();
    return (
        <div className={classes.cardBackground} onClick={() => window.location.href = `/dress/${id}`}>
            <img src={img} alt="Card Image" className={classes.cardImage} />
            <div className={classes.cardInfo}>
                <div className={classes.priceDetails}>Price: ₹{price}</div>
                <div className={classes.priceDetails}>Dress Code: {dressCode}</div>
            </div>
        </div>
    )
}

export default Cards;
