import './Intervalo.sass'
import React from 'react'
import { connect } from 'react-redux'

import { setMin, setMax } from '../store/actions/numeros'

import Card from './Card'

const Intervalo = props => {
  const { min, max } = props

  return (
    <Card title='Intervalo de numeros' red>
      <div className='intervalo'>
        <span>
          <strong>Minimo: </strong>
          <input type='number' value={ min } onChange={ e => props.changeMin(+e.target.value) } />
        </span>
        <span>
          <strong>Maximo: </strong>
          <input type='number' value={ max } onChange={ e => props.changeMax(+e.target.value) } />
        </span>
      </div>
    </Card>
  )
}

const mapStateToProps = state => {
  return {
    min: state.numeros.min,
    max: state.numeros.max
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeMin(newMin) {
      const action = setMin(newMin)
      dispatch(action)
    },
    changeMax(newMax) {
      const action = setMax(newMax)
      dispatch(action)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Intervalo)