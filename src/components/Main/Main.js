import React from 'react'

import classes from './Main.css'
import Feature from '../Feature/Feature'

const data = [
  {
    title: ['superbly', 'responsive'],
    para: `Eiusmod nisi fugiat voluptate aliquip occaecat.Nulla eiusmod
    exercitation exercitation fugiat do proident commodo ex eiusmod duis
    quis labore culpa.Cillum dolore velit excepteur deserunt nulla
    pariatur.`
  },
  {
    title: ['squeeky', 'clean'],
    para: `Eiusmod nisi fugiat voluptate aliquip occaecat.Nulla eiusmod
    exercitation exercitation fugiat do proident commodo ex eiusmod duis
    quis labore culpa.Cillum dolore velit excepteur deserunt nulla
    pariatur.`
  },
  {
    title: ['multi', 'purpose'],
    para: `Eiusmod nisi fugiat voluptate aliquip occaecat.Nulla eiusmod
    exercitation exercitation fugiat do proident commodo ex eiusmod duis
    quis labore culpa.Cillum dolore velit excepteur deserunt nulla
    pariatur.`
  },
  {
    title: ['highly', 'flexible'],
    para: `Eiusmod nisi fugiat voluptate aliquip occaecat.Nulla eiusmod
    exercitation exercitation fugiat do proident commodo ex eiusmod duis
    quis labore culpa.Cillum dolore velit excepteur deserunt nulla
    pariatur.`
  }
]

const Main = () => {
  return (
    <main>
      <div className={classes.MainContainer}>
        <div className={classes.FeatureContainer}>
          {data.map( (el, id) => (
            <Feature
              key={id}
              title={() => (
                <React.Fragment>
                  <strong>{el.title[0]}</strong> {el.title[1]}
                </React.Fragment>
              )}
            > {el.para}
            </Feature>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Main
