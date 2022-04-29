import React, { useState } from 'react';
import { withStyles, experimentalStyled as styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {
  ToggleButton,
  ToggleButtonGroup,
  Divider,
  Typography,
  Box,
  Slider,
  Stack,
  Paper,
  Tabs,
  Tab,
  TextField,
  IconButton,
  List,
  ListItem,
  Button,
  CircularProgress
} from '@material-ui/core';

const ToggleButtonStyle = withStyles((theme) => ({
  root: {
    width: '100%',
    '&.Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white
    },
    '&.Mui-selected:hover': {
      backgroundColor: theme.palette.primary.main
    }
  }
}))(ToggleButton);

const StopLessBadge = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(1),
  backgroundColor: theme.palette.error.main,
  borderRadius: theme.spacing(0.5),
  color: 'white'
}));

const LeverageBadge = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(1),
  backgroundColor: theme.palette.grey[300],
  borderRadius: theme.spacing(0.5),
  color: 'black'
}));

const TakeProfitBadge = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(1),
  backgroundColor: theme.palette.primary.light,
  borderRadius: theme.spacing(0.5),
  color: 'black'
}));

const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit'
    }
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)'
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider);

const StopLess = () => (
  <Box>
    <StopLessBadge>-$50.43</StopLessBadge>
    <Typography variant="body2">Stop Less</Typography>
  </Box>
);

const Leverage = () => (
  <Box>
    <LeverageBadge>50x</LeverageBadge>
    <Typography variant="body2">Leverage</Typography>
  </Box>
);

const TakeProfit = () => (
  <Box>
    <TakeProfitBadge>$599.31</TakeProfitBadge>
    <Typography variant="body2">Take Profit</Typography>
  </Box>
);

const profitsList = [
  {
    name: 'Profits In',
    value: 'BSC'
  },
  {
    name: 'Leverage',
    value: '2x'
  },
  {
    name: 'Entry Price',
    value: '$89.34'
  },
  {
    name: 'Liq. Price',
    value: '-'
  },
  {
    name: 'Fees',
    value: '-'
  }
];

export default function LongShort() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [longShort, setLongShort] = useState('long');

  const handleChange = (event, value) => {
    if (value !== null) {
      setLongShort(value);
    }
  };

  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Card>
      <CardContent>
        <ToggleButtonGroup
          size="small"
          sx={{ width: '100%' }}
          value={longShort}
          exclusive
          onChange={handleChange}
          aria-label="text alignment"
        >
          <ToggleButtonStyle value="long" aria-label="left aligned">
            <Stack direction="row" spacing={1}>
              <Typography variant="body2">Long</Typography>
              <Box component="img" sx={{ width: 15 }} src="/static/trading/long-btn-icon.svg" />
            </Stack>
          </ToggleButtonStyle>
          <ToggleButtonStyle value="short" aria-label="centered">
            <Stack direction="row" spacing={1}>
              <Typography variant="body2">Short</Typography>
              <Box component="img" sx={{ width: 15 }} src="/static/trading/short-btn-icon.svg" />
            </Stack>
          </ToggleButtonStyle>
        </ToggleButtonGroup>
        <Box m={2} />
        <Typography variant="body2" sx={{ textAlign: 'center' }}>
          Leverage Slider
        </Typography>
        <PrettoSlider max={250} valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
        <Stack direction="row" spacing={1} sx={{ justifyContent: 'space-around' }}>
          <Typography variant="body2">0X</Typography>
          <Typography variant="body2">10X</Typography>
          <Typography variant="body2">250X</Typography>
        </Stack>
        <Box m={2} />
        <Paper variant="outlined" sx={{ p: 1 }}>
          <Paper square>
            <Tabs
              value={selectedTab}
              variant="fullWidth"
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChangeTab}
              aria-label="disabled tabs example"
            >
              <Tab icon={<StopLess />} />
              <Tab icon={<Leverage />} />
              <Tab icon={<TakeProfit />} />
            </Tabs>
          </Paper>
          <Box m={2} />
          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            49.45% Of the Position Amount
          </Typography>
          <Box m={1} />
          <Divider />
          <Box m={1} />
          <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
            <CircularProgress
              sx={{ width: '20px !important', height: '20px !important' }}
              variant="determinate"
              value={100}
            />
            <Typography variant="body2">Trailing Stop Loss</Typography>
          </Stack>
          <Box m={2} />
          <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center">
            <IconButton aria-label="delete">
              <RemoveIcon />
            </IconButton>
            <TextField size="small" sx={{ '& .MuiOutlinedInput-input': { textAlign: 'center' } }} value={45345} />
            <IconButton aria-label="delete">
              <AddIcon />
            </IconButton>
          </Stack>
        </Paper>
        <Box m={2} />
        <Paper variant="outlined" sx={{ p: 1 }}>
          <List>
            {profitsList.map((item, index) => (
              <ListItem key={index} sx={{ justifyContent: 'space-between !important' }}>
                <Typography variant="body2">{item.name}</Typography>
                <Typography variant="body2">{item.value}</Typography>
              </ListItem>
            ))}
          </List>
        </Paper>

        <Box m={2} />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          startIcon={<Box component="img" src="/static/trading/connect-wallet-icon.svg" sx={{ width: 20 }} />}
        >
          Connect Wallet
        </Button>
      </CardContent>
    </Card>
  );
}
