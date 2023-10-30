import { Grid } from '@mui/material';
import Express from '@/assets/images/img-icons/img-express.png';
import Image from 'next/image';


export const IconExpress = () => {
  return (
    <Grid
      item
      xs={1}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'initial'}
    >
      <Image
        src={Express}
        style={{ width: '38px', height: '38px' }}
        alt="icone-express" />
    </Grid>
  );
};
