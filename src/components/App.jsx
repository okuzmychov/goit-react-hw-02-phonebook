import { GlobalStyle } from 'GlobalStyle';
import { Layout } from 'Layout';
import { Component } from 'react';
import { Contacts } from './Contacts/Contacts';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  render() {
    const { contacts, name, number, searchContact } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchContact.toLowerCase())
    );

    return (
      <Layout>
        <h1>Phonebook</h1>
        <InputName
          name={name}
          number={number}
          onChangeName={this.handleNameChange}
          onChangeNumber={this.handleNumberChange}
          onAddContact={this.handleAddContact}
        />
        <SearchField value={searchContact} onChange={this.handleSearchChange} />
        <h1>Contacts</h1>
        <Contacts
          contactInfo={{ contacts: filteredContacts }}
          onDeleteContact={this.handleDeleteContact}
        />
        <GlobalStyle />
      </Layout>
    );
  }
}
