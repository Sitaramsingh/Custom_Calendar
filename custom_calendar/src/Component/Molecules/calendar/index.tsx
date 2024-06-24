import React, {useState, useEffect} from 'react'
import { getDays, getMonthDays, dateFormate, getDayNumber, getCompleteMonthDateList } from '../../../utils/calendarUtility';

type props = {
    date? : Date;
    changeDate? :(param: Date) => void;
    startDate? : Date;
    endDate? : Date;
    monthType? : string;
}
export default function Index({date, changeDate, startDate, endDate, monthType}: props) {
    const [defaultDate, setDefaultDate] = useState(date ?  date  : new Date());
    const [selectedDate, setSelectedDate] = useState<Date>();
    const [weekDays, setWeekDays] = useState(getDays());
    const [fullYear, setFullYear] = useState(defaultDate.getFullYear());
    const [monthNumber, setMonthNumber] = useState(defaultDate.getMonth());
    const [allMonthNumber, setAllMonthNumber] = useState<number[]>([]);

    const firstDay = getMonthDays(fullYear, monthNumber, 1);
    const startingDayIndex = getDayNumber(dateFormate(firstDay, "en-US", { weekday: 'long' }));
    const daysInMonth = getCompleteMonthDateList(defaultDate);

    
    
   const onClickDate = (selectDate: Date) => {
        setDefaultDate(selectDate);
        setSelectedDate(selectDate);
        if(changeDate)
        changeDate(selectDate);
    }

    const classHandler = (day: Date) => {
        let className = "";
        if(day.toDateString() === new Date().toDateString() && day.toDateString() !== selectedDate?.toDateString()){
            className = "border-cyan-400"
        }else if(day.toDateString() === selectedDate?.toDateString()){
            className = "bg-cyan-400"
        }else if( startDate  && endDate && monthType === "current"  &&  day  > startDate){
            className = "bg-cyan-200"
        }else if(startDate && endDate && monthType === "future" &&  day < endDate){
            className = "bg-cyan-200"
        }
        return className;
    }

  return (
    <div className='custom-date-calendar-body'>
        <div className='custom-date-calendar-table'>
            <div className='container mx-auto p-4'>
                <div className='grid grid-cols-7 gap-2'>
                    {weekDays.map((weekItems: string) => {
                        return (
                            <div key={weekItems} className='font-bold text-center'><span>{weekItems.slice(0, 2)}</span></div>)
                    })}
                    {Array.from({ length: startingDayIndex }).map((_, index) => {
                        return (
                            <div
                                key={`empty-${index}`}
                                className="border rounded-md p-2 text-center"
                            />
                        );
                    })}
                    {daysInMonth.map((day, index) => {
                        return (
                            <div
                                key={index}
                                className={`border rounded-md p-2 text-center cursor-pointer ${classHandler(day)}`}
                                onClick={() => onClickDate(day)}
                            >
                                {dateFormate(day, "en-US", { day: 'numeric' })}
                            </div>
                        );
                    })}
                </div>
                <div className='custom-date-calendar-row'>
                    {allMonthNumber && allMonthNumber.map((monthItems: number) => {
                        return (
                            <div key={monthItems} className='custom-date--table-header-cell'><span>{monthItems}</span></div>)
                    })}
                </div>
            </div>
        </div>
    </div> 
  )
}
