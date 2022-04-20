import { motion } from 'framer-motion';
// material
import { experimentalStyled as styled, useTheme } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
//
import { varWrapEnter } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(() => ({
  position: 'relative',
  textAlign: 'center'
}));

const LeverageImgStyle = styled('img')(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('md')]: {
    minHeight: 200
  }
}));

// ----------------------------------------------------------------------

export default function Borrowing() {
  const theme = useTheme();
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Box
          sx={{
            position: 'absolute',
            width: 300,
            paddingTop: theme.spacing(2),
            left: '50%',
            transform: 'translateX(-50%)',
            [theme.breakpoints.up('md')]: {
              width: 750,
              paddingTop: theme.spacing(5)
            },
            [theme.breakpoints.up('lg')]: {
              width: 1150,
              paddingTop: theme.spacing(10)
            }
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: 'common.black',
              textAlign: 'center',
              fontWeight: 900,
              width: '100%',
              fontFamily: 'monospace',
              [theme.breakpoints.down('md')]: {
                fontSize: 30
              }
            }}
          >
            1000x Leverage, No Borrowing Fees, No Open Interest
          </Typography>
        </Box>
        <LeverageImgStyle alt="leverage" src="/static/home/1000x-leverage.png" />
      </RootStyle>
    </>
  );
}
