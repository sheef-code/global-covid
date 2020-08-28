import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import cardStyles from "./Cards.module.css";

const Info = ({ data: { cases, recovered, deaths } }) => {
  if (!cases) {
    return "Loading...";
  }
  return (
    <div className={cardStyles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(cardStyles.card, cardStyles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={1000000} end={cases} duration={1} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {`${Date()}`.slice(4, 15)}
            </Typography>
            <Typography variant="body2" component="p">
              Number of active cases of COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(cardStyles.card, cardStyles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={1000000}
                end={recovered}
                duration={1}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {`${Date()}`.slice(4, 15)}
            </Typography>
            <Typography variant="body2" component="p">
              Number of recoveries from COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(cardStyles.card, cardStyles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={100000} end={deaths} duration={1} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {`${Date()}`.slice(4, 15)}
            </Typography>
            <Typography variant="body2" component="p">
              Number of deaths caused by COVID-19.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Info;
