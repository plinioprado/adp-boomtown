import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadFilterItems } from '../../actions/items';

let names = [];

class SelectFieldExampleMultiSelect extends Component {

  state = {
    values: [],
  };

  componentDidMount() {
    this.props.dispatch(loadFilterItems());
  }

  handleChange = (event, index, values) => this.setState({ values });

  // handleChange = (event, index, values) => this.props.dispatch(selectFilterItems(values));


  menuItems(values) {
    return names.map((name) => (
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

    names = this.props.filterList;
    const { values } = this.state;

    const childElements = names.map((name) => (
      <MenuItem
        key={name}
        insetChildren
        checked={values && values.indexOf(name) > -1}
        value={name}
        primaryText={name}
      />
    ));

    return (
      <SelectField
        multiple
        hintText="Select a name"
        value={values}
        onChange={this.handleChange}
      >
        {childElements}
      </SelectField>
    );
  }
}

SelectFieldExampleMultiSelect.propTypes = {
  filterList: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(store) {
  return {
    filterList: store.items.filterList
  };
}

export default connect(mapStateToProps)(SelectFieldExampleMultiSelect);
