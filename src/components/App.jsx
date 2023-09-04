import { GlobalStyle } from 'GlobalStyle';
import { Layout } from 'Layout';
import { Component } from 'react';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

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

 onSubmitForm = contact => {
    if (this.state.contacts.some(el => el.number === contact.number)) {
      alert(
        `This number (${
          contact.number
        }) is already in the contact list, recorded as ${
          this.state.contacts.find(el => el.number === contact.number).name
        }`
      );
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  onChange = filter => {
    this.setState({ filter: filter.toLowerCase() });
  };

  onDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    return (
      <Layout>
      <Section title={'Phonebook'}>
        <ContactForm onSubmit={this.onSubmitForm} />
        </Section>
        <Section title={'Contacts'}>
          <Filter onChange={this.onChange} />
          {this.state.contacts.length ? (
            <ContactList
              contacts={this.state.contacts.filter(el =>
                el.name.toLowerCase().includes(this.state.filter)
              )}
              onDelete={this.onDelete}
            />
          ) : (
            <p>No contacts</p>
          )}
        </Section>
        <GlobalStyle />
      </Layout>
    );
  }
}
