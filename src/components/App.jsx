import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Container, MainTitle, Title, ErrorText } from './App.styled';

const STORAGE = "contact";
const getSavedContacts = () => {
  const savedContacts = localStorage.getItem(STORAGE);
    if(savedContacts !== null) {
      const parsedContacts = JSON.parse(savedContacts)
      return parsedContacts
    }
    return []
}

export const App = () => {
  const [contacts, setContacts] = useState(getSavedContacts);
  const [filter, setFilter] = useState('');
 
  useEffect(() => {
    localStorage.setItem(STORAGE, JSON.stringify(contacts))
  }, [contacts]) 
    
  const handleSubmitForm = ({name, number}) => {
          const newContact = {
          id: nanoid(),
          name,
          number,
        }; 
        
        contacts.some(contact => contact.name === name)
        ? alert(`${name}, Contact with such name is already exists!`)
        : setContacts(prevState => [newContact, ...prevState]);
    }
    const filterInput = e => {
      const { value } = e.currentTarget;
      setFilter(value) 
    }
    const deleteContact = id => {
      setContacts(contacts.filter(contact => contact.id !== id))
    }
 
    const normalizedContacts = filter.toLowerCase();  
    const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(normalizedContacts));
    
    return (
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <Form submit={handleSubmitForm}/>
        <Title> Contacts</Title>
          <Filter value={filter} onChange={filterInput}/>
          {contacts.length > 0 ? 
          (<ContactsList contacts={filteredContacts} onDelete={deleteContact}/>) : 
          <ErrorText>Sorry! No contacts in phonebook!</ErrorText>}   
      </Container> 
    ); 
};
