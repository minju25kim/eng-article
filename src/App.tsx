import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: theme.spacing(2),
  display: "flex",
  flexFlow:"row wrap",
  justifyContent:"center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));



export default function App() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const T = 30
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid size={{ xs: 4, sm: 8, md: 12 }} sx={{ border: '0.5px solid red' }}>
          <Item variant="outlined" square>form to submit</Item>
        </Grid>
        <Grid size={{ xs: 4, sm: 8, md: 12 }} sx={{ border: '0.5px solid red' }}>
          <Item variant="outlined" square>
            <Typography>Page: {page}</Typography>
          </Item>
          {Array(T).fill(0).map((_, i) => (
            <Item key={i} variant="outlined" square>{i + 1} outlined square</Item>
          ))}
        </Grid>
        <Grid size={{ xs: 4, sm: 8, md: 12 }} sx={{ border: '0.5px solid red' }}>
          <Item variant="outlined" square>
            <Pagination count={10} boundaryCount={10} page={page} onChange={handleChange} size="small" showFirstButton showLastButton />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

