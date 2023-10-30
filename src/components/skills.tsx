import {
  Grid,
  Button,
  Typography,
  useMediaQuery,
  Theme,
  useTheme
} from '@mui/material';

import styled from 'styled-components';

import {
  GitHub,
  LinkedIn
} from '@mui/icons-material';

import {
  IconBr,
  IconUs,
} from '../shared/icons';

const StyledButton = styled(Button)`
  &:hover {
    background: none;
  }
  color: white;
`;


export const Skills = () => {
  const theme = useTheme();


  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  return (
    <Grid
      container
      xs={12}
      md={5}
      flexDirection={'column'}
      justifyContent={'center'}
      alignContent={'center'}
    >
      {smDown && (
        <Grid
          container
          width={'100%'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignContent={'center'}
          padding={'1rem'}
        >
          <Grid
            item
            display={'flex'}
            flexDirection={'column'}
            gap={1}
            ml={5}
          >
            <Typography
              variant={'body2'}
              color={'#8CC8FF'}
              textTransform={'capitalize'}
            >
              Education
            </Typography>
            <Typography
              variant={'body2'}
              color={'primary.contrastText'}
            >
              Analysis and Systems Development
            </Typography>
          </Grid>
        </Grid>
      )}

      {smDown && (
        <Grid
          container
          width={'100%'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignContent={'center'}
          padding={'1rem'}
          gap={1}
        >
          <Grid
            item
            ml={5}
          >
            <Typography
              variant={'body2'}
              color={'#8CC8FF'}
              textTransform={'capitalize'}
            >
              Languages
            </Typography>
          </Grid>
          <Grid
            item
            display={'flex'}
            flexDirection={'row'}
            gap={1}
          >
            <IconBr />
            <IconUs />
          </Grid>
        </Grid>
      )}

      {smUp && (
        <Grid
          container
          width={'100%'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignContent={'center'}
          padding={'1rem'}
        >
          <Grid
            item
            display={'flex'}
            flexDirection={'column'}
            gap={1}
            ml={5}
          >
            <Typography
              variant={'body2'}
              color={'#8CC8FF'}
              textTransform={'capitalize'}
            >
              Education
            </Typography>
            <Typography
              variant={'body2'}
              color={'primary.contrastText'}
            >
              Analysis and Systems Development
            </Typography>
          </Grid>
        </Grid>
      )}

      {smUp && (
        <Grid
          container
          width={'100%'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignContent={'center'}
          padding={'1rem'}
          gap={1}
        >
          <Grid
            item
            ml={5}
          >
            <Typography
              variant={'body2'}
              color={'#8CC8FF'}
              textTransform={'capitalize'}
            >
              Languages
            </Typography>
          </Grid>
          <Grid
            item
            display={'flex'}
            flexDirection={'row'}
            gap={1}
          >
            <IconBr />
            <IconUs />
          </Grid>
        </Grid>
      )}

      {smUp && (
        <Grid
          container
          flexDirection={'row'}
          justifyContent={'center'}
          height={theme.spacing(15)}
        >
          <Grid item display={'flex'} flexDirection={'column'} gap={2} mt={3} xs={12}>
            <Typography
              variant={'body1'}
              textAlign={'center'}
              textTransform={'capitalize'}
              color={'#8CC8FF'}
            >
              Contacts
            </Typography>
          </Grid>
          <Grid item display={'flex'} flexDirection={'row'} justifyContent={'center'} gap={2} xs={12}>
            <Grid item display={'flex'} flexDirection={'row'} justifyContent={'center'} xs={1} height={'45px'} >
              <StyledButton href='https://www.linkedin.com/in/gustavo-martins-leite-295885207/'>
                <LinkedIn fontSize='large' style={{ color: '#0B65C3' }} />
              </StyledButton>
            </Grid>
            <Grid item display={'flex'} flexDirection={'row'} justifyContent={'center'} xs={1} height={'45px'} >
              <StyledButton href='https://github.com/Gustavo-Leite'>
                <GitHub fontSize='large' />
              </StyledButton>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};