function MessageModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="modal">
      <h2>{item.name}</h2>
      <p>{item.message}</p>

      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default MessageModal;