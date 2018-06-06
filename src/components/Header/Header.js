import React from 'react'

import classes from './Header.css'
import headerImg from '../../assets/Header-img.png'
import Button from '../UI/Button/Button'
import PopUp from '../UI/PopUp/PopUp'

const header = () => {
  return (
    <header className={classes.Header}>
      <div>
        <div className={classes.HeaderContainer}>
          <img className={classes.HeaderImg} src={headerImg} alt="bg header" />
          <div className={classes.HeaderDesc}>
            <h1>
              <span>powerfully simple</span> with a <span>squeeky clean</span>{' '}
              design
            </h1>
            <span>
              Find out how you can offer quick and powerful solutions to your
              customers now!
            </span>
            <Button>learn more</Button>
          </div>
        </div>
        <PopUp btnText='get started'>
          Create <span>powerful</span> solution now!
        </PopUp>
      </div>
    </header>
  )
}

export default header
