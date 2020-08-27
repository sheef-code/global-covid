import React from "react";
import { Card, CardContent } from "@material-ui/core";
import { information } from "../../information/information";
import styles from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.app}>
      <div className={styles.app__header}>
        <h1>ABOUT CORONAVIRUS</h1>
      </div>
      <div className={styles.content}>
        <Card className={styles.card1}>
          <CardContent>
            <h1>Overview</h1>
            <p>{information.overview}</p>
          </CardContent>
        </Card>
        <Card className={styles.card2}>
          <CardContent>
            <h1>Symptoms</h1>
            <p>
              {information.symptoms.map((symptom) => (
                <li>{symptom}</li>
              ))}
            </p>
            <span style={{ color: "#000" }}>Seek help if you experience:</span>
            <p>
              {information.emergency.map((problem) => (
                <li>{problem}</li>
              ))}
            </p>
          </CardContent>
        </Card>
        <Card className={styles.card1}>
          <CardContent>
            <h1>Prevention</h1>
            <p>
              {information.prevention.map((help) => (
                <li>{help}</li>
              ))}
            </p>
          </CardContent>
        </Card>
        <Card className={styles.card2}>
          <CardContent>
            <h1>Treatment</h1>
            <p>
              {information.treatment.map((treat) => (
                <li>{treat}</li>
              ))}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default AboutPage;
