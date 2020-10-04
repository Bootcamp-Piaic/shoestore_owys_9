import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
export const ShoppingCart = () => {
    const classes = useStyles();
    return (
        <div className={classes.root} style={{paddingLeft:'1%',paddingTop:'1%',paddingRight:'1%' ,paddingBottom:'1%'}}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
                <h1>Welcome to Shopping Cart</h1>
            </Paper>
          </Grid>
          
        </Grid>
      </div>
    )
}
