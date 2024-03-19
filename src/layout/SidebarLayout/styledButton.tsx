import { Button } from '@mui/material';
import { FC, ReactNode, useEffect, useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

interface StyledButtonProps {
  children: ReactNode;
  to: string;
  number: any;
  index: number;
  setIndex: any;
}

const StyledButton: FC<StyledButtonProps> = ({
  children,
  to,
  index,
  setIndex,
  number,
}) => {
  const selectedStyle = {
    backgroundColor: '#000080',
    color: '#ffffff',
    width: '100%',
    justifyContent: 'flex-start',
    padding: '12px 24px',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#000080',
      color: '#ffffff',
    },
  };

  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    setIndex(number);
    setSelected(true);
  };
 

 

  return (
    <RouterLink to={to} style={{ textDecoration: 'none', width: '100%' }}>
      <Button
        sx={
          index === number
            ? selectedStyle
            : {
                width: '100%',
                justifyContent: 'flex-start',
                padding: '12px 24px',
                textTransform: 'none',
                color: '#000000',
                '&.active': {
                  backgroundColor: '#ff0000',
                  color: ' #ffffff',
                },
                '&:hover': {
                  backgroundColor: '#000080',
                  color: '#ffffff',
                },
              }
        }
        onClick={handleClick}>
        {children}
      </Button>
    </RouterLink>
  );
};
export default StyledButton;
