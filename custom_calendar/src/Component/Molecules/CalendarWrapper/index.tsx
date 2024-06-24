import React, { useState, useEffect } from 'react'
import './index.css'
import rightArrow from '../../../Image/right-arrow.svg'
import leftArrow from '../../../Image/left-arrow.svg'
import Button from "../../Atomic/Button";
import YearMonthSelector from '../YearMonthSelector';
import CalendarView from '../calendar';
// import { getDays, getMonthDays, dateFormate, getDayNumber, getCompleteMonthDateList } from '../../../utils/calendarUtility';

type props = {
    children?: string | JSX.Element | JSX.Element[] | any;
    className?: string;
    monthType?: string;
    date? : Date;
    startDate? : Date;
    endDate? : Date;
    onChangeDate? : (param: Date) => void;
  }
export default function Index({date, onChangeDate, startDate, endDate, monthType}: props) {
    const [defaultDate, setDefaultDate] = useState(date ?  date  : new Date());
    // const [weekDays, setWeekDays] = useState(getDays());
    const [fullYear, setFullYear] = useState(defaultDate.getFullYear());
    const [monthNumber, setMonthNumber] = useState(defaultDate.getMonth());
    // const [allMonthNumber, setAllMonthNumber] = useState<number[]>([]);
    const [isMonthYearShow, setIsMonthYearShow] = useState<boolean>(false);

    // const firstDay = getMonthDays(fullYear, monthNumber, 1);
    // const lastDay = getMonthDays(fullYear, monthNumber, 0);
    // const startingDayIndex = getDayNumber(dateFormate(firstDay, "en-US", { weekday: 'long' }));
    // const daysInMonth = getCompleteMonthDateList(defaultDate);
    
    

    // useEffect( () => {

    // }, [defaultDate]);

    const prevMonthHandle = () => {
        setMonthNumber(monthNumber - 1);
        setDefaultDate(new Date(fullYear, monthNumber - 1));
    }
    const nextHandle = () => {
        setMonthNumber(monthNumber + 1);
        setDefaultDate(new Date(fullYear, monthNumber + 1));
    }
    const changeDate = (date: Date) => {
        setDefaultDate(date);
        if(onChangeDate)
        onChangeDate(date);
    }

    return (
        <div>
            Caldendar
            <Button >Icon</Button>
            <div className="custom-cal-item">
                <div className="custom-date-range-content">
                    <div className="custom-date-header-cont" data-testid="daterange-header">
                        <span className="custom-date-header">yyyy-MM-dd</span>
                        <span className="custom-date-header-character"> ~ </span>
                        <span className="custom-date-header">yyyy-MM-dd</span></div>
                    </div>
                </div>
            <div className="custom-date-daterange-calendar-group">
                <div className='custom-date-calendar-header-has-month'>
                    <div className='custom-date-calendar-header-month-toolbar'>
                        <Button onClick={prevMonthHandle} className='p-5'><img src={leftArrow} alt="pre-arrow" className="calendarIcon" /> </Button>
                        <Button onClick={() => setIsMonthYearShow(!isMonthYearShow)} className="p-5">{defaultDate.toLocaleDateString("en-US", { year: 'numeric', month: 'long' })}</Button>
                        <Button onClick={nextHandle} className='p-5'><img src={rightArrow} alt="next-arrow" className="calendarIcon" /> </Button>
                    </div>
                </div>
                {isMonthYearShow ? <YearMonthSelector date={defaultDate} /> : 
                <CalendarView date={defaultDate} startDate={startDate} endDate={endDate} changeDate={changeDate} monthType={monthType}/> }
            </div>
            {/* <img className="calendarIcon" src={calendarIcon} alt="Calendar" /> */}
        </div>
    )
}
