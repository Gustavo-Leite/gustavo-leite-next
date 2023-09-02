import { Grid } from '@mui/material';
import Nest from '@/assets/images/nest-icon.png';
import Image from 'next/image';


export const IconNest = () => {
  return (
    <Grid
      item
      xs={1}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'initial'}
    >
      <Image
        src={Nest}
        alt="nest-icon" />
    </Grid>
  );
};
