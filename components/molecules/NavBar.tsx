import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import statics from '../../statics.config';
import Link from '../atoms/Link';

interface NavMenuProps {
  children: React.ReactNode;
  variant?:
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'inherit'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2';
  link: string;
  testid: string;
}

const NavMenu = ({
  children,
  variant,
  link,
  testid,
}: NavMenuProps): JSX.Element => {
  return (
    <Typography
      variant={variant || 'subtitle1'}
      noWrap
      component={Link}
      href={link}
      sx={{ display: { xs: 'none', sm: 'block' } }}
      style={{ cursor: 'pointer' }}
      data-testid={testid}
    >
      {children}
    </Typography>
  );
};

const NavBar = (): JSX.Element => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          variant="h5"
          noWrap
          style={{ cursor: 'pointer' }}
          component={Link}
          href={'/'}
          data-testid="blog-title"
          position="fixed"
        >
          {statics.title}
        </Typography>

        <Divider orientation="vertical" flexItem variant="middle" />

        <Box style={{ flexGrow: 1, textAlign: 'center' }}>
          <NavMenu variant="h3" link="/page/1" testid="goto-blog">
            {statics.author}
          </NavMenu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
