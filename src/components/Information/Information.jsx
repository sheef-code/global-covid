import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import containerStyle from "./Information.module.css";
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3, background: "#FFF" }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={containerStyle.container}>
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs
              value={this.state.value}
              indicatorColor="primary"
              onChange={this.handleChange}
            >
              <Tab label="Overview" />
              <Tab label="Symptoms" />
              <Tab label="Prevention" />
              <Tab label="Treatment" />
            </Tabs>
          </AppBar>
          {value === 0 && (
            <TabContainer>
              Coronavirus disease (COVID-19) is an infectious disease caused by
              a newly discovered coronavirus. Most people who fall sick with
              COVID-19 will experience mild to moderate symptoms and recover
              without special treatment.
            </TabContainer>
          )}
          {value === 1 && (
            <TabContainer>
              COVID-19 affects different people in different ways. Most infected
              people will develop mild to moderate symptoms.
              <br></br>
              <hr></hr>
              <br></br>
              Common symptoms:<br></br>
              <li>fever</li>
              <li>tiredness</li>
              <li>dry cough</li>
              <br></br>
              Some people may experience:
              <li>aches and pains</li>
              <li>nasal congestion</li>
              <li>runny nose</li>
              <li>sore throat</li>
              <li>diarrhoea</li>
            </TabContainer>
          )}
          {value === 2 && (
            <TabContainer>
              Top COVID-19 Prevention Tips.
              <br></br>
              <hr></hr>
              <br></br>
              <li>
                <b>STAY</b> home as much as you can
              </li>
              <li>
                <b>KEEP</b> a safe distance
              </li>
              <li>
                <b>WASH</b> hands often
              </li>
              <li>
                <b>COVER</b> your cough
              </li>
              <li>
                <b>SICK?</b> Call ahead
              </li>
            </TabContainer>
          )}
          {value === 3 && (
            <TabContainer>
              To date, there are no specific vaccines or medicines for COVID-19.
              Treatments are under investigation, and will be tested through
              clinical trials. <br></br>
              <hr></hr>
              <br></br> Medical treatments If you have mild symptoms and are
              otherwise healthy, self-isolate and contact your medical provider
              or a COVID-19 information line for advice. Seek medical care if
              you have a fever, a cough, and difficulty breathing. Call in
              advance.
            </TabContainer>
          )}
        </div>
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
