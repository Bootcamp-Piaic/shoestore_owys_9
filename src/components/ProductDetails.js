import React, { useContext, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import MyContext from '../Context/MyContext'
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

export const ProductDetails = () => {

    var [quantity, setquantity] = useState(0)
    const navigate = useNavigate();

    const classes = useStyles();

    const shoes = useContext(MyContext);

    const { productID } = useParams();

    const { name, image } = shoes[productID]

    return (
        <div className={classes.root}>
            <Grid container spacing={3} style={{ paddingLeft: '10%', paddingTop: '5%', paddingRight: '10%', paddingBottom: '1%' }}>
                <Grid item xs={12}>
                    <Paper className={classes.paper} style={{ background: 'pink' }}>
                        <h1 style={{ background: 'pink', color: 'black' }}>Your Selected Product Below </h1>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <img src={image} alt={name}></img>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <h1>Product Name : {name}</h1>
                        <h1>Quantity      : {'     '}<Button style={{ backgroundColor: 'gray', color: 'white' }} onClick={() => {
                            setquantity(++quantity)
                        }}>+</Button> {quantity} <Button style={{ backgroundColor: 'gray', color: 'white' }} onClick={() => {
                            if (quantity > 0) {
                                setquantity(--quantity)
                            }
                        }}>-</Button></h1>
                        <Button variant="contained" color="secondary" onClick={() => {
                            if (quantity > 0) {
                                navigate('/ShoppingCart')
                            }
                        }} >
                            Add to Cart
                     </Button>
                    </Paper>
                </Grid>

            </Grid>
        </div>
    )
}
