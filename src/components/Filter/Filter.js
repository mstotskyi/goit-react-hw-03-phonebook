import { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

export class Filter extends Component {
  filter = uuid();
  render() {
    return (
      <>
        <label htmlFor={this.filter}>Find contacts by name</label>
        <br />
        <input
          id={this.filter}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={this.props.handleOnChangefilter}
        />
      </>
    );
  }
}

Filter.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.func,
  handleOnChangefilter: PropTypes.func,
};
