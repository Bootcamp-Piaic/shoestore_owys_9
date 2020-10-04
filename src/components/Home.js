import React from 'react';
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
export const Home = () => {
    const classes = useStyles();

    return (
      <div className={classes.root} style={{paddingLeft:'1%',paddingTop:'1%',paddingRight:'1%' ,paddingBottom:'1%'}}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
           
            <img src={"https://www.allenedmonds.com/on/demandware.static/-/Library-Sites-allen-edmonds-redesign/default/dw76b16947/redesign/new-fall/desktop-slide-1.jpg"} alt={'Not found On Address URL'}style={{flex:1}}></img>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
                <img src={'https://www.allenedmonds.com/on/demandware.static/-/Library-Sites-allen-edmonds-redesign/default/dw266a5b02/redesign/new-fall/desktop-row-2-story-1.jpg'} alt={'Not found On Address URL'}style={{flex:1}}></img>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
                <img src={'https://www.allenedmonds.com/on/demandware.static/-/Library-Sites-allen-edmonds-redesign/default/dw911d9353/redesign/new-fall/desktop-row-2-story-2.jpg'} alt={'Not found On Address URL'}style={{flex:1}}></img>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
                <img src={'https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dw2c09f700/images/2.1/mens-shoes/Coat_1018375_Schott_CafeRacer_Tan_Front_web.jpg?sw=736&sh=736&sm=fit'} alt={'Not found On Address URL'}style={{flex:1}}></img>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
                <img src={'https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dwad708344/images/2.1/accessories/sweaters/Sweaters_1017934_Fase2_CottonKnitBlazer_Indigo_Front_web.jpg?sw=736&sh=736&sm=fit'} alt={'Not found On Address URL'}style={{flex:1}}></img>
            </Paper>
          </Grid>
          
          <Grid item xs={12}>
            <Paper className={classes.paper}>
                <img src={'https://www.allenedmonds.com/on/demandware.static/-/Library-Sites-allen-edmonds-redesign/default/dw4da21791/redesign/new-fall/desktop-slide-3.jpg'} alt={'Not found On Address URL'}style={{flex:1}}></img>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
}
