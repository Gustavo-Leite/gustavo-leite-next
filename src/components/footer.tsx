import {
  Grid,
  Button,
  Link,
  useTheme
} from '@mui/material';

export const Footer = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      bgcolor={'primary.main'}
      justifyContent={'center'}
      minHeight={theme.spacing(4)}
      maxHeight={theme.spacing(8)}
    >
      <Grid item>
        <Button
          variant={'text'}
          size={'small'}
          href={'/dashboard'}
          LinkComponent={Link}
          sx={{
            color: '#8CC8FF',
            textTransform: 'uppercase',
            fontSize: '1rem'
          }}
        >
            Em breve irei adicionar a seção de projetos! 
        </Button>
      </Grid>
    </Grid>
  );
};