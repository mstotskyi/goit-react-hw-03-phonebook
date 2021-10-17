import { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

import styles from 'components/ContactForm/ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  name = uuid();
  number = uuid();

  handleOnSubmit = e => {
    e.preventDefault();
    const obj = {
      name: this.state.name,
      number: this.state.number,
      id: uuid(),
    };
    const existedContact = this.props.contacts.some(
      element =>
        element.name.toLocaleLowerCase() === obj.name.toLocaleLowerCase(),
    );
    //  this.props.newExistedContact(obj);

    if (existedContact) {
      return alert(`${obj.name} is already in the contact list`);
    }
    this.props.addNewCntacts(obj);
    this.resetForm();
  };

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit} className={styles.form}>
        <label htmlFor={this.name} className={styles.label}>
          Name
        </label>
        <br />
        <input
          className={styles.formInput}
          id={this.name}
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={this.handleOnChange}
        />
        <br />
        <label htmlFor={this.number} className={styles.label}>
          Number
        </label>
        <br />
        <input
          className={styles.formInput}
          id={this.number}
          type="tel"
          name="number"
          value={this.state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={this.handleOnChange}
        />
        <br />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.array,
  addNewCntacts: PropTypes.func,
};
