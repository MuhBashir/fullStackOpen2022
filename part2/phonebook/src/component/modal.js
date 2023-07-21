const Modal = ({ message }) => {
  if (message === null) return null;
  return (
    <div className='modal'>
      <p>{message}</p>
    </div>
  );
};

export default Modal;
