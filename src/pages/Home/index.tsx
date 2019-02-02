import React from "react";

import {
  Typography,
  Grid,
  Card,
  GridList,
  GridListTile
} from "@material-ui/core";

import kim from "./kim.jpeg";
import franci from "./franci.jpg";
import pondi from "./pondi.jpg";

function Emp(props: any) {
  return <span style={{ color: "#4286f4", fontWeight: 500 }} {...props} />;
}

class Home extends React.Component {
  render() {
    return (
      <div className="page-wrapper">
        <Grid container justify="center">
          <Grid item xs={10} md={8} lg={6}>
            <GridList
              style={{
                paddingBottom: "12px"
              }}
              cellHeight={300}
              cols={3}
            >
              <GridListTile key={franci}>
                <img src={franci} />
              </GridListTile>
              <GridListTile key={kim}>
                <img src={kim} />
              </GridListTile>
              <GridListTile key={pondi}>
                <img src={pondi} />
              </GridListTile>
            </GridList>
            <Card
              style={{
                marginBottom: "12px",
                padding: "1%",
                textAlign: "center"
              }}
            >
              <Typography
                paragraph
                variant="subheading"
                style={{ fontSize: "16px", marginTop: "15px" }}
              >
                Hi, my name is <Emp>Kim Bartlett</Emp>, and these are my cats,
                Franci and Pondi. I'm a full-stack software engineer with a
                passion for learning the latest technologies and implementing
                them with software best practices.
              </Typography>
            </Card>
            <Card
              style={{
                marginBottom: "12px",
                padding: "1%",
                textAlign: "center"
              }}
            >
              <Typography
                paragraph
                variant="subheading"
                style={{ fontSize: "16px", marginTop: "15px" }}
              >
                I built this application using <Emp>React, Typescript</Emp> and
                the <Emp>Material UI</Emp> framework. This is my experiment with{" "}
                <Emp>responsive UI</Emp>, so feel free to resize the window or
                access this page on your mobile devices! Please do not judge my
                poor design capabilities.
              </Typography>
            </Card>
            <Card
              style={{
                marginBottom: "12px",
                padding: "1%",
                textAlign: "center"
              }}
            >
              <Typography
                paragraph
                variant="subheading"
                style={{ fontSize: "16px", marginTop: "15px" }}
              >
                {" "}
                I am currently working as a consultant for{" "}
                <Emp>
                  <a href="https://www.riversagile.com/">
                    Rivers Agile Solutions
                  </a>
                </Emp>
                , but I am always open to new opportunities or picking up an
                interesting project on the side. If you'd like to work with me
                or know someone who would, feel free to say hello! My contact
                information is located in the footer of this application.
              </Typography>
            </Card>
            <Card
              style={{
                marginBottom: "12px",
                padding: "1%",
                textAlign: "center"
              }}
            >
              <Typography
                paragraph
                variant="subheading"
                style={{ fontSize: "16px", marginTop: "15px" }}
              >
                Also don't hesitate to contact me if you just want to grab a
                beer and talk about my love for Ruby on Rails. When I'm not
                developing, I enjoy tabletop games, competitive video games and
                exploring local breweries. I always welcome new friends to join
                me in my adventures.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Home;
