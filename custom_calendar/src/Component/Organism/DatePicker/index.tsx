import React, {useState} from 'react'
import Calendar from '../../Molecules/CalendarWrapper'
import CustomPopOver from '../../Molecules/popover';
import InputBox from '../../Atomic/InputBox';
import Button from '../../Atomic/Button';

import './index.css';

type props = {
  children?: string | JSX.Element | JSX.Element[] | any;
  className?: string;
  date? : Date;
  startDate? : Date;
  endDate? : Date;
  onChangeDate? : (param: Date) => void;
}

export default function Index({} : props) {
  const currentDate = new Date();
  const [startDate, setStartDate] = useState(currentDate);
  const [endDate, setEndDate] = useState(new Date(currentDate.getFullYear(), currentDate.getMonth()+1, 1));
  const [startSelectedDate, setStartSelectedDate] = useState<Date>();
  const [endSelectedDate, setEndSelectedDate] = useState<Date>();
  
  const onChangeStartDate = (date: Date) => {
    setStartDate(date);
    setStartSelectedDate(date);
  }
  const onChangeEndDate = (date: Date) => {
    setEndDate(date);
    setEndSelectedDate(date);
  }
  return (
    <div  >
      {/* <CustomPopOver placement= "bottom" trigger="click" innerChildren={ <div className="wrapper">
          <InputBox placeholder='yyyy-MM-dd ~ yyyy-MM-dd' />
          <Button className="icon">Icon</Button>
        </div>  }> */}
        <div className='grid grid-cols-2 gap-2' >
          <Calendar  date={startDate} startDate={startSelectedDate}  endDate={endSelectedDate} onChangeDate={onChangeStartDate} monthType="current"/>
          <Calendar  date={endDate} startDate={startSelectedDate}  endDate={endSelectedDate}  onChangeDate={onChangeEndDate} monthType="future"/>
        </div>
      {/* </CustomPopOver> */}
    </div>
  )
}
