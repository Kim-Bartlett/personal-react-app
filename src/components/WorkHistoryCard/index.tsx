import React from "react";

import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import {
  Card,
  CardContent,
  Typography,
  Grid,
  IconButton
} from "@material-ui/core";

interface CardProps {
  company: string;
  description?: string[];
  endDate?: string;
  location: string;
  startDate: string;
  title: string;
}

class WorkHistoryCard extends React.Component<CardProps> {
  render() {
    const {
      company,
      description,
      endDate,
      location,
      startDate,
      title
    } = this.props;

    return (
      <Card style={{ marginBottom: "16px" }}>
        <CardContent>
          <Typography noWrap variant="overline">
            {title}
          </Typography>
          <Typography gutterBottom variant="subtitle2">
            {company}
          </Typography>
          {description &&
            description.map(blurb => (
              <Typography paragraph variant="body1">
                {blurb}
              </Typography>
            ))}
          <Grid container md justify="space-between">
            <Grid item xs={6}>
              <Typography variant="caption">
                {" "}
                <LocationOnIcon
                  style={{
                    fontSize: "16px",
                    paddingRight: "1px",
                    position: "relative",
                    top: "2px"
                  }}
                />
                {location}
              </Typography>
            </Grid>
            <Grid item xs={6} style={{ textAlign: "end" }}>
              <Typography variant="caption">
                <CalendarTodayIcon
                  style={{
                    fontSize: "16px",
                    paddingRight: "2px",
                    position: "relative",
                    top: "2px"
                  }}
                />
                {`${startDate} - ${endDate ? endDate : "present"}`}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default WorkHistoryCard;
