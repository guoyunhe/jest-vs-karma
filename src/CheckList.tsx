import React, { useState } from "react";
import { CheckListItem, ItemData } from "./CheckListItem";

export function CheckList() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState<ItemData[]>([
    { id: 1, title: "", checked: false },
  ]);
  const filteredItems = items.filter((item) =>
    item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );
  return (
    <div>
      <input
        className="check-list__search-input"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      {filteredItems.map((item) => (
        <CheckListItem
          key={item.id}
          {...item}
          onCheck={(checked) => {
            setItems(
              items.map((it) =>
                it.id === item.id ? { ...it, checked: checked } : it
              )
            );
          }}
          onSave={(title) => {
            setItems(
              items.map((it) => (it.id === item.id ? { ...it, title } : it))
            );
          }}
          onDelete={() => {
            setItems(items.filter((it) => it.id !== item.id));
          }}
        />
      ))}
      <button
        className="check-list__new-button"
        onClick={() => {
          setItems([
            ...items,
            { id: Math.random(), title: "", checked: false },
          ]);
        }}
      >
        New
      </button>
    </div>
  );
}
