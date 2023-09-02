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
      sm={6}
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
              {'Hi, i\'m Gustavo! 😁'}
            </Typography>
            <Typography
              variant={'body2'}
              textTransform={'capitalize'}
              color={'primary.contrastText'}
            >
              Software Developer
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
              {'I am looking for an opportunity to work with software development. The focus of my studies currently has been on the Javascript ecosystem. I\'ve been digging into the frontend with React and Angular coding with javascript and typescript. For backend, I have gained experience with Nodejs via express and Nestjs.'}
            </Typography>
          </Grid>
        </Grid>
      )}
      {smUp && (
        <Grid
          container
          flexDirection={'row'}
          justifyContent={'center'}
          alignItems={'end'}
          gap={2}
        >
          <Grid
            item
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
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
              {'Hi, i\'m Gustavo! 😁'}
            </Typography>
            <Typography
              variant={'body2'}
              textTransform={'capitalize'}
              color={'primary.contrastText'}
            >
              Software Developer
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
            width={'26rem'}
          >
            <Typography
              variant={'body2'}
              color={'primary.contrastText'}
            >
              {'Im looking for an opportunity to work with program development. The focus of my studies currently has been on the Javascript ecosystem. I\'ve been digging deeper into the frontend with React and Angular coding with javascript and typescript. For backend, I gained experience with Nodejs via express and Nestjs.'}
            </Typography>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};