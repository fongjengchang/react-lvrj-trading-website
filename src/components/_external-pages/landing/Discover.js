/* eslint-disable prefer-destructuring */
/* eslint-disable camelcase */
/* eslint-disable dot-notation */
import { motion } from 'framer-motion';
import React from 'react';
// material
import { experimentalStyled as styled, useTheme, withStyles } from '@material-ui/core/styles';
import { Typography, Stack, Button, Container, Box } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//
import { varWrapEnter, varFadeInUp } from '../../animate';
import { MHidden } from '../../@material-extend';

// const finnhub = require('finnhub');

// const api_key = finnhub.ApiClient.instance.authentications['api_key'];
// api_key.apiKey = 'c9r0paiad3ibg4fjln3g'; // Replace this
// ----------------------------------------------------------------------

const TableRowStyle = withStyles((theme) => ({
  root: {
    '& .MuiTableCell-root': {
      color: theme.palette.grey[0],
      fontFamily: 'BarlowExtraBoldItalic',
      [theme.breakpoints.down('md')]: {
        padding: 0,
        paddingTop: 5,
        paddingBottom: 5
      }
    },
    '& .MuiTableCell-head': {
      backgroundColor: '#1a1826',
      borderBottom: `solid 1px ${theme.palette.grey[500_48]}`,
      '&:first-child': {
        [theme.breakpoints.down('md')]: {
          paddingLeft: theme.spacing(1)
        }
      }
    },
    [theme.breakpoints.down('md')]: {
      '& .MuiTypography-subtitle1': {
        fontSize: 13
      }
    },
    '& .MuiTableCell-root:first-of-type, .MuiTableCell-root:last-of-type': {
      boxShadow: 'none',
      borderBottomLeftRadius: theme.spacing(0),
      borderBottomRightRadius: theme.spacing(0)
    }
  }
}))(TableRow);

const RootStyle = styled(motion.div)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  position: 'relative',
  backgroundColor: theme.palette.grey[900]
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5)
}));

function createData(markets, lastPrice, change, pChange) {
  return { markets, lastPrice, change, pChange };
}

const rows = [
  createData('Bitcoin', 1.08064, 1.08064, 0.4),
  createData('Solonar', 1.08064, 1.08064, 0.4),
  createData('Ethereum', 1.08064, 1.08064, 0.4),
  createData('Binance', 1.08064, 1.08064, 0.4),
  createData('Cardno', 1.08064, 1.08064, 0.4)
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
  <Table
    aria-label="simple table"
    sx={{ border: (theme) => `solid 1px ${theme.palette.grey[500_48]}`, borderRadius: '9px', borderCollapse: 'unset' }}
  >
    <TableHead>
      <TableRowStyle>
        <TableCell>MARKETS</TableCell>
        <TableCell align="center">LAST PRICE</TableCell>
        <TableCell align="center">CHANGE</TableCell>
        <TableCell align="center">% CHNAGE</TableCell>
      </TableRowStyle>
    </TableHead>
    <TableBody>
      {rows.map((row, i) => (
        <TableRowStyle key={i}>
          <TableCell component="th" scope="row">
            <Stack direction="row" spacing={0.5} alignItems="center">
              <Box component="img" src={`/static/landing/assets-${i + 1}.svg`} />
              <Typography variant="subtitle1" color="common.white">
                {row.markets}
              </Typography>
            </Stack>
          </TableCell>
          <TableCell align="center">
            <Typography variant="subtitle1" color="common.white">
              {row.lastPrice}
            </Typography>
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
        </TableRowStyle>
      ))}
    </TableBody>
  </Table>
);

export default function Discover() {
  // const finnhubClient = new finnhub.DefaultApi();
  // useEffect(() => {
  //   // Crypto candles
  //   finnhubClient.forexSymbols('OANDA', (error, data, response) => {
  //     console.log(data);
  //   });
  // }, []);
  const theme = useTheme();
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container sx={{ [theme.breakpoints.down('md')]: { padding: 0 } }}>
          <ContentStyle>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: 'BarlowExtraBoldItalic',
                  color: 'common.white',
                  textAlign: 'center'
                }}
              >
                DISCOVER{' '}
                <Typography
                  component="span"
                  variant="h2"
                  className="gradient-text"
                  sx={{ fontFamily: 'BarlowExtraBoldItalic' }}
                >
                  TRADABLE ASSETS
                </Typography>
              </Typography>
              <div
                style={{
                  width: 160,
                  height: 0,
                  border: '1px solid #FE00C0',
                  borderRadius: 5,
                  margin: 'auto',
                  marginTop: 20
                }}
              />
            </Box>

            <Box
              component="div"
              sx={{
                margin: 'auto !important',
                marginTop: '40px !important',
                display: 'flex',
                justifyContent: 'space-between',
                overflowX: 'auto',
                width: '100%',
                '& > *': { margin: `${theme.spacing(1)} !important` }
              }}
            >
              {discovers.map((item) => (
                <Button
                  key={item.name}
                  variant={item.name === 'All' ? 'contained' : 'outlined'}
                  size="large"
                  sx={{ minWidth: 160 }}
                >
                  <Typography variant="h5">{item.name}</Typography>
                </Button>
              ))}
            </Box>
            <Stack direction="row" spacing={3} sx={{ overflowX: 'auto' }}>
              <TableContent />
              <MHidden width="mdDown">
                <TableContent />
              </MHidden>
            </Stack>

            <motion.div variants={varFadeInUp}>
              <Button className="aped-button" variant="contained" target="_self" href="#">
                VIEW ALL
              </Button>
            </motion.div>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
