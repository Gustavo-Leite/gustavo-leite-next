import { IconAngular, IconBootstrap, IconExpress, IconGit, IconJs, IconMongoDB, IconMySQL, IconNest, IconNext, IconNode, IconReact, IconTs } from '@/shared/icons';
import { Grid, Typography, useTheme, useMediaQuery, Theme } from '@mui/material';

export const HardSkill = () => {

  const theme = useTheme();

  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));
  const xlDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('xl'));
  const xlUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('xl'));

  return (
    <>


      {smDown && (
        <Grid
          container
          bgcolor={'primary.main'}
          style={{
            minHeight: '120vh',
          }}
        >
          <Grid
            container
            justifyContent={'center'}
            sx={{
              pt: {
                xs: theme.spacing(12)
              },
              pl: {
                xs: theme.spacing(4)
              },
              pr: {
                xs: theme.spacing(4)
              },
            }}
          >
            <Grid
              item
              xs={12}
              display={'flex'}
              flexDirection={'column'}
              alignContent={'center'}
            >
              <Grid
                container
                justifyContent={'center'}
                alignContent={'center'}
                height={theme.spacing(8)}
              >
                <Typography
                  variant={'h5'}
                  textTransform={'capitalize'}
                  color={'#8CC8FF'}
                >
                  Skills
                </Typography>
              </Grid>
              <Grid
                container
                flexDirection={'row'}
                justifyContent={'space-between'}
                gap={3}
                height={theme.spacing(80)}
              >
                <Grid item display={'flex'} flexDirection={'column'} gap={2} mt={3} xs={12}>
                  <Typography
                    variant={'body1'}
                    textAlign={'center'}
                    textTransform={'capitalize'}
                    color={'#8CC8FF'}
                  >
                    Linguages
                  </Typography>
                  <Grid item display={'flex'} flexDirection={'row'} justifyContent={'center'} xs={12} gap={6}>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} gap={4} xs={4.5}>
                      <IconTs />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        TypeScript
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} gap={4} xs={4.5}>
                      <IconJs />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        JavaScript
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item display={'flex'} flexDirection={'column'} alignItems={'center'} gap={2} xs={5.5}>
                  <Typography
                    variant={'body1'}
                    textTransform={'capitalize'}
                    color={'#8CC8FF'}
                  >
                    Front End
                  </Typography>
                  <Grid item display={'flex'} flexDirection={'column'} justifyContent={'center'} xs={12} gap={2}>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconReact />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        ReactJS
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconAngular />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        AngularJS
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconNext />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        NextJS
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconBootstrap />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        Bootstrap
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item display={'flex'} flexDirection={'column'} alignItems={'center'} gap={2} xs={5.5}>
                  <Typography
                    variant={'body1'}
                    textTransform={'capitalize'}
                    color={'#8CC8FF'}
                  >
                    Back End
                  </Typography>
                  <Grid item display={'flex'} flexDirection={'column'} justifyContent={'center'} xs={12} gap={2}>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconNode />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        NodeJS
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconNest />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        NestJS
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconExpress />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        ExpressJS
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item display={'flex'} flexDirection={'column'} gap={2} mt={3} xs={12}>
                  <Typography
                    variant={'body1'}
                    textAlign={'center'}
                    textTransform={'capitalize'}
                    color={'#8CC8FF'}
                  >
                    Data Base
                  </Typography>
                  <Grid item display={'flex'} flexDirection={'row'} justifyContent={'center'} gap={6} xs={12}>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} gap={4} xs={3.5}>
                      <IconMySQL />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        MySQL
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} gap={4} xs={4.5}>
                      <IconMongoDB />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        MongoDB
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item display={'flex'} flexDirection={'column'} gap={2} mt={3} xs={12}>
                  <Typography
                    variant={'body1'}
                    textAlign={'center'}
                    textTransform={'capitalize'}
                    color={'#8CC8FF'}
                  >
                    DevOps
                  </Typography>
                  <Grid item display={'flex'} flexDirection={'row'} justifyContent={'center'} gap={6} xs={12}>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} gap={4} xs={3.5}>
                      <IconGit />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        Git
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}

      {!smDown && mdDown && (
        <Grid
          container
          bgcolor={'primary.main'}
          style={{
            minHeight: '120vh',
          }}
        >
          <Grid
            container
            justifyContent={'center'}
            sx={{
              pt: {
                xs: theme.spacing(12)
              },
              pl: {
                xs: theme.spacing(4)
              },
              pr: {
                xs: theme.spacing(4)
              },
            }}
          >
            <Grid
              item
              sm={12}
              display={'flex'}
              flexDirection={'column'}
              alignContent={'center'}
            >
              <Grid
                container
                justifyContent={'center'}
                alignContent={'center'}
                height={theme.spacing(8)}
              >
                <Typography
                  variant={'h5'}
                  textTransform={'capitalize'}
                  color={'#8CC8FF'}
                >
                  Skills
                </Typography>
              </Grid>
              <Grid
                container
                flexDirection={'row'}
                justifyContent={'center'}
                gap={2}
                height={theme.spacing(80)}
              >
                <Grid item display={'flex'} flexDirection={'column'} gap={2} mt={3} xs={12}>
                  <Typography
                    variant={'body1'}
                    textAlign={'center'}
                    textTransform={'capitalize'}
                    color={'#8CC8FF'}
                  >
                    Linguages
                  </Typography>
                  <Grid item display={'flex'} flexDirection={'row'} justifyContent={'center'} xs={12}>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} gap={4} xs={4}>
                      <IconTs />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        TypeScript
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} gap={4} xs={4}>
                      <IconJs />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        JavaScript
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item display={'flex'} flexDirection={'column'} alignItems={'center'} gap={2} xs={5.5}>
                  <Typography
                    variant={'body1'}
                    textTransform={'capitalize'}
                    color={'#8CC8FF'}
                  >
                    Front End
                  </Typography>
                  <Grid item display={'flex'} flexDirection={'column'} justifyContent={'center'} xs={12} gap={2}>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconReact />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        ReactJS
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconAngular />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        AngularJS
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconNext />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        NextJS
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconBootstrap />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        Bootstrap
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item display={'flex'} flexDirection={'column'} alignItems={'center'} gap={2} xs={5.5}>
                  <Typography
                    variant={'body1'}
                    textTransform={'capitalize'}
                    color={'#8CC8FF'}
                  >
                    Back End
                  </Typography>
                  <Grid item display={'flex'} flexDirection={'column'} justifyContent={'center'} xs={12}>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconNode />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        NodeJS
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconNest />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        NestJS
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconExpress />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        ExpressJS
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item display={'flex'} flexDirection={'column'} gap={2} mt={3} xs={12}>
                  <Typography
                    variant={'body1'}
                    textAlign={'center'}
                    textTransform={'capitalize'}
                    color={'#8CC8FF'}
                  >
                    Data Base
                  </Typography>
                  <Grid item display={'flex'} flexDirection={'row'} justifyContent={'center'} xs={12}>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} gap={4} xs={4}>
                      <IconMySQL />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        MySQL
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} gap={4} xs={4.5}>
                      <IconMongoDB />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        MongoDB
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item display={'flex'} flexDirection={'column'} gap={2} mt={3} xs={12}>
                  <Typography
                    variant={'body1'}
                    textAlign={'center'}
                    textTransform={'capitalize'}
                    color={'#8CC8FF'}
                  >
                    DevOps
                  </Typography>
                  <Grid item display={'flex'} flexDirection={'row'} justifyContent={'center'} gap={6} xs={12}>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} gap={4} xs={3.5}>
                      <IconGit />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        Git
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}

      {!smDown && !mdDown && lgDown && (
        <Grid
          container
          bgcolor={'primary.main'}
          style={{
            minHeight: '100vh',
          }}
        >
          <Grid
            container
            justifyContent={'center'}
            sx={{
              pt: {
                xs: theme.spacing(12)
              },
              pl: {
                xs: theme.spacing(4)
              },
              pr: {
                xs: theme.spacing(4)
              },
            }}
          >
            <Grid
              item
              xs={12}
              display={'flex'}
              flexDirection={'column'}
              alignContent={'center'}
            >
              <Grid
                container
                justifyContent={'center'}
                alignContent={'center'}
                height={theme.spacing(8)}
              >
                <Typography
                  variant={'h5'}
                  textTransform={'capitalize'}
                  color={'#8CC8FF'}
                >
                  Skills
                </Typography>
              </Grid>
              <Grid
                container
                flexDirection={'row'}
                justifyContent={'center'}
                gap={2}
                mt={6}
                height={theme.spacing(80)}
              >
                <Grid item display={'flex'} flexDirection={'column'} alignItems={'center'} gap={2} xs={2} height={'25%'}>
                  <Typography
                    variant={'body1'}
                    textAlign={'center'}
                    textTransform={'capitalize'}
                    color={'#8CC8FF'}
                  >
                    Linguages
                  </Typography>
                  <Grid item display={'flex'} flexDirection={'column'} justifyContent={'center'} xs={12} gap={2}>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} xs={12} gap={5}>
                      <IconTs />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        TypeScript
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} xs={12} gap={5}>
                      <IconJs />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        JavaScript
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item display={'flex'} flexDirection={'column'} alignItems={'center'} gap={2} xs={2} height={'45%'}>
                  <Typography
                    variant={'body1'}
                    textTransform={'capitalize'}
                    color={'#8CC8FF'}
                  >
                    Front End
                  </Typography>
                  <Grid item display={'flex'} flexDirection={'column'} justifyContent={'center'} xs={12} gap={2}>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconReact />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        ReactJS
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconAngular />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        AngularJS
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconNext />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        NextJS
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconBootstrap />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        Bootstrap
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item display={'flex'} flexDirection={'column'} alignItems={'center'} gap={2} xs={2} height={'35%'}>
                  <Typography
                    variant={'body1'}
                    textTransform={'capitalize'}
                    color={'#8CC8FF'}
                  >
                    Back End
                  </Typography>
                  <Grid item display={'flex'} flexDirection={'column'} justifyContent={'center'} xs={12}>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconNode />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        NodeJS
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconNest />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        NestJS
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconExpress />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        ExpressJS
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item display={'flex'} flexDirection={'column'} alignItems={'center'} gap={2} xs={2} height={'25%'}>
                  <Typography
                    variant={'body1'}
                    textAlign={'center'}
                    textTransform={'capitalize'}
                    color={'#8CC8FF'}
                  >
                    Data Base
                  </Typography>
                  <Grid item display={'flex'} flexDirection={'column'} justifyContent={'center'} xs={12} gap={2}>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconMySQL />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        MySQL
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconMongoDB />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        MongoDB
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item display={'flex'} flexDirection={'column'} gap={2} xs={2} height={'15%'}>
                  <Typography
                    variant={'body1'}
                    textAlign={'center'}
                    textTransform={'capitalize'}
                    color={'#8CC8FF'}
                  >
                    DevOps
                  </Typography>
                  <Grid item display={'flex'} flexDirection={'row'} justifyContent={'center'} gap={6} xs={12}>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconGit />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        Git
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}

      {!smDown && !mdDown && !lgDown && xlDown && (
        <Grid
          container
          bgcolor={'primary.main'}
          style={{
            minHeight: '100vh',
          }}
        >
          <Grid
            container
            justifyContent={'center'}
            sx={{
              pt: {
                xs: theme.spacing(12)
              },
              pl: {
                xs: theme.spacing(4)
              },
              pr: {
                xs: theme.spacing(4)
              },
            }}
          >
            <Grid
              item
              xs={12}
              display={'flex'}
              flexDirection={'column'}
              alignContent={'center'}
            >
              <Grid
                container
                justifyContent={'center'}
                alignContent={'center'}
                height={theme.spacing(8)}
              >
                <Typography
                  variant={'h5'}
                  textTransform={'capitalize'}
                  color={'#8CC8FF'}
                >
                  Skills
                </Typography>
              </Grid>
              <Grid
                container
                flexDirection={'row'}
                justifyContent={'center'}
                gap={2}
                mt={6}
                height={theme.spacing(80)}
              >
                <Grid item display={'flex'} flexDirection={'column'} alignItems={'center'} gap={2} xs={2} height={'25%'}>
                  <Typography
                    variant={'body1'}
                    textAlign={'center'}
                    textTransform={'capitalize'}
                    color={'#8CC8FF'}
                  >
                    Linguages
                  </Typography>
                  <Grid item display={'flex'} flexDirection={'column'} justifyContent={'center'} xs={12} gap={2}>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} xs={12} gap={5}>
                      <IconTs />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        TypeScript
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} xs={12} gap={5}>
                      <IconJs />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        JavaScript
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item display={'flex'} flexDirection={'column'} alignItems={'center'} gap={2} xs={2} height={'45%'}>
                  <Typography
                    variant={'body1'}
                    textTransform={'capitalize'}
                    color={'#8CC8FF'}
                  >
                    Front End
                  </Typography>
                  <Grid item display={'flex'} flexDirection={'column'} justifyContent={'center'} xs={12} gap={2}>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconReact />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        ReactJS
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconAngular />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        AngularJS
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconNext />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        NextJS
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconBootstrap />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        Bootstrap
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item display={'flex'} flexDirection={'column'} alignItems={'center'} gap={2} xs={2} height={'35%'}>
                  <Typography
                    variant={'body1'}
                    textTransform={'capitalize'}
                    color={'#8CC8FF'}
                  >
                    Back End
                  </Typography>
                  <Grid item display={'flex'} flexDirection={'column'} justifyContent={'center'} xs={12}>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconNode />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        NodeJS
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconNest />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        NestJS
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconExpress />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        ExpressJS
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item display={'flex'} flexDirection={'column'} alignItems={'center'} gap={2} xs={2} height={'25%'}>
                  <Typography
                    variant={'body1'}
                    textAlign={'center'}
                    textTransform={'capitalize'}
                    color={'#8CC8FF'}
                  >
                    Data Base
                  </Typography>
                  <Grid item display={'flex'} flexDirection={'column'} justifyContent={'center'} xs={12} gap={2}>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconMySQL />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        MySQL
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconMongoDB />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        MongoDB
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item display={'flex'} flexDirection={'column'} alignItems={'center'} gap={2} xs={2} height={'15%'}>
                  <Typography
                    variant={'body1'}
                    textAlign={'center'}
                    textTransform={'capitalize'}
                    color={'#8CC8FF'}
                  >
                    DevOps
                  </Typography>
                  <Grid item display={'flex'} flexDirection={'row'} justifyContent={'center'} xs={12}>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconGit />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        Git
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}

      {!smDown && !mdDown && !lgDown && !xlDown && xlUp && (
        <Grid
          container
          bgcolor={'primary.main'}
          style={{
            minHeight: '100vh',
          }}
        >
          <Grid
            container
            justifyContent={'center'}
            sx={{
              pt: {
                xs: theme.spacing(12)
              },
              pl: {
                xs: theme.spacing(4)
              },
              pr: {
                xs: theme.spacing(4)
              },
            }}
          >
            <Grid
              item
              xs={12}
              display={'flex'}
              flexDirection={'column'}
              alignContent={'center'}
            >
              <Grid
                container
                justifyContent={'center'}
                alignContent={'center'}
                height={theme.spacing(8)}
              >
                <Typography
                  variant={'h5'}
                  textTransform={'capitalize'}
                  color={'#8CC8FF'}
                >
                  Skills
                </Typography>
              </Grid>
              <Grid
                container
                flexDirection={'row'}
                justifyContent={'center'}
                gap={2}
                mt={6}
                height={theme.spacing(80)}
              >
                <Grid item display={'flex'} flexDirection={'column'} alignItems={'center'} gap={2} xs={2} height={'25%'}>
                  <Typography
                    variant={'body1'}
                    textAlign={'center'}
                    textTransform={'capitalize'}
                    color={'#8CC8FF'}
                  >
                    Linguages
                  </Typography>
                  <Grid item display={'flex'} flexDirection={'column'} justifyContent={'center'} xs={12} gap={2}>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} xs={12} gap={5}>
                      <IconTs />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        TypeScript
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} xs={12} gap={5}>
                      <IconJs />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        JavaScript
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item display={'flex'} flexDirection={'column'} alignItems={'center'} gap={2} xs={2} height={'45%'}>
                  <Typography
                    variant={'body1'}
                    textTransform={'capitalize'}
                    color={'#8CC8FF'}
                  >
                    Front End
                  </Typography>
                  <Grid item display={'flex'} flexDirection={'column'} justifyContent={'center'} xs={12} gap={2}>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconReact />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        ReactJS
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconAngular />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        AngularJS
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconNext />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        NextJS
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconBootstrap />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        Bootstrap
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item display={'flex'} flexDirection={'column'} alignItems={'center'} gap={2} xs={2} height={'35%'}>
                  <Typography
                    variant={'body1'}
                    textTransform={'capitalize'}
                    color={'#8CC8FF'}
                  >
                    Back End
                  </Typography>
                  <Grid item display={'flex'} flexDirection={'column'} justifyContent={'center'} xs={12}>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconNode />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        NodeJS
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconNest />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        NestJS
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconExpress />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        ExpressJS
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item display={'flex'} flexDirection={'column'} alignItems={'center'} gap={2} xs={2} height={'25%'}>
                  <Typography
                    variant={'body1'}
                    textAlign={'center'}
                    textTransform={'capitalize'}
                    color={'#8CC8FF'}
                  >
                    Data Base
                  </Typography>
                  <Grid item display={'flex'} flexDirection={'column'} justifyContent={'center'} xs={12} gap={2}>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconMySQL />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        MySQL
                      </Typography>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconMongoDB />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        MongoDB
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item display={'flex'} flexDirection={'column'} alignItems={'center'} gap={2} xs={2} height={'15%'}>
                  <Typography
                    variant={'body1'}
                    textAlign={'center'}
                    textTransform={'capitalize'}
                    color={'#8CC8FF'}
                  >
                    DevOps
                  </Typography>
                  <Grid item display={'flex'} flexDirection={'row'} justifyContent={'center'} gap={6} xs={12}>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} xs={12} gap={5}>
                      <IconGit />
                      <Typography
                        variant={'body2'}
                        textTransform={'capitalize'}
                        color={'primary.contrastText'}
                      >
                        Git
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}

    </>
  );
};