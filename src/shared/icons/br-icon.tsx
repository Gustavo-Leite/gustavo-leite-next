import { Grid, Typography } from '@mui/material';
import Br from '@/assets/images/br.png';
import Image from 'next/image';


export const IconBr = () => {
  return (
    <Grid
      item
      xs={6}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'initial'}
      gap={2}
    >
      <Image
        src={Br}
        alt={'icone-brasil'} />
      <Typography
        variant={'body2'}
        color={'primary.contrastText'}
      >
        Português - Native
      </Typography>
    </Grid>
  );
};
