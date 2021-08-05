import React from 'react'

export default function Input({input, placeholder, readOnly, type}) {
  return (
    <input { ...input }
      className='form-control'
      placeholder={ placeholder }
      readOnly={ readOnly }
      type={ type } />
  )
}