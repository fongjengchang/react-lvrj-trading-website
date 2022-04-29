import PropTypes from 'prop-types';
// material
import { useTheme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  const theme = useTheme();

  const isLight = theme.palette.mode === 'light';

  return (
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
  );
}
