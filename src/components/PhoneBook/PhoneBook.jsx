import { useState } from 'react';

export const PhoneBook = ({ addToAppState }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChangeName = event => {
    setName(event.target.value);
  };

  const handleInputChangeNumber = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    addToAppState({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          Name
          <input
            type="text"
            name="name"
            placeholder="joe"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleInputChangeName}
            value={name}
          />
        </label>
        <label htmlFor="">
          Number
          <input
            type="tel"
            name="number"
            placeholder="123-45-67"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleInputChangeNumber}
            value={number}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
