import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

import contactList from './contactList.module.scss';

const ContactList = ({ deleteContact, items, changeContact }) => {
  const [isDelete, setDelete] = useState('');
  const [isChange, setChange] = useState({});

  const hendleChange = ({ target }) => {
    const { name, value } = target;
    setChange(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const elements = items.map(({ id, name, number }) => (
    <li className={contactList.listItem} key={id}>
      {isChange.id !== id && (
        <div className={contactList.listItemValue}>
          <span
            className={`${contactList.listItemText} ${contactList.listItemTextName}`}
          >
            {name}
          </span>
          <span
            className={`${contactList.listItemText} ${contactList.listItemTextNumber}`}
          >
            {number}
          </span>
        </div>
      )}
      {isChange.id === id && (
        <label className={contactList.changeLabel}>
          <input
            className={contactList.changeFieldName}
            onChange={hendleChange}
            type="text"
            name="name"
            value={isChange.name}
          />

          <input
            className={contactList.changeFieldNumber}
            onChange={hendleChange}
            type="text"
            name="number"
            value={isChange.number}
          />
        </label>
      )}
      {isDelete === id && (
        <>
          <span className={contactList.delConfirmText}>Delete?</span>
          <button
            onClick={() => deleteContact(id)}
            className={contactList.button}
          >
            Yes
          </button>
          <button onClick={() => setDelete('')} className={contactList.button}>
            No
          </button>
        </>
      )}
      {isChange.id === id && (
        <>
          <span className={contactList.delConfirmText}>Modify?</span>
          <button
            onClick={() => {
              changeContact(isChange);
              setChange({});
            }}
            className={contactList.button}
          >
            Yes
          </button>
          <button onClick={() => setChange({})} className={contactList.button}>
            No
          </button>
        </>
      )}
      {(isDelete || isChange.id) !== id && (
        <>
          <a
            href={`tel:+380${number}`}
            className={contactList.call}
            type="button"
          >
            Call
          </a>
          <button
            onClick={() => setChange({ id, name, number })}
            className={contactList.button}
            type="button"
          >
            Change
          </button>
          <button
            onClick={() => setDelete(id)}
            className={contactList.button}
            type="button"
          >
            Delete
          </button>
        </>
      )}
    </li>
  ));

  return <ul className={contactList.list}>{elements}</ul>;
};

export default ContactList;

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
