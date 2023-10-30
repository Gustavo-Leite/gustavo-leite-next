'use client';

import {
  Grid,
  ThemeProvider,
} from '@mui/material';

import { Theme } from '@/shared/themes';

import { 
  HardSkill,
  Me, 
  Skills,
  Footer
} from '@/components';

export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <Grid
        container
        overflow={'hidden'}
        bgcolor={'primary.main'}
        style={{
          minHeight: '100vh',
        }}
      >

        <Me />

        <Skills />

        
      </Grid>

      <HardSkill />

      <Footer />
      
    </ThemeProvider>
  );
}