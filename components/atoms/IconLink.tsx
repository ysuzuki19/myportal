import React from 'react';

interface IconLinkProps {
  children: React.ReactNode;
  href: string;
}

const IconLink = ({ href, children }: IconLinkProps): JSX.Element => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: 'inherit' }}
    >
      {children}
    </a>
  );
};

export default IconLink;
