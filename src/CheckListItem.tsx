import React, { useState } from "react";

export interface ItemData {
  id: number;
  checked: boolean;
  title: string;
}

export interface CheckListItemProps extends ItemData {
  onCheck: (checked: boolean) => void;
  onSave: (title: string) => void;
  onDelete: () => void;
}

export function CheckListItem({
  id,
  checked,
  onCheck,
  title,
  onSave,
  onDelete,
}: CheckListItemProps) {
  const [editing, setEditing] = useState(false);
  return (
    <div
      className={
        "check-list__item check-list__item--" +
        id +
        (checked ? " check-list__item--checked" : "")
      }
    >
      <input
        className="check-list__item-checkbox"
        type="checkbox"
        checked={checked}
        onChange={(e) => {
          onCheck(e.target.checked);
        }}
      />

      {!editing && <span className="check-list__item-title">{title}</span>}

      {editing && (
        <input
          className="check-list__item-title-input"
          type="text"
          value={title}
          onChange={(e) => {
            onSave(e.target.value);
          }}
        />
      )}

      {!editing && (
        <button
          className="check-list__item-edit-button"
          onClick={() => {
            setEditing(true);
          }}
        >
          Edit
        </button>
      )}

      {editing && (
        <button
          className="check-list__item-save-button"
          onClick={() => {
            setEditing(false);
          }}
        >
          Save
        </button>
      )}

      <button
        className="check-list__item-delete-button"
        onClick={() => {
          onDelete();
        }}
      >
        Delete
      </button>
    </div>
  );
}
