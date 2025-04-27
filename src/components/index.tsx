"use client";

import { useState } from "react";

export const TodoContainer = () => {
  const [checkLists, setCheckLists] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  const handleToggle = (index: number) => {
    setCheckLists((prev) => {
      const newChecklist = [...prev];
      newChecklist[index] = !newChecklist[index];
      return newChecklist;
    });
  };

  const handleToggleAll = () => {
    const allChecked = checkLists.every((value) => value === true);
    setCheckLists(Array(checkLists.length).fill(!allChecked));
  };

  return (
    <div>
      <div>
        <label>All Checked</label>
        <input
          type="checkbox"
          checked={checkLists.every((value) => value === true)}
          onChange={handleToggleAll}
        />
      </div>
      <div>
        <label>Hello</label>
        <input
          type="checkbox"
          checked={checkLists[0]}
          onChange={() => handleToggle(0)}
        />
      </div>
      <div>
        <label>Hello</label>
        <input
          type="checkbox"
          checked={checkLists[1]}
          onChange={() => handleToggle(1)}
        />
      </div>
      <div>
        <label>Hello</label>
        <input
          type="checkbox"
          checked={checkLists[2]}
          onChange={() => handleToggle(2)}
        />
      </div>
      <div>
        <label>Hello</label>
        <input
          type="checkbox"
          checked={checkLists[3]}
          onChange={() => handleToggle(3)}
        />
      </div>
    </div>
  );
};
