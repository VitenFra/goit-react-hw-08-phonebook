import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      toast.success(`добавив контакт ${data.name}`, {
        position: 'top',
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contact, { rejectWithValue }) => {
    try {
      const data = await axios.delete(`/contacts/${contact.id}`);
      toast.success(`видалив контакт ${contact.name}`, {

        position: 'top',
      });
      return data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const patchContact = createAsyncThunk(
  'contacts/patchContact',
  async ({ name, number, id }, { rejectWithValue }) => {
    try {
      const data = await axios.patch(`/contacts/${id}`, {
        name,
        number,
      });
      toast.success(`змінив контакт`, {
        position: 'top',
      });
      return data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
