import React from 'react'

type props = {
    year : number
}
export default function Index({year}: props) {
    const monthNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className='grid grid-flow-col auto-cols-max gap-x-5'>
            <div className="w-20 text-center"><h1>{year}  </h1> </div>
            <div className='grid grid-cols-6 gap-2 w-80'>
              {monthNumbers.map((value, index) => {
                return (
                  <div
                    key={`month-${index}`}
                    className="border rounded-md p-2 text-center"
                    // onClick={}
                  >
                    {value}
                  </div>
                );
              })}
            </div>
          </div>
  )
}
