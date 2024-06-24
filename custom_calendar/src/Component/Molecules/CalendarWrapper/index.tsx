import React, { useState, useEffect } from 'react'
import './index.css'
import rightArrow from '../../../Image/right-arrow.svg'
import leftArrow from '../../../Image/left-arrow.svg'
import Button from "../../Atomic/Button";
import YearMonthSelector from '../YearMonthSelector';
import CalendarView from '../calendar';

type props = {
    children?: string | JSX.Element | JSX.Element[] | any;
    className?: string;
    monthType?: string;
    date? : Date;
    startDate? : Date;
    endDate? : Date;
    onChangeDate? : (param: Date) => void;
    prevMonthHandle? : (param1: number, param2: number, param3: string) => void;
    nextMonthHandle? : (param1: number, param2: number, param3: string) => void;
    monthNumber : number;
  }
export default function Index({date, onChangeDate, startDate, endDate, monthType, monthNumber, prevMonthHandle, nextMonthHandle}: props) {
    const [defaultDate, setDefaultDate] = useState(date ?  date  : new Date());
    const [fullYear, setFullYear] = useState(defaultDate.getFullYear());
    const [isMonthYearShow, setIsMonthYearShow] = useState<boolean>(false);

    useEffect(() => {
        if(date)
        setDefaultDate(date);
    }, [date])
    
    const prevHandle = () => {
        setDefaultDate(new Date(fullYear, monthNumber - 1));
        if(prevMonthHandle && monthType)
            prevMonthHandle(fullYear, monthNumber - 1, monthType)
    }
    const nextHandle = () => {
        setDefaultDate(new Date(fullYear, monthNumber + 1));
        if(nextMonthHandle && monthType)
            nextMonthHandle(fullYear, monthNumber + 1, monthType)
    }
    const changeDate = (date: Date) => {
        setDefaultDate(date);
        if(onChangeDate)
        onChangeDate(date);
    }

    return (
        <div className="m-10 pl-10 pt-5 pr-10">
            <div className="custom-cal-item">
                <div className="custom-date-range-content">
                    <div className="custom-date-header-cont" data-testid="daterange-header">
                        <span className="custom-date-header">yyyy-MM-dd</span>
                        <span className="custom-date-header-character"> ~ </span>
                        <span className="custom-date-header">yyyy-MM-dd</span></div>
                    </div>
                </div>
            <div>
                <div className='custom-date-calendar-header-has-month'>
                    <div className='custom-date-calendar-header-month-toolbar'>
                        {/* <Button onClick={prevHandle} className='p-5'><img src={leftArrow} alt="pre-arrow" className="calendarIcon" /> </Button> */}
                        <Button onClick={() => setIsMonthYearShow(!isMonthYearShow)} className="p-5">{defaultDate.toLocaleDateString("en-US", { year: 'numeric', month: 'long' })}</Button>
                        {/* <Button onClick={nextHandle} className='p-5'><img src={rightArrow} alt="next-arrow" className="calendarIcon" /> </Button> */}
                    </div>
                </div>
                {isMonthYearShow ? <YearMonthSelector date={defaultDate} /> : 
                <CalendarView date={defaultDate} startDate={startDate} endDate={endDate} changeDate={changeDate} monthType={monthType}/> }
            </div>
        </div>
    )
}
