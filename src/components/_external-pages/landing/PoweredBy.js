import { motion } from 'framer-motion';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Stack } from '@material-ui/core';
//
import { varWrapEnter, varFadeInRight } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[800],
  border: `1px solid ${theme.palette.grey[500_32]}`
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10)
}));

// ----------------------------------------------------------------------

export default function PoweredBy() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <ContentStyle>
          <motion.div variants={varFadeInRight}>
            <Stack direction="row" spacing={5} justifyContent="space-around" alignItems="center">
              <Box component="img" src="/static/home/chainlink.svg" sx={{ height: 40 }} />
              <Box component="img" src="/static/home/polygon.png" sx={{ height: 30 }} />
              <Box component="img" src="/static/home/chainlink.svg" sx={{ height: 40 }} />
              <Box component="img" src="/static/home/polygon.png" sx={{ height: 30 }} />
              <Box component="img" src="/static/home/chainlink.svg" sx={{ height: 40 }} />
              <Box component="img" src="/static/home/polygon.png" sx={{ height: 30 }} />
            </Stack>
          </motion.div>
        </ContentStyle>
      </RootStyle>
    </>
  );
}
