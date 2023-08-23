import { Component } from 'react';

export class PhoneBook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addToAppState(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Name
            <input
              type="text"
              name="name"
              placeholder="joe"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleInputChange}
              value={this.state.name}
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
              onChange={this.handleInputChange}
              value={this.state.number}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
