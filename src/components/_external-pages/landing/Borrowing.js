import { motion } from 'framer-motion';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Container, Stack, Typography, Box } from '@material-ui/core';
//
import { varWrapEnter } from '../../animate';
import Image from '../../Image';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  textAlign: 'left',
  padding: theme.spacing(0, 0, 15, 0),
  backgroundColor: theme.palette.grey[900]
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(10)
}));

const BoxStyle = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: 'rgba(255, 255, 255, 0.02)',
  padding: theme.spacing(10),
  backdropFilter: 'blur(445px)',
  color: 'white',
  border: '3px solid rgba(255, 255, 255, 0.16)',
  borderRadius: 10
}));

// ----------------------------------------------------------------------

export default function Borrowing() {
  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <Container sx={{ position: 'relative' }}>
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
              1000X LEVERAGE, NO BORROWING FEES,
              <br />
              NO OPEN INTEREST
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
        </ContentStyle>

        <BoxStyle>
          <Image
            src="/static/landing/discover-heor.png"
            sx={{ position: 'absolute', left: 70, top: -70, zIndex: 10 }}
          />
          <Stack spacing={4} sx={{ marginLeft: 40 }}>
            <Stack direction="row" spacing={3} alignItems="center">
              <Box
                sx={{
                  width: 16,
                  height: 13,
                  background: 'linear-gradient(90deg, #FD02BD -9.8%, #5600C4 100%)',
                  borderRadius: '50%'
                }}
              />
              <Typography variant="body1" sx={{ fontFamily: 'BarlowRegular' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </Typography>
            </Stack>

            <Stack direction="row" spacing={3} alignItems="center">
              <Box
                sx={{
                  width: 16,
                  height: 13,
                  background: 'linear-gradient(90deg, #FD02BD -9.8%, #5600C4 100%)',
                  borderRadius: '50%'
                }}
              />
              <Typography variant="body1" sx={{ fontFamily: 'BarlowRegular' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </Typography>
            </Stack>
          </Stack>
        </BoxStyle>
        <Image
          src="/static/landing/pink-ellipse-left.png"
          sx={{ position: 'absolute', left: 0, top: 60, transform: 'translate(-50%, -15%)', zIndex: 10 }}
        />
        <Image
          src="/static/landing/borrow-ellipse.png"
          sx={{ position: 'absolute', right: 0, top: 60, transform: 'translate(50%, -25%)' }}
        />
      </Container>
    </RootStyle>
  );
}
