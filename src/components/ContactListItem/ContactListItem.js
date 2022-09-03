import React from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import s from './ContactListItem.module.css';
import Button from '@mui/material/Button';

import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, number, handleShowModal }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.item}>
      <Fab
        size="small"
        color="primary"
        aria-label="edit"
        className={s.fab}
        onClick={handleShowModal}
        id={id}
      >
        <EditIcon />
      </Fab>
      <div className={s.contactContainer}>
        <span className={s.name}>{name}</span>
        <span className={s.number}>{number}</span>
      </div>

      <Button
        className={s.button}
        id={id}
        name={name}
        variant="outlined"

        
        onClick={evt => {
          dispatch(
            contactsOperations.deleteContact({
              id: evt.currentTarget.id,
              name: evt.currentTarget.name,
            })
          );
        }}
      >
        Видалити
      </Button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  loader: PropTypes.bool.isRequired,
  handleShowModal: PropTypes.func.isRequired,
};

export default ContactListItem;
