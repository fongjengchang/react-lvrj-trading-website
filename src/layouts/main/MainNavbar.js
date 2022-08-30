import { NavLink as RouterLink, useLocation } from 'react-router-dom';
// material
import { Box, Button, AppBar, Toolbar, Container, Stack } from '@material-ui/core';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
// components
import Logo from '../../components/Logo';
// import Label from '../../components/Label';
import Image from '../../components/Image';
import { MHidden } from '../../components/@material-extend';
//
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import navConfig from './MenuConfig';

// ----------------------------------------------------------------------

const socialIcons = [
  { title: 'medium', src: '/static/socials/social-medium.png' },
  { title: 'discord', src: '/static/socials/social-discord.png' },
  { title: 'twitter', src: '/static/socials/social-twitter.png' }
];

export default function MainNavbar() {
  const isOffset = useOffSetTop(100);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <AppBar
      sx={{ boxShadow: 0, position: 'absolute', top: 0, left: 0, width: '100%', backgroundColor: 'rgba(0,0,0,0)' }}
    >
      <Toolbar>
        <Container
          maxWidth="xl"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <RouterLink to="/">
            <Logo />
          </RouterLink>
          <Box sx={{ flexGrow: 1 }} />

          <MHidden width="mdDown">
            <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
            <Stack direction="row" spacing={3}>
              {socialIcons.map((icon) => (
                <Image key={icon.title} src={icon.src} />
              ))}
            </Stack>
            <Button className="aped-button" variant="contained" target="_self" href="#" sx={{ marginLeft: 9 }}>
              JOIN WAITLIST
            </Button>
          </MHidden>
          <MHidden width="mdUp">
            <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
          </MHidden>
        </Container>
      </Toolbar>

      {/* {isOffset && <ToolbarShadowStyle />} */}
    </AppBar>
  );
}
