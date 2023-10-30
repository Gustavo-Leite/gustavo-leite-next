import { Grid } from '@mui/material';
import Nest from '@/assets/images/img-icons/img-nestjs.png';
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
        style={{ width: '38px', height: '38px' }}
        alt="icone-nest" />
    </Grid>
  );
};
