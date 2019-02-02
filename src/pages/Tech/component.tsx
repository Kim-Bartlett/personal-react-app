import React from "react";

import { Grid, Card } from "@material-ui/core";

import TechCard from "../../components/TechCard";
import FilterBox from "../../components/FilterBox";

import { TechDataProps, TechFilter } from "./container";

interface TechComponentProps {
  data: TechDataProps[];
  filters: TechFilter[];
  handleCheck(checked: boolean, filter: TechFilter): void;
}

const TechComponent: React.SFC<TechComponentProps> = ({
  data,
  filters,
  handleCheck
}) => {
  const techCards = data.map(
    d =>
      d.data.length > 0 && (
        <Grid
          style={{ marginTop: "12px", textAlign: "center" }}
          item
          xs={12}
          md={5}
        >
          <TechCard chipProps={d.data} title={d.label} />
        </Grid>
      )
  );

  const filterBoxes = filters.map(filter => (
    <FilterBox
      label={filter.charAt(0).toUpperCase() + filter.slice(1)}
      value={filter}
      handleFilter={handleCheck}
    />
  ));

  return (
    <div className="page-wrapper" style={{ padding: "0 15%" }}>
      <Grid container direction="row" justify="space-around">
        <Grid item xs={12}>
          <Grid container direction="row" justify="space-around">
            <Card style={{ padding: "5px" }}>{filterBoxes}</Card>
          </Grid>
        </Grid>
        {techCards}
      </Grid>
    </div>
  );
};

export default TechComponent;
