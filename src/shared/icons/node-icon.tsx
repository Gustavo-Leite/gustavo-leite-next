import { Grid } from '@mui/material';
import Node from '@/assets/images/node-icon.png';
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
        alt="node-icon" />
    </Grid>
  );
};
