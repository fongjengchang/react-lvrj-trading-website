import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
// material
import { useTheme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  const theme = useTheme();
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const isLight = theme.palette.mode === 'light';

  return (
    <>
      {isHome && (
        <Box
          component="img"
          src="/static/brand/dark-lvrj-logo.svg"
          sx={{ height: 30, ...sx, [theme.breakpoints.up('md')]: { height: 40 } }}
        />
      )}
      {!isHome && (
        <>
          {isLight ? (
            <Box
              component="img"
              src="/static/brand/light-lvrj-logo.svg"
              sx={{ height: 30, ...sx, [theme.breakpoints.up('md')]: { height: 40 } }}
            />
          ) : (
            <Box
              component="img"
              src="/static/brand/dark-lvrj-logo.svg"
              sx={{ height: 30, ...sx, [theme.breakpoints.up('md')]: { height: 40 } }}
            />
          )}
        </>
      )}
    </>
  );
}
