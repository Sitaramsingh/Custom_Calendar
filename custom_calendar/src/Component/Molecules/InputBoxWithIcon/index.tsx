import React from 'react'
import { Input, InputGroup, Grid, Row, Col } from 'rsuite';
import CalendarIcon   from '@rsuite/icons/Calendar';
import Button from '../../Atomic/Button'
import './index.css';

type props = {
  placeholder?: string;
  name?: string;
  id?: string;
  value?: string;
  className?: string;
  onChange? : () => void;
  children?: string | JSX.Element | JSX.Element[] | any;
}

export default function Index({placeholder, onChange, name, id, className, value}: props) {
  return (
    <div className="inputContainer flex  overflow-y-auto flex-col ">
      <InputGroup >
        <Input placeholder={placeholder} name={name} id={id}  className={className} value={value}/>
        <InputGroup.Addon>
          <CalendarIcon />
        </InputGroup.Addon>
      </InputGroup>
  </div>
   
  )
}
