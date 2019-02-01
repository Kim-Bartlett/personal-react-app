import React from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import TechIcon from "../TechIcon";

interface FilterBoxComponentProps {
  label: string;
  handleCheck(e: React.ChangeEvent, checked: boolean): void;
  value: string;
}

const FilterBox: React.SFC<FilterBoxComponentProps> = ({
  handleCheck,
  label,
  value
}) => {
  return (
    <div style={{ display: "inline-block", padding: "3px" }}>
      <Checkbox onChange={handleCheck} value={value} />
      <div
        style={{
          display: "inline-block",
          position: "relative",
          left: "-2px",
          top: "2px",
          width: "fit-content"
        }}
      >
        <div style={{ color: "#757575" }}>
          <TechIcon type={value} />
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
