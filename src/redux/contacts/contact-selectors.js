export const getAllContacts = store => store.contacts;
export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.items;
  }

  const normalizedFilter = filter.toLocaleLowerCase();
  const filteredContscts = contacts.items.filter(({ name }) => {
    return name.toLocaleLowerCase().includes(normalizedFilter);
  });

  return filteredContscts;
};
