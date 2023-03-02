import { useSelector, useDispatch } from 'react-redux';
import { ImMobile } from 'react-icons/im';
import { IconContext } from 'react-icons';
import { fetchDeleteContact } from 'redux/contacts/contacts-operations';
import { getFilteredContacts } from 'redux/contacts/contact-selectors';

import styles from './contactList.module.scss';

const ContactList = () => {
  const filterContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();


  const removeContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  return (
    <ul className={styles.contactsList}>
      {filterContacts.map(contact => {
        const { id, name, phone } = contact;
        return (
          <li key={id} className={styles.contactList}>
            <span className={styles.contact}>
              <IconContext.Provider value={{ style: { color: '#ff6f00' } }}>
                <ImMobile />
              </IconContext.Provider>
              {name}: <span className={styles.number}>{phone}</span>
            </span>
            <button
              type="button"
              className={styles.button}
              onClick={() => removeContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
