import React from 'react'

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
    <input name={name} id={id} className={className} placeholder= {placeholder}  onChange={onChange} />
  )
}
