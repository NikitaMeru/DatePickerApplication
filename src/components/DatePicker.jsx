import React, { useState, useEffect } from 'react';
import { format, addDays, addWeeks, addMonths, addYears, isBefore, isAfter } from 'date-fns';
import DateInput from './DateInput';
import RecurrenceSelector from './RecurrenceSelector';
import CalendarPreview from './CalendarPreview';
import SelectedDateDisplay from './SelectedDateDisplay';
import RecurrenceSummary from './RecurrenceSummary';

export default function DatePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [recurrence, setRecurrence] = useState('none');
  const [customRecurrence, setCustomRecurrence] = useState({
    interval: 1,
    endDate: null,
  });
  const [recurringDates, setRecurringDates] = useState([]);

  useEffect(() => {
    const calculateRecurringDates = () => {
      let dates = [];
      let currentDate = selectedDate;

      while (!customRecurrence.endDate || isBefore(currentDate, customRecurrence.endDate)) {
        if (recurrence === 'daily') {
          currentDate = addDays(currentDate, customRecurrence.interval);
        } else if (recurrence === 'weekly') {
          currentDate = addWeeks(currentDate, customRecurrence.interval);
        } else if (recurrence === 'monthly') {
          currentDate = addMonths(currentDate, customRecurrence.interval);
        } else if (recurrence === 'yearly') {
          currentDate = addYears(currentDate, customRecurrence.interval);
        }
        if (customRecurrence.endDate && isAfter(currentDate, customRecurrence.endDate)) break;
        dates.push(new Date(currentDate));
      }
      setRecurringDates(dates);
    };

    if (recurrence !== 'none') {
      calculateRecurringDates();
    } else {
      setRecurringDates([]);
    }
  }, [recurrence, customRecurrence, selectedDate]);

  return (
    <div className="p-8 bg-gradient-to-br from-blue-100 to-purple-100 shadow-2xl rounded-2xl max-w-3xl mx-auto space-y-6 animate-fade-in transition-all duration-300 ease-in-out transform hover:scale-[1.02]">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 animate-pulse">Select a Date</h2>

      <DateInput
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        customRecurrence={customRecurrence}
        setCustomRecurrence={setCustomRecurrence}
      />

      <RecurrenceSelector
        recurrence={recurrence}
        setRecurrence={setRecurrence}
        customRecurrence={customRecurrence}
        setCustomRecurrence={setCustomRecurrence}
      />

      <CalendarPreview
        selectedDate={selectedDate}
        recurringDates={recurringDates}
      />

      <SelectedDateDisplay selectedDate={selectedDate} />

      {recurrence !== 'none' && (
        <RecurrenceSummary
          recurrence={recurrence}
          customRecurrence={customRecurrence}
          selectedDate={selectedDate}
        />
      )}
    </div>
  );
}