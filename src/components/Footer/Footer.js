import React from "react";
import {Container, Grid} from "@material-ui/core";
import Card from "../Card/Card";


const Footer = props => {

  return (
    <Container style={{position: 'fixed', bottom: 0, left: 0, right: 0}}>
      <Card>
        <Grid container alignItems="center">
          {props.children}
        </Grid>
      </Card>
    </Container>
  );
}

export default Footer;
