import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';

import { ApolloProvider } from 'react-apollo';
import client from './config/apolloClient';


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
    <ApolloProvider client={client} store={store}>
      <ConnectedRouter history={history}>
        <Layout>
          <Routes />
        </Layout>
      </ConnectedRouter>
    </ApolloProvider>
  </MuiThemeProvider>
);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
