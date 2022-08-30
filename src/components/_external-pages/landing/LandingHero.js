import { motion } from 'framer-motion';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Button, Container, Typography, Stack } from '@material-ui/core';
// routes
//
import { varFadeInLeft, varWrapEnter, varFadeInRight } from '../../animate';
// components
import Image from '../../Image';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: 'black',
  paddingTop: theme.spacing(14),
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  }
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 600,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    marginLeft: theme.spacing(5),
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
    textAlign: 'left'
  }
}));

const HeroImgContainer = styled(motion.div)(() => ({
  position: 'relative',
  right: '-24px',
  zIndex: 10
}));

const HeroImgStyle = styled(motion.img)(() => ({
  width: 'auto'
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="xl">
          <Stack direction="row" spacing={1} justifyContent="space-between">
            <ContentStyle>
              <motion.div variants={varFadeInRight}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <div style={{ width: 73, height: 0, border: '2px solid #FE00C0', borderRadius: 5 }} />
                  <Typography
                    sx={{
                      fontSize: '22px',
                      color: '#FE00C0'
                    }}
                  >
                    TRADE
                  </Typography>
                </Stack>

                <Typography
                  sx={{
                    fontSize: '54px',
                    lineHeight: '66px',
                    fontFamily: 'BarlowExtraBoldItalic',
                    color: 'common.white',
                    textAlign: 'left',
                    fontWeight: 900
                  }}
                >
                  CRYPTOS, STOCKS, <br />
                  COMMODITIES AND
                  <br />
                  FOREX WITH <span className="leverage-text">LEVERAGE!</span>
                </Typography>
              </motion.div>

              <Stack
                direction="column"
                spacing={1.5}
                justifyContent={{ xs: 'left', md: 'flex-start', marginTop: '10px !important' }}
              >
                {[...Array(3)].map((_, index) => (
                  <Stack
                    key={index}
                    component={motion.div}
                    variants={varFadeInRight}
                    direction="row"
                    spacing={1}
                    justifyContent={{ xs: 'center', md: 'flex-start' }}
                  >
                    <img alt="sketch icon" src="/static/landing/star.png" width={20} height={20} />
                    <Typography
                      variant="body2"
                      color="common.white"
                      sx={{ fontWeight: '100 !important', fontFamily: 'sans-serif' }}
                    >
                      <b>Milestone {index + 1}:</b> First 100,000 users get 20 LVRJ
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <motion.div variants={varFadeInRight}>
                <Button className="aped-button" variant="contained" target="_self" href="#">
                  JOIN WAITLIST
                </Button>
              </motion.div>
            </ContentStyle>

            <HeroImgContainer>
              <HeroImgStyle alt="hero" src="/static/landing/desktop-trading-hero.png" variants={varFadeInRight} />
              <HeroImgStyle
                alt="hero"
                src="/static/landing/phone-list-hero.png"
                variants={varFadeInLeft}
                sx={{ position: 'absolute', top: 15, left: '-165px' }}
              />
              <Image
                src="/static/landing/astronaut.png"
                sx={{ position: 'absolute', left: '-380px', bottom: '-70px', zIndex: 10 }}
              />
            </HeroImgContainer>
          </Stack>

          <Image
            src="/static/landing/pink-ellipse-left.png"
            sx={{ position: 'absolute', left: 0, top: 60, transform: 'translate(-30%, -25%)' }}
          />

          <Image src="/static/landing/grey-ellipse-2.png" sx={{ position: 'absolute', right: 0, top: 0, zIndex: 1 }} />
          <Image
            src="/static/landing/grey-ellipse-1.png"
            sx={{ position: 'absolute', right: 100, top: 0, zIndex: 1 }}
          />
        </Container>
      </RootStyle>
    </>
  );
}
