import { Grid } from '@mui/material';
import MySQL from '@/assets/images/img-icons/img-mysql.png';
import Image from 'next/image';


export const IconMySQL = () => {
  return (
    <Grid
      item
      xs={1}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'initial'}
    >
      <Image
        src={MySQL}
        style={{ width: '38px', height: '38px' }}
        alt="icone-mysql" />
    </Grid>
  );
};
