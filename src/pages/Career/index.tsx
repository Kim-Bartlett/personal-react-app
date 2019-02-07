import React from 'react';

import { Grid, Grow } from '@material-ui/core';
import WorkHistoryCard from '../../components/WorkHistoryCard';
import careerData from '../../data/career';

class Career extends React.Component {
  render() {
    return (
      <div className="page-wrapper" style={{ paddingTop: '4%' }}>
        <Grid container alignItems="flex-start" justify="space-around">
          {careerData.map(data => (
            <Grow in>
              <Grid item lg={2} md={8} xs={10}>
                <WorkHistoryCard
                  company={data.company}
                  description={data.description}
                  endDate={data.endDate}
                  key={'card' + data.company}
                  location={data.location}
                  startDate={data.startDate}
                  title={data.title}
                />
              </Grid>
            </Grow>
          ))}
        </Grid>
      </div>
    );
  }
}

export default Career;
