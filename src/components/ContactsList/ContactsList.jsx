import PropTypes from 'prop-types';
import { List, Item, Button } from './ContactsList.styled';

export const ContactsList = ({contacts, onDelete}) => {
    return (
        <List>
        {contacts.map(({id, name, number}) => {
        return <Item key={id}>
            {name}: {number}
            <Button type="button" onClick={() => onDelete(id)}>Delete</Button>
            </Item>    
        }  
        )}
        </List>        
    ) 
}

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }).isRequired).isRequired
}