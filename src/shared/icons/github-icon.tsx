import { Grid } from '@mui/material';
import GitHub from '@/assets/images/img-icons/img-github.png';
import Image from 'next/image';


export const IconGitHub = () => {
  return (
    <Grid
      item
      xs={1}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'initial'}
    >
      <Image
        src={GitHub}
        alt="icone-github" />
    </Grid>
  );
};
