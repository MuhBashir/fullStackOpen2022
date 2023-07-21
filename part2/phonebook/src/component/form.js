const Form = ({ newName, number, setNewName, setNumber, submitButton }) => {
  return (
    <form className='containerDiv form'>
      <div>
        <p>fullname:</p>
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          required
        />
      </div>
      <div>
        <p>number:</p>
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type='number'
          required
        />
      </div>
      <div>
        <button type='submit' onClick={submitButton} id='btn'>
          add
        </button>
      </div>
    </form>
  );
};

export default Form;
