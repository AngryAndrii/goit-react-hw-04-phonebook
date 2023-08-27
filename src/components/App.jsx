import { useEffect, useState } from 'react';
import { Section } from './Section/Section';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const changeFilter = newFilter => {
    setFilter(newFilter);
  };

  const handleDelete = id => {
    setContacts(prevState => prevState.filter(el => el.id !== id));
  };

  const addToMainState = ({ name, number }) => {
    const isIn = contacts.some(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (isIn) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    console.log(contacts);
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const visibleContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Section title="Phonebook">
        <PhoneBook addToAppState={addToMainState} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} handleFilterChange={changeFilter} />
        <Contacts items={visibleContacts} deleteFunction={handleDelete} />
      </Section>
    </>
  );
};
