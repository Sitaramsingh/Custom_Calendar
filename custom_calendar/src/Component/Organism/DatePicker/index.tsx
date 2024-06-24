import React, { useState, useEffect } from 'react'
import Calendar from '../../Molecules/CalendarWrapper'
import CustomPopOver from '../../Molecules/popover';
import InputBox from '../../Atomic/InputBox';
import Button from '../../Atomic/Button';
import InputBoxWithIcon from '../../Molecules/InputBoxWithIcon';

import './index.css';

type props = {
  children?: string | JSX.Element | JSX.Element[] | any;
  className?: string;
  date?: Date;
  startDate?: Date;
  endDate?: Date;
  onChangeDate?: (param: Date) => void;
}

export default function Index({ }: props) {
  const currentDate = new Date();
  const [startDate, setStartDate] = useState(currentDate);
  const [endDate, setEndDate] = useState(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  const [startSelectedDate, setStartSelectedDate] = useState<Date>();
  const [endSelectedDate, setEndSelectedDate] = useState<Date>();
  const [monthNumber, setMonthNumber] = useState(currentDate.getMonth());
 
  const onChangeStartDate = (date: Date) => {
    setStartDate(date);
    setStartSelectedDate(date);
  }

  const onChangeEndDate = (date: Date) => {
    setEndDate(date);
    setEndSelectedDate(date);
  }

  const prevMonthHandle = (fullYear: number, monthN: number, monthType: string) => {
    setMonthNumber(monthN === 12 ? 1 : monthN);
    if(monthType === "future"){
     const monthDate = new Date(fullYear, monthN)
     if(monthDate  >= endDate){
        setStartDate(new Date(fullYear, monthN));
        setEndDate(new Date(fullYear, monthN + 1));
     }
      
    }
  }
  const nextMonthHandle = (fullYear: number, monthN: number, monthType: string) => {
    setMonthNumber(monthN === 12 ? 1 : monthN);
    if(monthType === "current"){
     const monthDate = new Date(fullYear, monthN)
     if(monthDate  >= endDate){
        setStartDate(new Date(fullYear, monthN));
        setEndDate(new Date(fullYear, monthN + 1));
     }
    }
    // setEndDate(new Date(fullYear, monthN));
  }

  return (
    <div  >
      <CustomPopOver placement= "bottom" trigger="click" innerChildren={ <div className="wrapper">
          <InputBoxWithIcon placeholder='yyyy-MM-dd ~ yyyy-MM-dd' />
        </div>  }>
        <div className="custom-cal-item">
        <div className="custom-date-range-content custom-date-header-cont">
            <div className="custom-date-header-cont" data-testid="daterange-header">
                <span className="custom-date-header">yyyy-MM-dd</span>
                <span className="custom-date-header-character"> ~ </span>
                <span className="custom-date-header">yyyy-MM-dd</span></div>
            </div>
        </div>
      <div className='grid grid-cols-2 gap-2 custom-date-range-content ' >
        <Calendar
          date={startDate}
          startDate={startSelectedDate}
          endDate={endSelectedDate}
          onChangeDate={onChangeStartDate}
          monthType="current"
          prevMonthHandle={prevMonthHandle}
          nextMonthHandle={nextMonthHandle}
          monthNumber={monthNumber}
        />
        <Calendar
          date={endDate}
          startDate={startSelectedDate}
          endDate={endSelectedDate}
          onChangeDate={onChangeEndDate}
          monthType="future"
          prevMonthHandle={prevMonthHandle}
          nextMonthHandle={nextMonthHandle}
          monthNumber={monthNumber}
        />
      </div>
      </CustomPopOver>
    </div>
  )
}
