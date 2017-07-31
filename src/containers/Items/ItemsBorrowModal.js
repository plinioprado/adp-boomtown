import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import './Items.css';

class ItemsBorrowModal extends React.Component {
  state = {
    open: (true),
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton
        label="CANCEL"
        primary
        onClick={this.handleClose}
      />,
      <FlatButton
        className="borrow-button"
        label="BORROW"
        primary
        disabled={false}
      />
    ];

    return (
      <div>
        <RaisedButton label="Modal Dialog" />
        <Dialog
          title="Borrow Item"
          actions={actions}
          modal
          open={this.state.open}
        >
          Do you want to request to borrow the “{this.props.modalItem.title}” from {this.props.modalItem.ownerName}.
        </Dialog>
      </div>
    );
  }
}

const updItemBorrower = gql`
   mutation updItemBorrower (
    $id: ID!
    $borrower: ID!
  ) {
    updItemBorrower(
      id: $id
      borrower: $borrower
    ) 
  }
`;

ItemsBorrowModal.propTypes = {
  modalItem: PropTypes.objectOf(PropTypes.any).isRequired
};

export default graphql(updItemBorrower, {
  options: (props) => ({ variables: {
    id: props.modalItem.id,
    borrower: props.modalItem.id
  } }),
})(ItemsBorrowModal);

