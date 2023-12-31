import { Grid } from '@mui/material';
import Node from '@/assets/images/img-icons/img-nodejs.png';
import Image from 'next/image';


export const IconNode = () => {
  return (
    <Grid
      item
      xs={1}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'initial'}
    >
      <Image
        src={Node}
        style={{ width: '38px', height: '38px' }}
        alt="icone-node" />
    </Grid>
  );
};
