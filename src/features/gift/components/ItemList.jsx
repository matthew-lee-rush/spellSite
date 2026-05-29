{sections.map(section =>
  section.items.map(item => (
    <ItemButton key={item.id} item={item} />
  ))
)}