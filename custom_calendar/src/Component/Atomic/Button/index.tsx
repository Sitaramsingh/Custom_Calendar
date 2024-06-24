import React from 'react'

type props = {
    children?: string | JSX.Element | JSX.Element[] | any;
    className?: string;
    onClick? : () => void;
  }
export default function Index({className, children, onClick}: props) {
  return (
    <button className={className} onClick={onClick}>
        {children}
    </button>
  )
}
