import { Grid } from '@mui/material';
import Ts from '@/assets/images/ts-icon.png';
import Image from 'next/image';


export const IconTs = () => {
  return (
    <Grid
      item
      xs={1}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'initial'}
    >
      <Image
        src={Ts}
        alt="ts-icon" />
    </Grid>
  );
};
