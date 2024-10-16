import React from 'react';
import { format } from 'date-fns';

export default function DateInput({ selectedDate, setSelectedDate, customRecurrence, setCustomRecurrence }) {
  
  const handleDateChange = (event) => {
    setSelectedDate(new Date(event.target.value));
  };

  const handleEndDateChange = (event) => {
    setCustomRecurrence({ ...customRecurrence, endDate: new Date(event.target.value) });
  };

  return (
    <div className="flex items-start justify-between space-x-4 bg-white p-6 rounded-xl shadow-md animate-slide-in">
      <div className="w-1/2">
        <label htmlFor="date-picker" className="block mb-2 text-sm font-medium text-gray-700">
          Start Date:
        </label>
        <input
          id="date-picker"
          type="date"
          className="block w-full p-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 transition-all duration-300 ease-in-out hover:border-blue-400"
          value={format(selectedDate, 'yyyy-MM-dd')}
          onChange={handleDateChange}
        />
      </div>

      <div className="w-1/2">
        <label htmlFor="end-date-picker" className="block mb-2 text-sm font-medium text-gray-700">
          End Date (Optional):
        </label>
        <input
          id="end-date-picker"
          type="date"
          className="block w-full p-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 transition-all duration-300 ease-in-out hover:border-blue-400"
          value={customRecurrence.endDate ? format(customRecurrence.endDate, 'yyyy-MM-dd') : ''}
          onChange={handleEndDateChange}
        />
      </div>
    </div>
  );
}