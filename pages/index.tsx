import React from 'react';
import { NextPage } from 'next';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

import Layout from '../components/Layout';
import TextRotator from '../components/atoms/TextRotator';
import { Metas } from '../types/metas.types';
import statics from '../statics.config';

const keywords = ['Developer', 'Japanese'];
const likes = ['C++', 'React', 'Next.js', 'Firebase'];

const Home: NextPage = () => {
  const metas: Metas = {
    title: `${statics.name} - ${statics.siteTitle}`,
  };

  return (
    <Layout metas={metas}>
      <Box m={15}>
        <Grid container spacing={2}>
          <Grid item>
            <Typography variant="h4">{`I'm a`}</Typography>
          </Grid>
          <Grid item>
            <TextRotator keywords={keywords} delay={1000} />
          </Grid>
        </Grid>

        <Box m={10} />

        <Grid container spacing={2}>
          <Grid item>
            <Typography variant="h4">{`I like`}</Typography>
          </Grid>
          <Grid item>
            <TextRotator keywords={likes} delay={1000} />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Home;
