import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormContainer, Label, Input, Btn } from './Form.styled';

export class Form extends Component {
    state = {
        name: '',
        number: ''
    }
    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({
          [name]: value,
        })
      }
      handleSubmit = e => {
        e.preventDefault();
        this.props.submit(this.state)
        // e.currentTarget.reset()
        this.reset()
        }
      reset = () => {
        this.setState({ name: '', number: ''})
      }
    render() {
        return (
            <div>
              <FormContainer onSubmit={this.handleSubmit}>
              <Label> Name
               <Input 
               type="text"
               name="name"
               value={this.state.name}
               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
               required
               onChange={this.handleChange}/> 
              </Label>
              <Label>Number
              <Input
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
              />
              </Label>
              <Btn type="submit">Add contact</Btn>
              </FormContainer> 
            </div>
          );
    }
}
Form.propTypes = {
    submit: PropTypes.func.isRequired
}