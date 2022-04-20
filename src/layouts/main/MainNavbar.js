import { NavLink as RouterLink, useLocation } from 'react-router-dom';
// material
import { useTheme } from '@material-ui/core/styles';
import { Box, Button, AppBar, Toolbar, Container } from '@material-ui/core';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
// components
import Logo from '../../components/Logo';
// import Label from '../../components/Label';
import { MHidden } from '../../components/@material-extend';
//
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import navConfig from './MenuConfig';

// ----------------------------------------------------------------------

// const APP_BAR_MOBILE = 64;
// const APP_BAR_DESKTOP = 88;

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const theme = useTheme();
  const isOffset = useOffSetTop(100);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <AppBar sx={{ boxShadow: 0, position: 'relative' }}>
      <Toolbar sx={{ backgroundColor: theme.palette.grey[900] }}>
        <Container
          maxWidth="lg"
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
          </MHidden>
          <Button variant="contained" target="_self" href="#">
            Join Presale
          </Button>
          <MHidden width="mdUp">
            <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
          </MHidden>
        </Container>
      </Toolbar>

      {/* {isOffset && <ToolbarShadowStyle />} */}
    </AppBar>
  );
}
