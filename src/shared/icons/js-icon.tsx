import { Grid } from '@mui/material';
import Js from '@/assets/images/img-icons/img-javascript.png';
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
        style={{ width: '38px', height: '38px' }}
        alt="icone-javascript" />
    </Grid>
  );
};
