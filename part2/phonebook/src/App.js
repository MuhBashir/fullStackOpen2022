import { useState, useEffect } from "react";
import Persons from "./component/persons";
import Form from "./component/form";
import Search from "./component/search";
import Heading from "./component/heading";
import Modal from "./component/modal";
import personServices from "./services/personServices";
import "./index.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(true);

  // fetch data
  useEffect(() => {
    personServices.getAll().then((response) => {
      setPersons(response);
    });
  }, []);

  // submit button
  const submitButton = (e) => {
    e.preventDefault();
    const findPerson = persons.find(
      (person) =>
        person.name.toLowerCase() === newName.toLowerCase() &&
        person.number !== number
    );
    if (findPerson) {
      // finding a person and repalce the old number with new one
      window.confirm(
        `${newName} is already added to the phonebbok, replace the old number with new one?`
      );
      updatePhoneNumber(findPerson);
      setShowModal(true);
      setMessage(`${newName}'s phone number was updated`);
      setTimeout(() => {
        setMessage(null);
        setShowModal(false);
      }, 3000);
      setNewName("");
      setNumber("");
    } else if (
      persons.find(
        (person) =>
          person.name.toLowerCase() === newName.toLowerCase() &&
          person.number === number
      )
    ) {
      window.confirm(`${newName} is already added to the phonebbok`);
      setNewName("");
      setNumber("");
    } else {
      // creating new person object
      const personObj = {
        id: new Date().getTime().toString(),
        name: newName,
        number: number,
      };
      personServices.create(personObj).then((response) => {
        setPersons(persons.concat(response));
        setMessage(`Added ${newName}`);
        setShowModal(true);
        setNewName("");
        setNumber("");
        setTimeout(() => {
          setMessage(null);
          setShowModal(false);
        }, 3000);
      });
    }
  };

  const updatePhoneNumber = (findPerson) => {
    personServices
      .update(findPerson.id, { ...findPerson, number })
      .then((response) => {
        setPersons(
          persons.map((person) =>
            person.id === response.id
              ? { ...person, id: response.id, number: response.number }
              : person
          )
        );
      })
      .catch((error) => {
        setMessage(
          `Information of ${newName} has already been removed from the sever`
        );
        setShowModal(true);

        setPersons(persons.map((person) => person.id !== findPerson.id));
      });
  };

  // delete function
  const deleteSinglePerson = (id) => {
    personServices.deletePerson(id);
    setPersons(persons.filter((person) => person.id !== id));
  };

  return (
    <div className='bigDiv'>
      <h1>Phonebook</h1>
      {showModal ? (
        <Modal
          message={message}
          setShowModal={setShowModal}
          setMessage={setMessage}
          updatePhoneNumber={updatePhoneNumber}
        />
      ) : (
        ""
      )}

      {/* Filter function */}
      <Search search={search} setSearch={setSearch} />
      <Heading text='add person' />
      {/* form element */}
      <Form
        newName={newName}
        number={number}
        setNewName={setNewName}
        setNumber={setNumber}
        submitButton={submitButton}
      />
      <Heading text='list' />
      <Persons
        search={search}
        persons={persons}
        deleteSinglePerson={deleteSinglePerson}
      />
    </div>
  );
};

export default App;
