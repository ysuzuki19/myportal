import React from 'react';
import styled from '@emotion/styled';

interface LinkProps {
  children: React.ReactNode;
  href: string;
}

const ExternalLink = ({ href, children }: LinkProps): JSX.Element => {
  const Link = styled.a`
    color: #539bf5;
  `;

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  );
};

export default ExternalLink;
