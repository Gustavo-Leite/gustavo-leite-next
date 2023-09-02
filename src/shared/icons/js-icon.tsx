import { Grid } from '@mui/material';
import Js from '@/assets/images/js-icon.png';
import Image from 'next/image';


export const IconJs = () => {
  return (
    <Grid
      item
      xs={1}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'initial'}
    >
      <Image
        src={Js}
        alt="js-icon" />
    </Grid>
  );
};
