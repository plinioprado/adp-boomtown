import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Foot from '../Foot';
import Head from '../Head';

import './styles.css';

const Layout = ({ children, logged }) => (
  <div className="appContentWrapper">
    <div className="appHeader">
      { logged ? <Head /> : null }
    </div>
    <div className="appContent">
      {children}
    </div>
    <FloatingActionButton backgroundColor="#000" className="item-list-button">
      <ContentAdd />
    </FloatingActionButton>
    <footer className="appFooter">
      { logged ? <Foot /> : null }
    </footer>
  </div>
  );

Layout.defaultProps = {
  children: null,
  logged: PropTypes.bool.isRequired
};

Layout.propTypes = {
  children: PropTypes.node,
  logged: PropTypes.bool.isRequired
};

function mapStateToProps(store) {
  return {
    logged: store.logged
  };
}

export default connect(mapStateToProps)(Layout);
