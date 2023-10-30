import { Grid } from '@mui/material';
import MongoDB from '@/assets/images/img-icons/img-mongodb.png';
import Image from 'next/image';


export const IconMongoDB = () => {
  return (
    <Grid
      item
      xs={1}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'initial'}
    >
      <Image
        src={MongoDB}
        style={{ width: '38px', height: '38px' }}
        alt="icone-mongodb" />
    </Grid>
  );
};
