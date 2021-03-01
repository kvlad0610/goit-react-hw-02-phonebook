import { Component } from 'react';
import { form, label, input, button } from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className={form}>
          <label className={label}>
            Name <br />
            <input
              className={input}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label className={label}>
            Number <br />
            <input
              className={input}
              type="text"
              name="number"
              value={number}
              onChange={this.handleChange}
            />
          </label>
          <button className={button} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
