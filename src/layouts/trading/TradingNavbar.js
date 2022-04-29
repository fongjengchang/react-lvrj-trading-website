import { NavLink as RouterLink } from 'react-router-dom';
// material
import { Button, AppBar, Toolbar, Container } from '@material-ui/core';
// hooks
// components
import Logo from '../../components/Logo';

// ----------------------------------------------------------------------

export default function MainNavbar() {
  return (
    <AppBar sx={{ boxShadow: 0, position: 'relative' }}>
      <Toolbar disableGutters sx={{ bgcolor: 'background.default', boxShadow: 'none' }}>
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
          {/* <Box sx={{ flexGrow: 1 }} /> */}

          <Button variant="contained" target="_self" href="#">
            Join Presale
          </Button>
        </Container>
      </Toolbar>

      {/* {isOffset && <ToolbarShadowStyle />} */}
    </AppBar>
  );
}
