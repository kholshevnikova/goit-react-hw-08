import {  createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logOut } from "../auth/operations";
import toast from "react-hot-toast";


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, (state) => {
      state.loading = true;
      state.error = false;
    }).addCase(fetchContacts.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    }).addCase(fetchContacts.rejected, (state) => {
      state.loading = false;
      state.error = true;
    }).addCase(addContact.pending, (state) => {
      state.loading = true;
      state.error = false;
    }).addCase(addContact.fulfilled, (state, action) => {
      state.loading = false;
      state.items.push(action.payload);
      toast.success('Contact added successfully!');
    }).addCase(addContact.rejected, (state) => {
      state.loading = false;
      state.error = true;
    }).addCase(deleteContact.pending, (state) => {
      state.loading = true;
      state.error = false;
    }).addCase(deleteContact.fulfilled, (state, action) => {
      state.loading = false;
      state.items = state.items.filter(item => item.id !== action.payload.id);
       toast.success('Contact deleted successfully!');
    }).addCase(logOut.fulfilled, (state) => {
      state.items = [];
      state.loading = false;
      state.error = null;
    })
  }
});
export default contactsSlice.reducer;