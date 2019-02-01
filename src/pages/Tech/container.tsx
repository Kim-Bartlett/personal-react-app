import React from "react";

import { TechChipProps } from "../../components/TechChip";

import techData from "../../data/tech";

import TechComponent from "./component";

export interface TechDataProps {
  label: string;
  data: TechChipProps[];
}

// TODO: better way to handle this?
export type TechFilter =
  | "react"
  | "ruby"
  | "db"
  | "infra"
  | "test"
  | "version_control";
export const techFilters: TechFilter[] = [
  "react",
  "ruby",
  "db",
  "infra",
  "test",
  "version_control"
];

interface Props {}

interface State {
  filters: TechFilter[];
}

export default class Tech extends React.Component<Props & State> {
  state: State = { filters: [] };

  render() {
    const { filters } = this.state;

    const filteredData =
      filters.length > 0
        ? techData.map(section => ({
            label: section.label,
            data: section.data.filter(o =>
              // TODO: alternative to using as any here?
              //   filters.includes(o.iconType as any)
              //     ? o
              //     : { ...o, hidden: true }
              filters.includes(o.iconType as any)
            )
            //   .sort((a, b) => {
            //     return a === b ? 0 : a.hidden ? 1 : -1;
            //   })
          }))
        : techData;

    return React.createElement(TechComponent, {
      data: filteredData,
      filters: techFilters,
      handleCheck: this.handleFilter
    });
  }

  handleFilter = (checked: boolean, filter: TechFilter) => {
    if (checked) {
      this.setState({ filters: [...this.state.filters, filter] });
    } else {
      this.setState({ filters: this.state.filters.filter(o => o !== filter) });
    }
  };
}
