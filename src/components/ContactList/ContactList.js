import { Component } from 'react';
import PropTypes from 'prop-types';

import { ContactItem } from 'components/ContactList/ContactItem';
import styles from 'components/ContactList/ContactList.module.css';

export class ContactList extends Component {
  render() {
    return (
      <ul className={styles.contactList}>
        {this.props.contacts.map(contact => (
          <li key={contact.id} className={styles.contactListItem}>
            <ContactItem
              id={contact.id}
              name={contact.name}
              number={contact.number}
              deleteContact={this.props.deleteContact}
            />
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func,
};
