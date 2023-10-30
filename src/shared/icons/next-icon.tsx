import { Grid } from '@mui/material';
import Next from '@/assets/images/img-icons/img-nextjs.png';
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
        style={{ width: '38px', height: '38px' }}
        alt="icone-next" />
    </Grid>
  );
};
