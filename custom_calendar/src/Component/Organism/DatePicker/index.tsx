import React, { useState, useEffect } from 'react'
import Calendar from '../../Molecules/CalendarWrapper'
import CustomPopOver from '../../Molecules/popover';
import InputBoxWithIcon from '../../Molecules/InputBoxWithIcon';
import { getTodayDate, getDateRange, dateFormate } from '../../../utils/calendarUtility'

import './index.css';

type props = {
  children?: string | JSX.Element | JSX.Element[] | any;
  className?: string;
  date?: Date;
  startDate?: Date;
  endDate?: Date;
  onDateChange?: (param: Date, param2: Date, param3: Date) => void;
  selectedDateRangeGetter?: (param: Array<Date>, param2: Array<Date>) => void;
}
export default function Index({ date, onDateChange, selectedDateRangeGetter }: props) {
  const currentDate = getTodayDate();
  const [startSelectedDate, setStartSelectedDate] = useState<Date>();
  const [endSelectedDate, setEndSelectedDate] = useState<Date>();
  const [defaultDate, setDefaultDate] = useState(date ? date : getTodayDate());
  const [dateSelectCounter, setDateSelectCounter] = useState<number>(0);
  const [nextMonthDate, setNextMonthDate] = useState(date ? new Date(date.getFullYear(), date.getMonth() + 1, 1) : new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

  useEffect(() => {
    if( selectedDateRangeGetter && startSelectedDate && endSelectedDate){
    const weekDateRange =  getDateRange(startSelectedDate, endSelectedDate);
      selectedDateRangeGetter(weekDateRange, [])
    }
    if(defaultDate && onDateChange && startSelectedDate && endSelectedDate){
      onDateChange(defaultDate,  startSelectedDate, endSelectedDate)
    }
  }, [ defaultDate , startSelectedDate, endSelectedDate, selectedDateRangeGetter])
  
  useEffect(() => {
    if (nextMonthDate <= defaultDate) {
      setNextMonthDate(new Date(defaultDate.getFullYear(), defaultDate.getMonth() + 1, 1))
    }
  }, [defaultDate])

  const onChangeDateFromPicker = (date: Date) => {
    setDefaultDate(date);
  }

  const onSelecteDate = (date: Date) => {
    setDateSelectCounter(dateSelectCounter + 1);
    if (dateSelectCounter === 2) {
      setStartSelectedDate(date);
      setEndSelectedDate(date);
      setDateSelectCounter(1);
    } else {
      if (endSelectedDate) {
        if (date < endSelectedDate) {
          setStartSelectedDate(date);
        } else if (date > endSelectedDate) {
          setEndSelectedDate(date);
        } else {
          setStartSelectedDate(date);
          setEndSelectedDate(date);
        }
      }
      else {
        setStartSelectedDate(date);
        setEndSelectedDate(date);
      }
    }
  }

 

  return (
    <div className="text-center ml-10px">
      <CustomPopOver placement="bottom" trigger="click" innerChildren={<div className="wrapper max-w-2xl mb-2">
        <InputBoxWithIcon placeholder='yyyy-MM-dd ~ yyyy-MM-dd' value = { startSelectedDate && endSelectedDate ?  `${dateFormate(startSelectedDate, "en-US", { year:'numeric',month: 'numeric', day: 'numeric' })} ~  ${dateFormate(endSelectedDate, "en-US", { year:'numeric',month: 'numeric', day: 'numeric' })}`  : ''} />
      </div>}>
        <div className="custom-date-range-content max-w-2xl">
          <div className="custom-cal-item">
            <div className="custom-date-range-content custom-date-header-cont">
              <div className="custom-date-header-cont" data-testid="daterange-header">
                <span className="custom-date-header"> {startSelectedDate  ? dateFormate(startSelectedDate, "en-US", { year:'numeric',month: 'numeric', day: 'numeric' }): 'yyyy-MM-dd'}</span>
                <span className="custom-date-header-character"> ~ </span>
                <span className="custom-date-header">{endSelectedDate  ? dateFormate(endSelectedDate, "en-US", { year:'numeric',month: 'numeric', day: 'numeric' }): 'yyyy-MM-dd'}</span></div>
            </div>
          </div>
          <div className='grid grid-cols-2  ml-10px ' >
            <div className="border-r border-gray">
              <Calendar
                date={defaultDate}
                startDate={startSelectedDate}
                endDate={endSelectedDate}
                onChangeDate={onChangeDateFromPicker}
                onSelecteDate={onSelecteDate}
              />
            </div>
            <div>
              <Calendar
                date={nextMonthDate}
                startDate={startSelectedDate}
                endDate={endSelectedDate}
                onChangeDate={onChangeDateFromPicker}
                onSelecteDate={onSelecteDate}
              />
            </div>
          </div>
        </div>
      </CustomPopOver>
    </div>
  )
}
