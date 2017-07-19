import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';


import store from './store/store';
import registerServiceWorker from './registerServiceWorker';
import muiTheme from './config/theme';
import Layout from './components/Layout';
import Routes from './routes';

import './index.css';

export const history = createHistory();

injectTapEventPlugin();

const Boomtown = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Layout>
          <Routes />
        </Layout>
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
