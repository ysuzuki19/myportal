import * as React from 'react';
import { Box } from '@mui/system';
import { Typography, Toolbar, AppBar, Divider } from '@mui/material';

import Link from '../atoms/Link';
import statics from '../../statics.config';

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
          position="fixed"
        >
          {statics.title}
        </Typography>

        <Box style={{ flexGrow: 1, textAlign: 'center' }}>
          <Typography
            variant="h4"
            noWrap
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            {statics.name}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
