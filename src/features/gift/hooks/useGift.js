import { useState } from "react";

export function useGift() {
  const [selectedItem, setSelectedItem] = useState(null);

  return {
    selectedItem,
    selectItem: setSelectedItem,
    closeItem: () => setSelectedItem(null),
  };
}