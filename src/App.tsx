import './reset.css'
import * as React from 'react';
import { Pagination, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import fakeNews from './assets/example.json'
import Header from './components/Header';
import ArticleForm from './components/ArticleForm';
import ArticleAccordion from './components/ArticleAccordion';

export default function App() {
  // const T = 30
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  return (
    <>
      <Header />
      <Grid container spacing={{ xs: 0 }} columns={{ xs: 4, sm: 8, md: 8, lg: 8 }} >
        <Grid size={{ xs: 4, sm: 8, md: 8, lg: 8 }} display="flex" justifyContent="center" alignItems="center">
          <ArticleForm />
        </Grid>
        <Grid  size={{ xs: 4, sm: 8, md: 8, lg: 8 }} display="flex" flexDirection="column" justifyContent="center" alignItems="center" rowGap={1}>
          <ArticleAccordion data={fakeNews}/>
        </Grid>
        <Grid size={{ xs: 4, sm: 8, md: 8, lg: 8 }} display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{}}>
          <Pagination count={10} size={isXs ? "small" : "large"} showFirstButton showLastButton sx={{ mt:5, mb: 5 }} />
        </Grid>
      </Grid>
    </>
  );
}

