import React, { useContext } from 'react'
import {  useNavigate } from 'react-router-dom'
import MyContext from '../Context/MyContext';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
export const ProductIndex = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const shoes = useContext(MyContext);

    return (

        <div>
            <div className={classes.root}>
                <Grid container spacing={3} style={{ paddingLeft: '1%', paddingTop: '1%', paddingRight: '1%', paddingBottom: '1%' }}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <img src={'https://www.allenedmonds.com/on/demandware.static/-/Library-Sites-allen-edmonds-redesign/default/dw0b17fdb4/redesign/new-fall/desktop-slide-2.jpg'} alt={"Pic not Found on Link"}></img>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper} style={{background:'pink'}}>
                            <h1 style={{background:'pink',color:'black'}}>Shoes Products are Below </h1>
                        </Paper>
                    </Grid>
                    <Grid container spacing={3} style={{ paddingLeft: '1%', paddingTop: '1%', paddingRight: '1%', paddingBottom: '1%' }}>
                        {Object.entries(shoes).map(([product_NAME, { name, image }]) => (
                            <Grid item xs={3}>
                                <Paper key={product_NAME} className={classes.paper}>
                                    <img src={image} alt={name}></img>
                                    <h1>{name}</h1>
                                    <Button variant="contained" color="secondary" onClick={() => {
                                        navigate(product_NAME)
                                    }}>
                                        Buy Now
                                    </Button>
                                </Paper>
                            </Grid>
                        )
                        )}
                    </Grid>

                </Grid>
            </div>

        </div>
    )
}
