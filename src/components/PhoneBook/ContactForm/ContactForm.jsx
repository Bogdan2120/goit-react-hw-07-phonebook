import { useState } from 'react';
import {  useDispatch } from 'react-redux';

import { fetchAddContacts } from 'redux/contacts/contacts-operations';
import styles from './contactForm.module.scss';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        return setName(target.value);
      case 'number':
        return setPhone(target.value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(fetchAddContacts({ name, phone }));
    setName('');
    setPhone('');
  };

  

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={styles.label}>
        Numder
        <input
          className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="444-44-44"
          value={phone}
          onChange={handleChange}
        />
      </label>

      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
