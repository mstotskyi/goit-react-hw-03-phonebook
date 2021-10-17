import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from 'components/ContactList/ContactList.module.css';

export class ContactItem extends Component {
  render() {
    return (
      <>
        <span className={styles.contactName}>{this.props.name}:</span>
        <span> {this.props.number}</span>
        <button
          className={styles.contactDeleteBtn}
          type="button"
          id={this.props.id}
          onClick={() => {
            this.props.deleteContact(this.props.id);
          }}
        >
          Delete
        </button>
      </>
    );
  }
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func,
};
