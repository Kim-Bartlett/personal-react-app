import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import Navigation from "../Navigation";
import History from "../../pages/Career";
import Tech from "../../pages/Tech";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Helmet from "react-helmet";

interface State {
  themeMode: "light" | "dark";
}

class Router extends React.Component {
  state: State = { themeMode: "light" };

  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: "#757575"
        },
        secondary: {
          main: "#4286f4"
        },
        type: this.state.themeMode
      },
      overrides: {
        MuiCheckbox: {
          root: {
            padding: "6px !important"
          }
        },
        MuiChip: {
          label: {
            paddingLeft: "6px"
          }
        }
      }
    });

    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div
            style={{
              // backgroundColor:
              //   this.state.themeMode === "dark" ? "#2d2d2d" : "inherit",
              height: "100vh"
            }}
          >
            <Navigation
              toggleTheme={this.toggleTheme}
              darkTheme={this.state.themeMode === "dark"}
            />
            <Switch>
              <div style={{ paddingTop: "40px" }}>
                <Route exact path="/" component={Home} />
                <Route path="/career" component={History} />
                <Route path="/tech" component={Tech} />
                <div
                  style={{
                    height: "50px"
                  }}
                />
              </div>
            </Switch>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }

  toggleTheme = () => {
    const { themeMode } = this.state;
    this.setState({ themeMode: themeMode === "light" ? "dark" : "light" });
  };
}

export default Router;
