import Head from 'next/head';
import { Box, styled, ThemeProvider } from '@mui/system';
import { createTheme, Divider, Grid } from '@mui/material';

import { Metas } from '../types/metas.types';
import statics from '../statics.config';
import defaultMetas from '../defaults/metas.default';
import NavBar from './molecules/NavBar';
import Footer from './molecules/Footer';

interface LayoutProps {
  children: React.ReactNode;
  metas?: Metas;
}

const LayoutContainer = styled('div')`
  background-color: #22272e;
  color: #adbac7;
`;

export default function Layout({
  children,
  metas = defaultMetas,
}: LayoutProps): JSX.Element {
  return (
    <>
      <style global jsx>{`
        html,
        body {
          background-color: #22272e;
          color: #adbac7;
          min-height: 100vh;
        }
      `}</style>
      <Head>
        <title>{metas.title || 'My Portal'}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content={metas.title || 'My Portal'} />
        <meta
          name="description"
          content={metas.description || 'Portofolio site for you'}
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            statics.siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={statics.siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <LayoutContainer>
        <ThemeProvider
          theme={createTheme({
            palette: {
              mode: 'dark',
            },
            typography: {
              fontFamily: [
                'ui-sans-serif',
                'system-ui',
                '-apple-system',
                'BlinkMacSystemFont',
                'Segoe UI',
                'Roboto',
                'Helvetica Neue',
                'Arial',
                'Noto Sans',
                'sans-serif',
                'Apple Color Emoji',
                'Segoe UI Emoji',
                'Segoe UI Symbol',
                'Noto Color Emoji',
                'Ubuntu',
              ].join(','),
            },
          })}
        >
          <header>
            <NavBar />
          </header>
          <Box m={8} />
          <main>{children}</main>
          <Box m={8} />
          <Divider />
          <footer>
            <Footer />
          </footer>
        </ThemeProvider>
      </LayoutContainer>
    </>
  );
}
