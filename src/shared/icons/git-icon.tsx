import { Grid } from '@mui/material';
import Git from '@/assets/images/img-icons/img-git.png';
import Image from 'next/image';


export const IconGit = () => {
  return (
    <Grid
      item
      xs={1}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'initial'}
    >
      <Image
        src={Git}
        style={{ width: '38px', height: '38px' }}
        alt="icone-git" />
    </Grid>
  );
};
