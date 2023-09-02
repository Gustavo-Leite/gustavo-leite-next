import { Grid } from '@mui/material';
import Next from '@/assets/images/next-icon.png';
import Image from 'next/image';


export const IconNext = () => {
  return (
    <Grid
      item
      xs={1}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'initial'}
    >
      <Image
        src={Next}
        alt="next-icon" />
    </Grid>
  );
};
