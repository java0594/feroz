import React from 'react'


export default function titulo({encabezados}) {
  return (
    <h1 className='font-mono text-xl drop-shadow-md'>
    {encabezados}
    </h1>
  )
}
