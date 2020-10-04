import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Awais from '../Pictures/awais.jpg'
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
export const About = () => {
    const classes = useStyles();
    return (
        <div className={classes.root} style={{paddingLeft:'1%',paddingTop:'1%',paddingRight:'1%' ,paddingBottom:'1%'}}>
      <Grid container spacing={3}>
      <Grid item xs={12}>
            <Paper className={classes.paper}>
                <h1>About :</h1>
                <h2>Developer : Awais Mansha</h2>
                <img width='100%' height='100%' src={Awais} alt={"Owys Pic not Found"}></img>
                
                <h3>All Rights Reserved</h3>
            </Paper>
          </Grid>
      </Grid>
    </div>
    )
}
