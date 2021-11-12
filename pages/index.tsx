import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Typography variant="h4">{`I'm a developer`}</Typography>
    </Layout>
  );
};

export default Home;
