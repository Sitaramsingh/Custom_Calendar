import React, {useState} from 'react'
import DatePicker from '../../Component/Organism/DatePicker'

import './index.css';

export default function Index() {
  const [startDate , setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>() ;
  return (
    <div  >
      <DatePicker  startDate={startDate} endDate={endDate}/>
    </div>
  )
}
