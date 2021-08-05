import './Card.sass'
import React from 'react'

export default props => {
  const getColor = props => {
    if(props.red) return `card--red`
    if(props.green) return `card--green`
    if(props.blue) return `card--blue`
    if(props.purple) return `card--purple`
    return ''
  }

  return (
    <div className={`card ${getColor(props)}`}>
      <div className='card__header'>
        <span className='card__title'>
          { props.title }
        </span>
      </div>
      <div className='card__content'>
        { props.children }
      </div>
    </div>
  )
}