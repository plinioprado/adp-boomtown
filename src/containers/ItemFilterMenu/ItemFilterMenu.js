import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadFilterItems, selectFilterItems } from '../../actions/items';

let names = [];

class SelectFieldExampleMultiSelect extends Component {

  componentDidMount() {
    this.props.dispatch(loadFilterItems());
  }

  handleChange = (event, index, filterValues) => this.props.dispatch(selectFilterItems(this.props.itemsData, filterValues));

  menuItems(filterValues) {
    return names.map((name) => (
      <MenuItem
        key={name}
        insetChildren
        checked={filterValues && filterValues.indexOf(name) > -1}
        value={name}
        primaryText={name}
      />
    ));
  }

  render() {

    names = this.props.filterList;
    const filterValues = this.props.filterValues;

    const childElements = names.map((name) => (
      <MenuItem
        key={name}
        insetChildren
        checked={filterValues && filterValues.indexOf(name) > -1}
        value={name}
        primaryText={name}
      />
    ));

    return (
      <SelectField
        multiple
        hintText="Select a name"
        value={filterValues}
        onChange={this.handleChange}
      >
        {childElements}
      </SelectField>
    );
  }
}

SelectFieldExampleMultiSelect.propTypes = {
  filterList: PropTypes.arrayOf(PropTypes.string).isRequired,
  filterValues: PropTypes.arrayOf(PropTypes.string).isRequired,
  itemsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(store) {
  return {
    filterList: store.items.filterList,
    filterValues: store.items.filterValues,
    itemsData: store.items.itemsData
  };
}

export default connect(mapStateToProps)(SelectFieldExampleMultiSelect);
