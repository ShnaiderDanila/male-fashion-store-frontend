import { Button } from '@mui/material';
import { FC, ReactNode } from 'react';

interface ButtonProps {
  disabled?: boolean;
  children: ReactNode;
  type?: 'reset' | 'button' | undefined;
  onClick?: (() => void) | undefined;
  maxWidth?: string;
  height?: string;
  display?: string;
  flexDirection?: string;
  gap?: string;
  backgroundColor?: string;
  color?: string;
}

const CustomButton: FC<ButtonProps> = ({
  disabled,
  type,
  onClick,
  children,
  maxWidth = '100%',
  height = '48px',
  display = 'flex',
  flexDirection = 'row',
  gap = '12px',
  backgroundColor = '#111111',
  color = 'white',
}) => {
  return (
    <>
      <Button
        variant="contained"
        disabled={disabled}
        type={type || 'submit'}
        onClick={onClick}
        sx={{
          display: display,
          flexDirection: flexDirection,
          alignItems: 'center',
          gap: gap,
          width: '100%',
          height: height,
          maxWidth: maxWidth,
          borderRadius: '6px',
          backgroundColor: backgroundColor,
          color: color,
          paddingX: '24px',
          boxShadow: 'none',
          textTransform: 'none',
          fontSize: '16px',
          transition: 'ease all 0.2s',
          '&:hover': {
            backgroundColor: backgroundColor,
            opacity: '0.8',
            boxShadow: 'none',
          },
        }}
      >
        {children}
      </Button>
    </>
  );
};

export default CustomButton;
