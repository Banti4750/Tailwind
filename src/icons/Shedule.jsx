import React from "react";

const Shedule = () => {
  return (
    <svg
      class="h-8 w-8 text-blue-900"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      {" "}
      <path stroke="none" d="M0 0h24v24H0z" />{" "}
      <rect x="4" y="5" width="16" height="16" rx="2" />{" "}
      <line x1="16" y1="3" x2="16" y2="7" />{" "}
      <line x1="8" y1="3" x2="8" y2="7" />{" "}
      <line x1="4" y1="11" x2="20" y2="11" />{" "}
      <line x1="10" y1="16" x2="14" y2="16" />{" "}
      <line x1="12" y1="14" x2="12" y2="18" />
    </svg>
  );
};

export default Shedule;
