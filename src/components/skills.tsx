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
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  return (
    <Grid
      container
      xs={12}
      sm={6}
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
            flexDirection={'column'}
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
          height={'20%'}
          flexDirection={'column'}
          justifyContent={'center'}
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
              Contacts
            </Typography>
          </Grid>
          <Grid
            item
            display={'flex'}
            flexDirection={'column'}
            ml={5}
          >
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
      )}
    </Grid>
  );
};