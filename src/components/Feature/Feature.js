import React from 'react'

import classes from './Feature.css'

import Button from '../UI/Button/Button'

const feature = (props) => {
  return (
    <div className={classes.Feature}>
      <h1>{props.title()}</h1>
      <p>{props.children}</p>
      <Button>Read more</Button>
    </div>
  )
}

export default feature
