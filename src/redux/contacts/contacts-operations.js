import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

import * as api from 'redux/contacts-api';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.getAllContacts();
      return data;
    } catch (response) {
      return rejectWithValue(response.data.massage);
    }
  }
);

export const fetchAddContacts = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch (response) {
      return rejectWithValue(response.data.massage);
    }
  },
  {
    condition: ({ name }, { getState }) => {
      const { contacts } = getState();
      const normalizedName = name.toLocaleLowerCase();

      const result = contacts.items.find(({ name }) => {
        return name.toLocaleLowerCase() === normalizedName;
      });

      if (result) {
        Notiflix.Notify.failure(`${name} is olready in contacts`);
        return false;
      }
    },
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContact(id);
      return id;
    } catch (response) {
      return rejectWithValue(response.data.massage);
    }
  }
);
