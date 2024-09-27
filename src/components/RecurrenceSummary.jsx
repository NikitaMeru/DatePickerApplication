import React from 'react';
import { format } from 'date-fns';

export default function RecurrenceSummary({ recurrence, customRecurrence, selectedDate }) {
  return (
    <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200 shadow-lg rounded-xl text-blue-900 animate-fade-in transition-all duration-300 ease-in-out hover:shadow-xl">
      <p className="text-sm">
        Recurring <strong className="text-teal-700">{recurrence}</strong> every{' '}
        <strong className="text-teal-700">{customRecurrence.interval}</strong> starting from{' '}
        <strong className="text-teal-700">{format(selectedDate, 'PP')}</strong>.
        {customRecurrence.endDate && (
          <> Until <strong className="text-teal-700">{format(customRecurrence.endDate, 'PP')}</strong>.</>
        )}
      </p>
    </div>
  );
}