import React from 'react';
import { format } from 'date-fns';

export default function SelectedDateDisplay({ selectedDate }) {
  return (
    <div className="flex items-center justify-between p-6 bg-white border border-gray-200 shadow-lg rounded-xl animate-slide-in transition-all duration-300 ease-in-out hover:shadow-xl">
      <span className="text-sm font-medium text-teal-600">Selected Start Date:</span>
      <span className="text-sm font-bold text-gray-900">
        {format(selectedDate, 'PP')}
      </span>
    </div>
  );
}