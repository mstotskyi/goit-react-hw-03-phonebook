import './App.css';
import { Component } from 'react';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const localContacts = JSON.parse(localStorage.getItem('localContacts'));
    if (localContacts) {
      this.setState({ contacts: localContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(
        'localContacts',
        JSON.stringify(this.state.contacts),
      );
    }
  }

  componentWillUnmount() {}
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
