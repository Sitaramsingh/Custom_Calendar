import React, { useState } from 'react'
import DatePicker from '../../Component/Organism/DatePicker'
import { dateFormate } from '../../utils/calendarUtility'
import './index.css';

export default function Index() {
  const [defaultDate, setDefaultDate] = useState<Date>(new Date());
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [allDateRange, setAllDateRanges] = useState<Date>();
  const [weekendRange, setWeekendRange] = useState<Date>();

  const onSelectDate = (date: Date, startDate: Date, endDate: Date) => {
    setDefaultDate(date)
    setStartDate(startDate);
    setEndDate(endDate);
  }

  const selectedDateRangeGetter = (weekDayRange: any, weekendRange: any) => {
    setAllDateRanges(weekDayRange);
    setWeekendRange(weekendRange);
  }

  console.log(startDate, 'startDate', endDate, 'endDate', allDateRange, 'allDateRange', weekendRange, 'weekendRange');
  return (
    <div>
      <div  >
        <DatePicker
          date={defaultDate}
          onDateChange={onSelectDate}
          selectedDateRangeGetter={selectedDateRangeGetter}
        />

      </div>
    </div>

  )
}
