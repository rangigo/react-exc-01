import React from 'react'

import classes from './Blog.css'

const blog = (props) => {
  let img = props.imgSrc ? (<img src={`/react-exc-01/${props.imgSrc}` } alt='a header img'/>) : null

  return (
    <div className={classes.Blog}>
      {img}
      <div className={classes.Testi}>
        <h4>{props.title}</h4>
        <p>{props.content}</p>
      </div>
    </div>
  )
}

export default blog
