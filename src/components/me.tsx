import {
  Grid,
  Button,
  Typography,
  useMediaQuery,
  Theme
} from '@mui/material';

import styled from 'styled-components';

import {
  GitHub,
  LinkedIn
} from '@mui/icons-material';

import Image from 'next/image';
import MyPicture from '@/assets/images/my-photo.jpg';

const StyledButton = styled(Button)`
  &:hover {
    background: none;
  }
  color: white;
`;

export const Me = () => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  return (
    <Grid
      container
      xs={12}
      md={6}
      gap={2}
      flexDirection={'column'}
      justifyContent={'center'}
      alignContent={'center'}
    >
      {smDown && (
        <Grid
          container
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={2}
        >
          <Grid
            item
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={2}
            mb={'1rem'}
          >
            <Image
              width={200}
              height={200}
              style={{ borderRadius: '10rem 10rem 10rem 10rem' }}
              src={MyPicture}
              alt='photo'
            />
            <Grid
              item
              display={'flex'}
              flexDirection={'column'}>
              <Grid
                item
                display={'flex'}
                gap={1}
              >
                <StyledButton href='https://www.linkedin.com/in/gustavo-martins-leite-295885207/'>
                  <LinkedIn fontSize='large' style={{ color: '#0B65C3' }} />
                </StyledButton>
                <StyledButton href='https://github.com/Gustavo-Leite'>
                  <GitHub fontSize='large' />
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            gap={1}
            ml={'1rem'}
            mb={'2rem'}
          >
            <Typography
              variant={'body1'}
              color={'#8CC8FF'}
            >
              {'Olá, eu sou o Gustavo! 😁'}
            </Typography>
            <Typography
              variant={'body2'}
              textTransform={'capitalize'}
              color={'primary.contrastText'}
            >
              Desenvolvedor de Software
            </Typography>
          </Grid>
        </Grid>
      )}

      {smDown && (
        <Grid
          container
          justifyContent={'center'}
        >
          <Grid
            item
            display={'flex'}
            width={'24rem'}
          >
            <Typography
              variant={'body2'}
              color={'primary.contrastText'}
            >
              {'Estou procurando uma oportunidade para trabalhar com desenvolvimento de programas. O foco dos meus estudos atualmente tem sido o ecossistema Javascript. Tenho me aprofundado no frontend com codificação React e Angular com javascript e typescript. Para backend, ganhei experiência com Nodejs via express e Nestjs.'}
            </Typography>
          </Grid>
        </Grid>
      )}

      {smUp && (
        <Grid
          container
          flexDirection={'row'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={2}
        >
          <Grid
            item
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={2}
            mb={'1rem'}
          >
            <Image
              width={200}
              height={200}
              style={{ borderRadius: '10rem 10rem 10rem 10rem' }}
              src={MyPicture}
              alt='photo'
            />
          </Grid>
          <Grid
            item
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            gap={1}
            ml={'1rem'}
            mb={'2rem'}
          >
            <Typography
              variant={'body1'}
              color={'#8CC8FF'}
            >
              {'Olá, eu sou o Gustavo! 😁'}
            </Typography>
            <Typography
              variant={'body2'}
              textTransform={'capitalize'}
              color={'primary.contrastText'}
            >
            Desenvolvedor de Software
            </Typography>
          </Grid>
        </Grid>
      )}

      {smUp && (
        <Grid
          container
          justifyContent={'center'}
        >
          <Grid
            item
            display={'flex'}
            width={'24rem'}
          >
            <Typography
              variant={'body2'}
              color={'primary.contrastText'}
            >
              {'Estou procurando uma oportunidade para trabalhar com desenvolvimento de programas. O foco dos meus estudos atualmente tem sido o ecossistema Javascript. Tenho me aprofundado no frontend com codificação React e Angular com javascript e typescript. Para backend, ganhei experiência com Nodejs via express e Nestjs.'}
            </Typography>
          </Grid>
        </Grid>
      )}
      
    </Grid>
  );
};