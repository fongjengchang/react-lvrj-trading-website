import { motion } from 'framer-motion';
// material
import { experimentalStyled as styled, useTheme } from '@material-ui/core/styles';
import { Box, Typography, Stack } from '@material-ui/core';
//
import { varWrapEnter, varFadeInRight } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[100]
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15)
}));

// ----------------------------------------------------------------------

export default function JoinOurComunity() {
  const theme = useTheme();
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <ContentStyle>
          <motion.div variants={varFadeInRight}>
            <Typography
              variant="h2"
              sx={{ color: 'common.black', textAlign: 'center', fontWeight: 100, fontFamily: 'monospace' }}
            >
              Join Our
              <Typography component="span" variant="h2" sx={{ fontWeight: 900, fontFamily: 'monospace' }}>
                {' '}
                Community
              </Typography>
            </Typography>
          </motion.div>

          <motion.div variants={varFadeInRight}>
            <Stack direction="row" spacing={10} justifyContent="center" alignItems="center">
              {[...Array(3)].map((_, i) => (
                <Box
                  key={i}
                  component="img"
                  src={`/static/home/community-${i + 1}.svg`}
                  sx={{ height: 40, [theme.breakpoints.up('md')]: { height: 100 } }}
                />
              ))}
            </Stack>
          </motion.div>
        </ContentStyle>
      </RootStyle>
    </>
  );
}
