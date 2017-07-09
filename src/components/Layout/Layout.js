import React from 'react';
import PropTypes from 'prop-types';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Foot from '../Foot';
import Head from '../Head';

import './styles.css';

const Layout = ({ children }) => {
  const pg = '';

  return (
    <div className="appContentWrapper">
      <div className="appHeader">
        { pg !== 'login' ? <Head /> : null }
      </div>
      <div className="appContent">
        {children}
      </div>
      <FloatingActionButton backgroundColor="#000" className="item-list-button">
        <ContentAdd />
      </FloatingActionButton>
      <footer className="appFooter">
        { pg !== 'login' ? <Foot /> : null }
      </footer>
    </div>
  );
};

Layout.defaultProps = {
  children: null
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
