import instance from './auth-api';

export const getAllContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContacts = async data => {
  const { data: result } = await instance.post('/contacts', data);
  return result;
};

export const deleteContacts = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};

export const changeContacts = async data => {
  const value = { name: data.name, number: data.number };
  console.log('api', value);
  const { value: result } = await instance.patch(`/contacts/${data.id}`, value);
  return result;
};

// import axios from 'axios';

// const contactsInstance = axios.create({
//   baseURL: 'https://6400727063e89b0913af1475.mockapi.io/api/contacts',
// });

// export const getAllContacts = async () => {
//   const { data } = await contactsInstance.get('/');
//   return data;
// };

// export const addContacts = async data => {
//   const { data: result } = await contactsInstance.post('/', data);
//   return result;
// };

// export const deleteContacts = async id => {
//   const { data } = await contactsInstance.delete(`/${id}`);
//   return data;
// };
