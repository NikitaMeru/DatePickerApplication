import React from 'react';

const recurrenceOptions = ['None', 'Daily', 'Weekly', 'Monthly', 'Yearly'];

export default function RecurrenceSelector({ recurrence, setRecurrence, customRecurrence, setCustomRecurrence }) {
  const handleRecurrenceChange = (event) => {
    setRecurrence(event.target.value.toLowerCase());
  };

  const handleIntervalChange = (event) => {
    setCustomRecurrence({ ...customRecurrence, interval: parseInt(event.target.value) });
  };

  return (
    <div className="animate-slide-in">
      <div className="mb-4">
        <label htmlFor="recurrence" className="block mb-2 text-sm font-medium text-gray-700">
          Recurrence:
        </label>
        <select
          id="recurrence"
          className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 transition-all duration-300 ease-in-out hover:border-blue-400"
          value={recurrence.charAt(0).toUpperCase() + recurrence.slice(1)}
          onChange={handleRecurrenceChange}
        >
          {recurrenceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {recurrence !== 'none' && (
        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Every:</label>
          <input
            type="number"
            min="1"
            value={customRecurrence.interval}
            onChange={handleIntervalChange}
            className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4 transition-all duration-300 ease-in-out hover:border-blue-400"
          />
        </div>
      )}
    </div>
  );
}