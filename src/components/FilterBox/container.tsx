import React from "react";

import FilterBoxComponent from "./component";
import { TechFilter } from "../../pages/Tech/container";

interface FilterBoxProps {
  label: string;
  value: TechFilter;
  handleFilter(checked: boolean, filter: TechFilter): void;
}

export default class FilterBox extends React.Component<FilterBoxProps> {
  render() {
    return React.createElement(FilterBoxComponent, {
      label: this.props.label,
      handleCheck: this.handleCheck,
      value: this.props.value
    });
  }

  handleCheck = (e: React.ChangeEvent, checked: boolean) => {
    console.log(e.currentTarget.getAttribute("value"));
    this.props.handleFilter(checked, e.currentTarget.getAttribute(
      "value"
    ) as TechFilter);
  };
}
