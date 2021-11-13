import React from 'react';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

import LeetCodeIcon from '../icons/LeetCode';
import ExternalLink from '../atoms/ExternalLink';
import IconLink from '../atoms/IconLink';
import statics from '../../statics.config';

const Footer = (): JSX.Element => {
  return (
    <footer>
      <Box py={4}>
        <Box display="flex" justifyContent="center">
          <div data-testid="copylight">
            © 2021{' '}
            <ExternalLink href={`https://github.com/ysuzuki19}`}>
              Yuya Suzuki
            </ExternalLink>
            , Powered by{' '}
            <ExternalLink href="https://nextjs.org">Next.js</ExternalLink>{' '}
          </div>
        </Box>

        <Box mt={2} mb={2}>
          <Stack direction="row" justifyContent="center" spacing={2}>
            <IconLink href={`https://github.com/${statics.social.github}`}>
              <GitHubIcon />
            </IconLink>
            <IconLink
              href={`https://linkedin.com/in/${statics.social.linkedin}`}
            >
              <LinkedInIcon />
            </IconLink>
            <IconLink href={`https://twitter.com/${statics.social.twitter}`}>
              <TwitterIcon />
            </IconLink>
            <IconLink href={`https://leetcode.com/${statics.social.leetcode}`}>
              <LeetCodeIcon />
            </IconLink>
          </Stack>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
