import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import registerServiceWorker from './registerServiceWorker';
import muiTheme from './config/theme';
import Layout from './components/Layout';
import Routes from './routes';

import './index.css';

injectTapEventPlugin();

const Boomtown = () => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Layout>
        <Routes />
      </Layout>
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
