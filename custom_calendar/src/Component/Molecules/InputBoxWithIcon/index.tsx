import React from 'react'
import Button from '../../Atomic/Button'

type props = {
  placeholder?: string;
  name?: string;
  id?: string;
  className?: string;
  onChange? : () => void;
  children?: string | JSX.Element | JSX.Element[] | any;
}
export default function Index({placeholder, onChange, name, id, className}: props) {
  return (
    <div className="wrapper">
     <input name={name} id={id} className={className} placeholder= {placeholder}  onChange={onChange} />
    <Button className="icon">Icon</Button>
  </div>
   
  )
}
