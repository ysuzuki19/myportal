import React from 'react';
import { Divider, Grid, Typography } from '@mui/material';
import { NextPage } from 'next';

import Layout from '../components/Layout';
import TextRotator from '../components/atoms/TextRotator';
import { Box } from '@mui/system';

const keywords = ['Developer', 'Japanese'];
const likes = ['C++', 'React', 'Next.js', 'Firebase'];

const Home: NextPage = () => {
  return (
    <Layout>
      <Grid container justifyContent="center">
        <Typography variant="h4" pr={2}>
          {`I'm a`}
        </Typography>
        <TextRotator keywords={keywords} delay={1000} />
      </Grid>

      <Box m={10} />

      <Grid container justifyContent="center">
        <Typography variant="h4" pr={2}>
          {`I like`}
        </Typography>
        <TextRotator keywords={likes} delay={1000} />
      </Grid>
    </Layout>
  );
};

export default Home;
