import { Component } from 'react';
import { Section } from './Section/Section';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  changeFilter = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  handleDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(el => el.id !== id),
      };
    });
  };

  addToMainState = ({ name, number }) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    const isIn = this.state.contacts.some(
      el => el.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isIn) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    this.setState({
      contacts: [
        ...this.state.contacts,
        { name: newContact.name, id: newContact.id, number: newContact.number },
      ],
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <Section title="Phonebook">
          <h2>{this.title}</h2>
          <PhoneBook
            appState={this.state}
            addToAppState={this.addToMainState}
          />
        </Section>
        <Section title="Contacts">
          <h2>{this.title}</h2>
          <Filter value={filter} handleFilterChange={this.changeFilter} />
          <Contacts
            items={visibleContacts}
            deleteFunction={this.handleDelete}
          />
        </Section>
      </>
    );
  }
}
