import { Grid, Typography } from '@mui/material';
import Us from '@/assets/images/us.png';
import Image from 'next/image';


export const IconUs = () => {
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
        src={Us}
        alt={'icone-us'} />
      <Typography
        variant={'body2'}
        color={'primary.contrastText'}
      >
        English - Basic
      </Typography>
    </Grid>
  );
};
