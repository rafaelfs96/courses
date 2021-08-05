import React from 'react'
import If from './If'

export default function IconButton({hide, type, icon, onClick}) {
  return (
    <If test={ !hide }>
      <button className={ 'btn btn-' + type } 
        onClick={ onClick }>
        <i className={ 'fa fa-' + icon }></i>
      </button>
    </If>
  )
  
}