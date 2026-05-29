function ItemButton({ item, onClick }) {
  return (
    <button onClick={onClick}>
      {item.name}
    </button>
  );
}

export default ItemButton;