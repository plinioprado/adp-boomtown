import React from 'react';
import PropTypes from 'prop-types';

import Foot from '../Foot';
import Head from '../Head';

import './styles.css';

const Layout = ({ pg, children }) => (
    <div className="appContentWrapper">
        <div className="appHeader">
            { pg !== 'login' ? <Head /> : null }
        </div>
        <div className="appContent">
            {children}
        </div>
        { pg !== 'login' ? <Foot /> : null }
    </div>
);

Layout.defaultProps = {
    children: null
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
