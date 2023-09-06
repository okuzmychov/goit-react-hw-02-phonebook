import { GlobalStyle } from 'GlobalStyle';
import { Layout } from 'Layout';
import { Component } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

 onSubmitForm = newContact => {
    const isDublicate = this.state.contacts.some(
      contact =>
        contact.name.toLowerCase() === newContact.name.toLowerCase() ||
        contact.number === newContact.number
    );

    if (isDublicate) {
      toast.error(
        'A contact with this name or number is already in the list!',
        {
          position: 'top-right',
          autoClose: 2500,
          theme: 'colored',
        }
      );
      return;
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
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
        <ToastContainer />
        <GlobalStyle />
      </Layout>
    );
  }
}
