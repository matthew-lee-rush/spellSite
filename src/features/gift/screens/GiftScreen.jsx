import { gift } from "../data/giftData";
import { useGift } from "../hooks/useGift";
import ItemButton from "../components/ItemButton";
import MessageModal from "../components/MessageModal";
import mainNewImg from "../../../assets/mainDividerCropped.png";

function GiftScreen() {
  const { selectedItem, selectItem, closeItem } = useGift();

  return (
    <div className="app">
      <h1>{gift.title}</h1>

      <div className="card">
        <ul>
        {gift.sections.map((section, sectionIndex) =>
            <div key={section.id}>
              {section.items.map(item => (
              <ItemButton
                  key={item.id}
                  item={item}
                  onClick={() => selectItem(item)}
              />
              ))}
              {sectionIndex < gift.sections.length - 1 && (
                <li key={`divider-${sectionIndex}`}>
                  <img src={mainNewImg} alt="" className="divider" />
                </li>
              )}
            </div>
        )}
        </ul>
    </div>

    <MessageModal item={selectedItem} onClose={closeItem} />
    </div>
  );
}

export default GiftScreen;