import { GlobalStyle } from 'GlobalStyle';
import { Layout } from 'Layout';
import { Component } from 'react';
import React from 'react';

import { Contacts } from './Contacts/Contacts';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
   contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

   componentDidMount() {
    const savedContscts = localStorage.getItem('contacts');
    if (savedContscts !== null) {
      this.setState({ contacts: JSON.parse(savedContscts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    const isDublicate = this.state.contacts.some(
      contact =>
        contact.name.toLowerCase() === newContact.name.toLowerCase() ||
        contact.number === newContact.number
    );

    this.setState(prevState => ({
      contacts: [...prevState.contacts, {
        id: nanoid(),
        ...newContact,
      },],
    }));
  };

  handleFiltrChange = value => {
    this.setState({ filter: value });
  };

  filterContacts = (contacts, filter) => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.filterContacts(contacts, filter);
    return (
      <Layout>
        <h1>Phonebook</h1>
        <Contacts onAdd={this.addContact}/>

        <h1>Contacts</h1>
        <Filter value={filter} onFilterChange={this.handleFiltrChange} />
        
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.handleDeleteContact}
        />

        <GlobalStyle />
      </Layout>
    );
  }
}
