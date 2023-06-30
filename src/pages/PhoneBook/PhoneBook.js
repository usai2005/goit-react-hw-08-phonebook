import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import css from './PhoneBook.module.css';

const PhoneBook = () => {
  return (
    <div className={css.phonebook__section}>
      <h1 className={css.phonebook__title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.contacts__title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default PhoneBook;
