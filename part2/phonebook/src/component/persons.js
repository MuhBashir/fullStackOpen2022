const Persons = ({ search, persons, deleteSinglePerson }) => {
  return (
    <table className='containerDiv'>
      <thead>
        <tr>
          <th>name</th>
          <th>phone number</th>
          <th>delete</th>
        </tr>

        {search !== ""
          ? persons
              .filter((person) =>
                person.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((person) => {
                const { id, name, number } = person;
                return (
                  <tr key={id}>
                    <td>{name}</td>
                    <td>{number}</td>
                    <td>
                      <button
                        onClick={() => {
                          if (window.confirm(`Delete ${name}?`)) {
                            deleteSinglePerson(id);
                          }
                        }}
                        className='btn'
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })
          : persons.map((person) => {
              const { id, name, number } = person;
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{number}</td>
                  <td>
                    <button
                      onClick={() => {
                        if (window.confirm(`Delete ${name}?`)) {
                          deleteSinglePerson(id);
                        }
                      }}
                      className='btn'
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
      </thead>
    </table>
  );
};

export default Persons;
/*                 
      {search !== ""
        ? persons
            .filter((person) =>
              person.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((person) => {
              const { id, name, number } = person;
              return (
                <table key={id} className='innerdiv'>

                    <tr>
                      <td>{name}</td>
                      <td>{number}</td>
                      <td>
                        <button
                          onClick={() => {
                            if (window.confirm(`Delete ${name}?`)) {
                              deleteSinglePerson(id);
                            }
                          }}
                          className='btn'
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  </thead>
                </table>
              );
            })
        : persons.map((person) => {
            const { id, name, number } = person;
            return (
              <table key={id} className='innerdiv'>
                <thead>
                  <tr>
                    <td>name</td>
                    <td>phone number</td>
                    <td>delete</td>
                  </tr>
                  <tr>
                    <td>{number}</td>
                    <td>
                      <button
                        onClick={() => {
                          if (window.confirm(`Delete ${name}?`)) {
                            deleteSinglePerson(id);
                          }
                        }}
                        className='btn'
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                </thead>
              </table>
            );
          })}
    </table>
  );
*/
