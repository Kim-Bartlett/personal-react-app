import React from "react";

import { Card, CardContent, Typography, Grow } from "@material-ui/core";
import TechChip, { TechChipProps } from "../TechChip";

interface TechCardProps {
  chipProps: TechChipProps[];
  title: string;
}

class TechCard extends React.Component<TechCardProps> {
  render() {
    const { chipProps, title } = this.props;

    return (
      <Grow in>
        <div>
          <Typography style={{ fontSize: "14px" }} variant="overline">
            {title}
          </Typography>
          <Card>
            <CardContent>
              {chipProps.map(props => (
                <Grow in>
                  <TechChip {...props} />
                </Grow>
              ))}
            </CardContent>
          </Card>
        </div>
      </Grow>
    );
  }
}

export default TechCard;
