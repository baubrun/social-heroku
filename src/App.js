import React, {useEffect, useState} from "react";
import "./App.css"
import {useDispatch} from "react-redux"

import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./mui-config";

import {
    getPosts,
} from "./redux/actions/posts"

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import AppBar from "@material-ui/core/AppBar";
import useStyles from "./AppStyles"
import socialIcon from "./images/images-events.png";

import Posts from "./components/posts/Posts";
import Form from "./components/form/Form";

const App = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(0)

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])


  return (
    <ThemeProvider theme={theme}>

    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography color="primary" variant="h2" align="center">
          Social Wall
        </Typography>
        <img className={classes.img} src={socialIcon} alt="events" height="60" />
      </AppBar>
      <Grow in>
        <Container >
          <Grid className={classes.postsContainer} container justify="space-between" spacing={3}>
            <Grid item sm={7} xs={12}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
      <Grid></Grid>
    </Container>
    </ThemeProvider>
  );
};

export default App;
