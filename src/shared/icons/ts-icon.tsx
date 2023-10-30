import { Grid } from '@mui/material';
import Ts from '@/assets/images/img-icons/img-typescript.png';
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
        style={{ width: '38px', height: '38px' }}
        alt="icone-typescript" />
    </Grid>
  );
};
