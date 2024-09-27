import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';

export default function CalendarPreview({ selectedDate, recurringDates }) {
  const monthStart = startOfMonth(selectedDate);
  const monthEnd = endOfMonth(selectedDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <div className="my-6 rounded-xl shadow-2xl overflow-hidden animate-fade-in transition-all duration-300 ease-in-out transform hover:scale-[1.02]">
      <div className="flex">
        <div className="w-2/5 bg-gradient-to-br from-teal-400 to-teal-600 p-8 text-white">
          <div className="text-2xl font-light animate-fade-in">{format(selectedDate, 'EEEE')}</div>
          <div className="text-7xl font-bold mt-2 animate-slide-in">{format(selectedDate, 'd')}</div>
          <div className="text-2xl font-light mt-2 animate-fade-in">{format(selectedDate, 'MMM')}</div>
          <div className="text-3xl font-light mt-2 animate-slide-in">{format(selectedDate, 'yyyy')}</div>
        </div>
        <div className="w-3/5 bg-white p-8">
          <div className="text-xl font-semibold mb-4 text-gray-800">{format(selectedDate, 'MMMM yyyy')}</div>
          <div className="grid grid-cols-7 gap-2">
            {weekdays.map((day) => (
              <div key={day} className="text-center text-gray-600 font-semibold">
                {day}
              </div>
            ))}
            {daysInMonth.map((day) => (
              <div
                key={day.toString()}
                className={`text-center p-2 rounded-full transition-all duration-200 ease-in-out ${
                  format(day, 'M') !== format(selectedDate, 'M')
                    ? 'text-gray-300'
                    : format(day, 'd') === format(selectedDate, 'd')
                    ? 'bg-teal-500 text-white shadow-md transform scale-110'
                    : recurringDates.some((recDate) => format(recDate, 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd'))
                    ? 'bg-teal-100 text-teal-800 hover:bg-teal-200'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {format(day, 'd')}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}