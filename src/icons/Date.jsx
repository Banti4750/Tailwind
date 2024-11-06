import React, { useState } from "react";

const DatePicker = () => {
  const [formattedDate, setFormattedDate] = useState("");

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const formatted = selectedDate.toLocaleDateString("en-GB", options); // Adjust locale if needed
    setFormattedDate(formatted);
  };

  return (
    <div>
      <input type="date" onChange={handleDateChange} />
      {formattedDate && <p>Selected Date: {formattedDate}</p>}
    </div>
  );
};

export default DatePicker;
