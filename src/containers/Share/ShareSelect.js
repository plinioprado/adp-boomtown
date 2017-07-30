import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class ShareSelect extends Component {
  state = {
    values: [],
  };

  options = this.props.filterList;

  handleChange = (event, index, values) => this.setState({ values });

  menuItems = (values) => {
    return this.options.map((name) => (
      <MenuItem
        key={name}
        insetChildren
        checked={values && values.indexOf(name) > -1}
        value={name}
        primaryText={name}
      />
    ));
  }

  render() {
    const { values } = this.state;
    return (
      <SelectField
        multiple
        hintText="Select a name"
        value={values}
        onChange={this.handleChange}
      >
        {this.menuItems(values)}
      </SelectField>
    );
  }
}

ShareSelect.propTypes = {
  filterList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function mapStateToProps(store) {
  return {
    filterList: store.items.filterList
  };
}

export default connect(mapStateToProps)(ShareSelect);
