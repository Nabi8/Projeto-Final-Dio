import React from 'react';
import { Paper, Grid, Typography, Button, makeStyles } from '@material-ui/core/';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from './store/actions/cart';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#10212c",
        borderRadius: "15px"
    },
    cardBg: {
        background: "#2295f5",
        height: "184px",
        width: "131%",
        position: "absolute",
        top: "-50px",
        left: "-34px",
        transform: "rotate(-15deg)",
    },
    shirt: {
        transform: "translateZ(10px)",
        alignItems: "center"
    },
    letterColor: {
        color: "white",
        fontSize: "15px"
    },
    letterColorPreco: {
        color: "white"
    },
    button: {
        backgroundColor: "#2295f5",
        width: "fit-content",
        borderRadius: "26px",
        color: "white"
    }
}));

const Card = ({ product, children }) => {
    const cart = useSelector(state => state.cart.value)
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Grid item xs={3} className={classes.card}>
            <Paper className={classes.paper}>
                <div className={classes.cardBg}></div>
                <Grid container direction='column' className={classes.shirt}>
                    <Grid item>
                        <img width="140px" src={product.image} alt={product.name_product} />
                        <Typography variant='h6' className={classes.letterColor}>
                            {children}
                        </Typography>
                        <Typography variant='subtitle1' className={classes.letterColorPreco}>
                            R$ {product.price.toFixed(2)}
                        </Typography>
                    </Grid>

                    <Button
                        variant="contained"
                        onClick={() => dispatch(cartActions.Add(cart, product))}
                        className={classes.button}
                    >
                        Adicionar
                    </Button>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Card;
