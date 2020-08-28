import React from "react";
import { Card, CardContent } from "@material-ui/core";
import { information } from "../../information/information";
import aboutStyles from "./AboutPage.module.css";

const AboutPage = () => {
  let keyValue = 1;
  return (
    <div className={aboutStyles.app}>
      <div className={aboutStyles.header}>
        <h1>ABOUT CORONAVIRUS</h1>
      </div>
      <div className={aboutStyles.content}>
        <Card className={aboutStyles.card1}>
          <CardContent>
            <h1>Overview</h1>
            <p>{information.overview}</p>
          </CardContent>
        </Card>
        <Card className={aboutStyles.card2}>
          <CardContent>
            <h1>Symptoms</h1>
            <p>
              {information.symptoms.map((symptom) => (
                <li key={keyValue++}>{symptom}</li>
              ))}
            </p>
            <span style={{ color: "#000" }}>Seek help if you experience:</span>
            <p>
              {information.emergency.map((problem) => (
                <li key={keyValue++}>{problem}</li>
              ))}
            </p>
          </CardContent>
        </Card>
        <Card className={aboutStyles.card1}>
          <CardContent>
            <h1>Prevention</h1>
            <p>
              {information.prevention.map((help) => (
                <li key={keyValue++}>{help}</li>
              ))}
            </p>
          </CardContent>
        </Card>
        <Card className={aboutStyles.card2}>
          <CardContent>
            <h1>Treatment</h1>
            <p>
              {information.treatment.map((treat) => (
                <li key={keyValue++}>{treat}</li>
              ))}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default AboutPage;
