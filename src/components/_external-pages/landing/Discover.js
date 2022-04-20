import { motion } from 'framer-motion';
// material
import { experimentalStyled as styled, useTheme } from '@material-ui/core/styles';
import { Divider, Typography, Stack, Button, Container, Box } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//
import { varWrapEnter } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[100]
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5)
}));

function createData(markets, lastPrice, change, pChange) {
  return { markets, lastPrice, change, pChange };
}

const rows = [
  createData('Bitcoin', 1.08064, 1.08064, 0.8),
  createData('Euro/USD', 1.08064, 1.08064, 0.8),
  createData('Microsoft', 1.08064, 1.08064, 0.8),
  createData('Curde Oile Future', 1.08064, 1.08064, 0.8),
  createData('NATGAS', 1.08064, 1.08064, 0.8),
  createData('MGM Resorts', 1.08064, 1.08064, 0.8)
];

const discovers = [
  {
    name: 'All',
    value: 85
  },
  {
    name: 'Crypto',
    value: 31
  },
  {
    name: 'Stocks',
    value: 21
  },
  {
    name: 'Comodities',
    value: 12
  },
  {
    name: 'Forex',
    value: 42
  }
];

// ----------------------------------------------------------------------

const TableContent = () => (
  <Table aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell>Markets</TableCell>
        <TableCell align="center">Last Price</TableCell>
        <TableCell align="center">Change</TableCell>
        <TableCell align="center">% Change</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row, i) => (
        <TableRow key={i}>
          <TableCell component="th" scope="row">
            <Stack direction="row" spacing={0.5} alignItems="center">
              <Box component="img" src={`/static/home/assets-${i + 1}.svg`} />
              <Typography variant="subtitle1">{row.markets}</Typography>
            </Stack>
          </TableCell>
          <TableCell align="center">
            <Typography variant="subtitle1">{row.lastPrice}</Typography>
          </TableCell>
          <TableCell align="center">
            <Typography variant="subtitle1" color={i === 2 || i === 4 ? 'error.main' : 'primary.main'}>
              {row.change}
            </Typography>
          </TableCell>
          <TableCell align="center">
            <Typography variant="subtitle1" color={i === 2 || i === 4 ? 'error.main' : 'primary.main'}>
              {row.pChange}
            </Typography>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default function Discover() {
  const theme = useTheme();
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container>
          <ContentStyle>
            <Typography
              variant="h2"
              sx={{
                color: 'common.black',
                textAlign: 'center',
                fontWeight: 100,
                fontFamily: 'JetBrains Mono, monospace'
              }}
            >
              Discover{' '}
              <Typography
                component="span"
                variant="h2"
                sx={{ fontWeight: 900, fontFamily: 'JetBrains Mono, monospace' }}
              >
                Tradable Assets
              </Typography>
            </Typography>

            <Box
              component="div"
              sx={{
                margin: 'auto !important',
                marginTop: '40px !important',
                display: 'flex',
                justifyContent: 'space-between',
                overflowX: 'auto',
                width: '100%',
                '& > *': { margin: `${theme.spacing(2)} !important` }
              }}
            >
              {discovers.map((item) => (
                <Button
                  key={item.name}
                  variant={item.name === 'All' ? 'contained' : 'outlined'}
                  size="large"
                  sx={{ minWidth: 160 }}
                >
                  <Typography variant="h5">
                    {item.name}
                    <span style={{ position: 'relative', top: '-5px', left: 2, fontSize: 12 }}>{item.value}</span>{' '}
                  </Typography>
                </Button>
              ))}
            </Box>
            <Stack direction="row" spacing={1} sx={{ overflowX: 'auto' }}>
              <TableContent />
              <Divider orientation="vertical" flexItem />
              <TableContent />
            </Stack>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
