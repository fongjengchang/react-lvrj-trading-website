// scroll bar
import 'simplebar/src/simplebar.css';

import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// contexts
import { SettingsProvider } from './contexts/SettingsContext';
//
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

// import styling
import './assets/css/common.css';
import './assets/css/hero.css';
import './assets/css/navbar.css';
import './assets/css/trading-view.css';
import './assets/css/trading-dashboard.css';
import './assets/css/search-input.css';
import './assets/css/mobile-section.css';
import './assets/css/profile.css';
import './assets/css/popup.css';
import './assets/css/mobile-leaderboard.css';

// ----------------------------------------------------------------------

ReactDOM.render(
  <StrictMode>
    <HelmetProvider>
      <SettingsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SettingsProvider>
    </HelmetProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to enable client cache, register instead.
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
