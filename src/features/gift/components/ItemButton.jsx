function ItemButton({ item, onClick }) {
  return (
    <li>
      <button className="item" type="button" onClick={onClick}>
        {item.name}
      </button>
    </li>
  );
}

export default ItemButton;