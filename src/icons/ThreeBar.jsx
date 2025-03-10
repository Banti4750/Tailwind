import React from "react";

const ThreeBar = () => {
  return (
    <svg
      class="h-8 w-8 text-neutral-900"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      {" "}
      <line x1="21" y1="10" x2="3" y2="10" />{" "}
      <line x1="21" y1="6" x2="3" y2="6" />{" "}
      <line x1="21" y1="14" x2="3" y2="14" />{" "}
      <line x1="21" y1="18" x2="3" y2="18" />
    </svg>
  );
};

export default ThreeBar;
