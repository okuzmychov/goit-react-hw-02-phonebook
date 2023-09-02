import { GlobalStyle } from 'GlobalStyle';
import { Layout } from 'Layout';
import { Component } from 'react';

import { Contacts } from './Contacts/Contacts';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = newContact => {
    this.setState(pState => ({
      contacts: [...pState.contacts, newContact],
    }))
  }


  render() {
    const { contacts, name } = this.state;

    return (
      <Layout>
        <h1>Phonebook</h1>
        <Contacts addContact={this.addContact}/>

        <h1>Contacts</h1>
        {/* <Filter />
        <ContactsList contacts={contacts}/> */}
        
        <GlobalStyle />
      </Layout>
    );
  }
}
