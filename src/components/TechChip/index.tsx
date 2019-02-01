import React from "react";

import { Chip, Zoom } from "@material-ui/core";
import TechIcon from "../TechIcon";

export type ChipIconType =
  | "api"
  | "db"
  | "infra"
  | "java"
  | "js"
  | "language"
  | "manage"
  | "package_manager"
  | "python"
  | "react"
  | "ruby"
  | "test"
  | "version_control";

export interface TechChipProps {
  core?: boolean;
  hidden?: boolean;
  iconType: ChipIconType;
  name: string;
}

class TechChip extends React.Component<TechChipProps> {
  render() {
    const { core, hidden, iconType, name } = this.props;

    return (
      <Zoom in={!hidden}>
        <Chip
          color={core ? "secondary" : "default"}
          icon={<TechIcon type={iconType} />}
          label={name}
          style={{ margin: "2px", padding: "2px 2px 2px 10px" }}
        />
      </Zoom>
    );
  }
}

export default TechChip;
