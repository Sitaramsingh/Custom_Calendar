import React, { useState, useEffect } from 'react'
import './index.css'
import Button from "../../Atomic/Button";
import YearMonthSelector from '../YearMonthSelector';
import CalendarView from '../calendar';
import rightArrow from '../../../Image/right-arrow.svg'
import leftArrow from '../../../Image/left-arrow.svg'
import { getTodayDate } from '../../../utils/calendarUtility';

type props = {
    children?: string | JSX.Element | JSX.Element[] | any;
    className?: string;
    date?: Date;
    startDate?: Date;
    endDate?: Date;
    onChangeDate?: (param: Date) => void;
    prevMonthHandle?: (param1: Date) => void;
    nextMonthHandle?: (param1: Date) => void;
    onSelecteDate?: (param1: Date) => void;
}
export default function Index({ date, onChangeDate, startDate, endDate, prevMonthHandle, nextMonthHandle, onSelecteDate }: props) {
    const [defaultDate, setDefaultDate] = useState(date ? date : getTodayDate());
    const [isMonthYearShow, setIsMonthYearShow] = useState<boolean>(false);
    const [yearType, setYearType] = useState<string>('');

    useEffect(() => {
        if (date)
            setDefaultDate(date);
    }, [date])

    const changeDate = (date: Date) => {
        setDefaultDate(date);
        if (onChangeDate)
            onChangeDate(date);
        setIsMonthYearShow(false)
    }

    const onChangeDateFromCal = (date: Date) => {
        if (onSelecteDate)
            onSelecteDate(date)
    }
    const handleYearSelect = (type: string) => {
        setYearType(type);
        if(!type)
        setIsMonthYearShow(false)
    }

    return (
        <div className="m-2 pl-2 pt-2 pr-2">
            <div>
                <div className='custom-date-calendar-header-has-month'>
                    <div className='custom-date-calendar-header-month-toolbar'>
                        {/* <Button  className='p-5'><img src={leftArrow} alt="pre-arrow" className="calendarIcon" /> </Button> */}
                        <Button onClick={() => setIsMonthYearShow(!isMonthYearShow)} className="p-5">{defaultDate.toLocaleDateString("en-US", { year: 'numeric', month: 'long' })}</Button>
                        {/* <Button  className='p-5'><img src={rightArrow} alt="next-arrow" className="calendarIcon" /> </Button> */}
                    </div>
                </div>
                {isMonthYearShow ? <YearMonthSelector
                    yearType={yearType } 
                    date={defaultDate}
                    changeDate={changeDate}
                    handleYearSelect={handleYearSelect}
                    /> :
                    <CalendarView date={defaultDate} startDate={startDate} endDate={endDate} onChangeDateFromCal={onChangeDateFromCal} />}
            </div>
        </div>
    )
}
