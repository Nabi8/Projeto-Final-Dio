import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';
import useStyles from './HeaderStyles.js';


const Header = () => {

    const classes = useStyles()

    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12} className={classes.header}>
            <Typography variant='h3' className={classes.logo}>
                Dio Shopping
            </Typography>
            <div>
                <Link to="/" className={classes.link}>
                    <Button color="primary" className={classes.button}>Home</Button>
                </Link>
                <Link to="/contato" className={classes.link}>
                    <Button color="primary" className={classes.button}>Contato</Button>
                </Link>
            </div>
            <Cart />   
        </Grid>
    )
}

export default Header;
