import { gift } from "../data/giftData";
import { useGift } from "../hooks/useGift";
import ItemButton from "../components/ItemButton";
import MessageModal from "../components/MessageModal";

function GiftScreen() {
  const { selectedItem, selectItem, closeItem } = useGift();

  return (
    <div>
      <h1>{gift.title}</h1>

      {gift.sections.map(section =>
        section.items.map(item => (
          <ItemButton
            key={item.id}
            item={item}
            onClick={() => selectItem(item)}
          />
        ))
      )}

      <MessageModal
        item={selectedItem}
        onClose={closeItem}
      />
    </div>
  );
}

export default GiftScreen;