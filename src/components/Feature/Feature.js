import React from 'react'

import classes from './Feature.css'

import Button from '../UI/Button/Button'

const feature = props => {
  const icon = `fas fa-${props.type} fa-2x`

  return (
    <div className={classes.Feature}>
      <div className={classes.CircleIcon}>
        <i className={icon} />
      </div>
      <h1>{props.title()}</h1>
      <p>{props.children}</p>
      <Button>Read more</Button>
    </div>
  )
}

export default feature
