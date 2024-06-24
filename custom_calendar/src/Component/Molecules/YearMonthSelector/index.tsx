import React from 'react'
import SingleYearMonth from '../SingleYearMonth';

type props = {
  date? : Date;
}
export default function Index({date}: props) {
  const currentDate = date ?  date :new Date() ;
  const currentYear = currentDate.getFullYear();
  return (
    <>
      {/* {Array.from({ length: (100) }, (_, i) => {
        return (
          <SingleYearMonth year={currentYear - i} />
        )
      })} */}
      {Array.from({ length: (100) }, (_, i) => {
        return (
          <div>
            <SingleYearMonth year={currentYear + i} />
          </div>
        )
      })}

    </>

  )
}
