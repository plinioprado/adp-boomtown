import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import muiTheme from './config/theme';

import Layout from './components/Layout';
import Login from './containers/Login';
import Items from './containers/Items';
import Profile from './containers/Profile';
import Share from './containers/Share';
import NotFound from './components/NotFound';

injectTapEventPlugin();

const Boomtown = () => {
    const pg = 'profile';
    let content;

    if (pg === 'login') {
        content = <Login />;
    } else if (pg === 'items') {
        content = <Items />;
    } else if (pg === 'profile') {
        content = <Profile />;
    } else if (pg === 'share') {
        content = <Share />;
    } else {
        content = <NotFound />;
    }

    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <Layout pg={pg}>
                { content }
            </Layout>
        </MuiThemeProvider>
    );
};

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
