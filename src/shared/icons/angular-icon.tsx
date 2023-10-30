import { Grid } from '@mui/material';
import Angular from '@/assets/images/img-icons/img-angular.png';
import Image from 'next/image';


export const IconAngular = () => {
  return (
    <Grid
      item
      xs={1}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'initial'}
    >
      <Image
        src={Angular}
        style={{ width: '38px', height: '38px' }}
        alt="icone-angular" />
    </Grid>
  );
};
