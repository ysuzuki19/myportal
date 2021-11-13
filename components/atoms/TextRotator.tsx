import React from 'react';
import { Fade, Typography } from '@mui/material';

interface TextRotatorProps {
  keywords: string[];
  delay?: number;
}

function TextRotator({
  keywords,
  delay = 1000,
}: TextRotatorProps): JSX.Element {
  const [counter, setCounter] = React.useState<number>(0);
  const [show, setShow] = React.useState<boolean>(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => {
        setCounter((prev) => (prev >= keywords.length - 1 ? 0 : prev + 1));
        setShow(true);
      }, delay);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  return (
    <Fade in={show}>
      <Typography variant="h4">{keywords[counter]}</Typography>
    </Fade>
  );
}

export default TextRotator;
