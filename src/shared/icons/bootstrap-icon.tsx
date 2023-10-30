import { Grid } from '@mui/material';
import Bootstrap from '@/assets/images/img-icons/img-bootstrap.png';
import Image from 'next/image';


export const IconBootstrap = () => {
  return (
    <Grid
      item
      xs={1}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'initial'}
    >
      <Image
        src={Bootstrap}
        style={{ width: '38px', height: '38px' }}
        alt="icone-bootstrap" />
    </Grid>
  );
};
