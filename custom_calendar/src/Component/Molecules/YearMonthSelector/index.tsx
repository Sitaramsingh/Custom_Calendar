import React from 'react'
import SingleYearMonth from '../SingleYearMonth';
import './index.css'

type props = {
  date? : Date;
  changeDate? :(param: Date) => void;
}
export default function Index({date, changeDate }: props) {
  const currentDate = date ?  date :new Date() ;
  const currentYear = currentDate.getFullYear();
  return (
    <div className="calendarContainer flex  overflow-y-auto flex-col ">
      {/* {Array.from({ length: (100) }, (_, i) => {
        return (
          <SingleYearMonth year={currentYear - i} />
        )
      })} */}
      {Array.from({ length: (100) }, (_, i) => {
        return (
          <div className='p-1'>
            <SingleYearMonth year={currentYear + i} changeDate={changeDate} />
          </div>
        )
      })}
    </div>

  )
}
