import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import './Items.css';

class ItemsBorrowModal extends React.Component {
  state = {
    open: true,
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
        onTouchTap={this.handleClose}
        onClick={this.handleClose}
      />,
      <FlatButton
        className="borrow-button"
        label="BORROW"
        primary
        disabled={false}
        onTouchTap={this.handleClose}
      />
    ];

    return (
      <div>
        <RaisedButton label="Modal Dialog" onTouchTap={this.handleOpen} />
        <Dialog
          title="Borrow Item"
          actions={actions}
          modal
          open={this.state.open}
        >
          Do you want to request to borrow the “Lovely Image” from Mackenzie Kieran.
        </Dialog>
      </div>
    );
  }
}

export default ItemsBorrowModal;
