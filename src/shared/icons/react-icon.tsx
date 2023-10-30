import { Grid } from '@mui/material';
import React from '@/assets/images/img-icons/img-react.png';
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
        style={{ width: '38px', height: '38px' }}
        alt="icone-react" />
    </Grid>
  );
};
