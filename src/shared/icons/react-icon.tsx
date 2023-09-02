import { Grid } from '@mui/material';
import React from '@/assets/images/react-icon.png';
import Image from 'next/image';


export const IconReact = () => {
  return (
    <Grid
      item
      xs={1}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'initial'}
    >
      <Image
        src={React}
        alt="react-icon" />
    </Grid>
  );
};
