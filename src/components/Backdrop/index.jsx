import React from 'react'
import './styles.css'

const Backdrop = ({show, clicked}) =>
  show
    ? <div className='Backdrop' onClick={clicked}></div>
    : null

export default Backdrop
