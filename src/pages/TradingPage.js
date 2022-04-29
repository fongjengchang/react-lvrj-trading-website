import React from 'react';
// material
import { Container, Box, Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
// components
import Page from '../components/Page';
import { Chart, LongShort } from '../components/_external-pages/trading';
// ----------------------------------------------------------------------

export default function TradingPage() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <Page title="Trading | LVRJ">
      <Container maxWidth="xl" m={1}>
        <Box m={4} />
        <Grid container spacing={2}>
          <Grid item xs={12} lg={8} xl={9} sx={{ [theme.breakpoints.down('lg')]: { minHeight: 400 } }}>
            <Chart isLight={isLight} />
          </Grid>
          <Grid item xs={12} lg={4} xl={3}>
            <LongShort />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
