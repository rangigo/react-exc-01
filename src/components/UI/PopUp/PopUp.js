import React from 'react'

import Button from '../Button/Button'

import classes from './PopUp.css'

const popUp = props => {
  return (
    <div className={classes.PopUp}>
      <h1>
        {props.children}
      </h1>
      <Button btnType="WhiteBtn">get started</Button>
    </div>
  )
}

export default popUp
