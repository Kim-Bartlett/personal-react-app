import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import {
  NoSsr,
  AppBar,
  Tabs,
  Typography,
  WithStyles,
  Tab,
  Toolbar,
  Grid,
  IconButton,
  Switch,
  Button
} from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { StyleRules } from '@material-ui/core/styles';
import { Link, NavLink } from 'react-router-dom';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface Props {
  toggleTheme(): void;
  darkTheme: boolean;
}

interface State {
  activeTab: number;
}

function LinkTab(props: any) {
  return <Tab component={NavLink} {...props} />;
}

const styles: StyleRules = {
  root: {
    backgroundColor: 'white',
    flexGrow: 1
  },
  buttonText: {
    textTransform: 'none'
  }
};

class Navigation extends React.Component<Props & WithStyles, State> {
  state: State = {
    activeTab: 0
  };

  handleChange = (event: any, activeTab: number) => {
    this.setState({ activeTab });
  };

  render() {
    const { classes } = this.props;

    return (
      <NoSsr>
        <div className={classes.root}>
          <AppBar position="fixed">
            <Tabs variant="fullWidth" value={this.state.activeTab} onChange={this.handleChange}>
              <LinkTab label="About Me" to="/" />
              <LinkTab label="Career" to="/career" />
              <LinkTab label="Tech" to="/tech" />
            </Tabs>
          </AppBar>
          <AppBar position="static" style={{ position: 'fixed', bottom: '0' }}>
            <Toolbar>
              <Grid container alignItems="center" justify="space-between">
                <Grid item>
                  <Typography
                    style={{
                      color: '#f9f9f9'
                    }}
                    variant="overline"
                  >
                    Copyright © 2019 Kim Bartlett
                  </Typography>
                </Grid>
                <Grid item>
                  <Switch color="secondary" checked={this.props.darkTheme} onChange={this.props.toggleTheme} />
                  <IconButton href="mailto:kim.n.bartlett@gmail.com" target="_blank">
                    <FontAwesomeIcon size="lg" icon={faEnvelope} />
                  </IconButton>
                  <IconButton href="https://www.linkedin.com/in/kim-bartlett-53424746/" target="_blank">
                    <FontAwesomeIcon size="lg" icon={faLinkedin} />
                  </IconButton>
                  <IconButton href="https://github.com/kim-bartlett" target="_blank">
                    <FontAwesomeIcon size="lg" icon={faGithub} />
                  </IconButton>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </div>
      </NoSsr>
    );
  }
}

export default withStyles(styles)(Navigation);
