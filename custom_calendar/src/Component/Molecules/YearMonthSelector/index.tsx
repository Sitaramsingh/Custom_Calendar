import React, { useState } from 'react'
import SingleYearMonth from '../SingleYearMonth';
import { getTodayDate } from '../../../utils/calendarUtility'
import Button from '../../Atomic/Button';
import './index.css'

type props = {
  date?: Date;
  yearType: string;
  changeDate?: (param: Date) => void;
  handleYearSelect: (string: string) => void;
}
export default function Index({ date, changeDate, yearType, handleYearSelect }: props) {
  const currentDate = date ? date : getTodayDate();
  
  const currentYear = currentDate.getFullYear();
  
  return (
    <div className="calendarContainer flex  overflow-y-auto flex-col ">
      
      { !yearType &&  <div>
      <Button className="btn-style" onClick={() => handleYearSelect('prev')}>
        With Prevous Year
      </Button>
      <Button className="btn-style"  onClick={() => handleYearSelect('next')} >
        With Future Year
      </Button>
      <Button className="btn-style"  onClick={() => handleYearSelect('')} >
        Go back to calender
      </Button>
        </div> }
      {yearType  === 'prev'  && Array.from({ length: (100) }, (_, i) => {
        return (
          <SingleYearMonth year={currentYear - i} changeDate={changeDate} />
        )
      })}
      {yearType  === 'next'  && Array.from({ length: (100) }, (_, i) => {
        return (
          <div className='p-1'>
            <SingleYearMonth year={currentYear + i} changeDate={changeDate} />
          </div>
        )
      })}
    </div>

  )
}
