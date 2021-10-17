import './App.css';
import { Component } from 'react';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // форма
  addNewCntacts = obj => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, obj],
      };
    });
  };

  //фільтр

  handleOnChangefilter = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  contactsFilter = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );
  };

  // видалення контакту

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const filteredContacts = this.contactsFilter();
    const { contacts, filter } = this.state.contacts;
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm
          addNewCntacts={this.addNewCntacts}
          contacts={this.state.contacts}
        />
        <div className="contacts-wrapper">
          <h2 className="contacts-title">Contacts</h2>
          <Filter
            contacts={contacts}
            filter={filter}
            handleOnChangefilter={this.handleOnChangefilter}
          />
          <ContactList
            contacts={filteredContacts}
            deleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}

export default App;
